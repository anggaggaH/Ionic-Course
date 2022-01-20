let timer;

export default {
    state() {
        return {
            isLoggedIn: false,
            token: null,
            userId: null,
            didAutoLogout: false
        }
    },
    actions: {
        async login(context, payload) {
            return context.dispatch('auth', {
                ...payload,
                mode: 'login'
            });
        },
        async signup(context, payload) {
            return context.dispatch('auth', {
                ...payload,
                mode: 'signup'
            });
        },
        async auth(context, payload) {
            const mode = payload.mode;
            const key = 'AIzaSyDyvQw0i0rVRFR_R1FtsolSYJtT1qNmTuU'
            let url =
                `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`;

            if (mode === 'signup') {
                url =
                    `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${key}`;
            }
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                    email: payload.email,
                    password: payload.password,
                    returnSecureToken: true
                })
            });

            const responseData = await response.json();

            if (!response.ok) {
                const error = new Error(
                    responseData.message || 'Failed to authenticate. Check your login data.'
                );
                throw error;
            }

            const expiresIn = +responseData.expiresIn * 1000;
            // const expiresIn = 5000;
            const expirationDate = new Date().getTime() + expiresIn;

            localStorage.setItem('token', responseData.idToken);
            localStorage.setItem('userId', responseData.localId);
            localStorage.setItem('tokenExpiration', expirationDate);

            timer = setTimeout(function () {
                context.dispatch('autoLogout');
            }, expiresIn);

            context.commit('setUserLogin', {
                isLoggedIn: true,
                token: responseData.idToken,
                userId: responseData.localId
            });
        },
        tryLogin(context) {
            const token = localStorage.getItem('token');
            const userId = localStorage.getItem('userId');
            const tokenExpiration = localStorage.getItem('tokenExpiration');

            const expiresIn = +tokenExpiration - new Date().getTime();

            if (expiresIn < 0) {
                return;
            }

            timer = setTimeout(function () {
                context.dispatch('autoLogout');
            }, expiresIn);

            if (token && userId) {
                context.commit('setUser', {
                    token: token,
                    userId: userId
                });
            }
        },
        logout(context) {
            localStorage.removeItem('token');
            localStorage.removeItem('userId');
            localStorage.removeItem('tokenExpiration');

            clearTimeout(timer);

            context.commit('setUser', {
                isLoggedIn: false,
                token: null,
                userId: null
            });
        },
        autoLogout(context) {
            context.dispatch('logout');
            context.commit('setAutoLogout');
        }
    },
    mutations: {
        setUserLogin(state, payload) {
            state.isLoggedIn = payload.isLoggedIn
            state.token = payload.token
            state.userId = payload.userId
            state.didAutoLogout = false;
        },
        setAutoLogout(state) {
            state.didAutoLogout = true;
        }
    },
    getters: {
        isUserLogin(state) {
            return state.isLoggedIn
        },
        userId(state) {
            return state.userId;
        },
        token(state) {
            return state.token;
        },
        isAuthenticated(state) {
            return !!state.token;
        },
        didAutoLogout(state) {
            return state.didAutoLogout;
        }
    }
}