<template>
  <ion-page>
    <ion-content :fullscreen="false">
      <ion-card class="card">
        <ion-icon :src="arrowUndo" @click="goBack"></ion-icon>
        <ion-text>
          <p class="title">Create your account</p>
        </ion-text>
        <ion-text>
          <p class="sub-title">Lorem ipsum dolor sit amet</p>
        </ion-text>
      </ion-card>

      <form @submit.prevent="register">
        <div>
          <ion-item fill="outline" class="form-control">
            <ion-label position="floating">Email</ion-label>
            <ion-input
              type="text"
              name="email"
              id="email"
              placeholder="email"
              v-model.trim="email"
            />
          </ion-item>
          <ion-item fill="outline" class="form-control">
            <ion-label position="floating">Password</ion-label>
            <ion-input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              v-model.trim="password"
            />
          </ion-item>
        </div>

        <div class="form-action">
          <p>
            Already have an account?
            <router-link to="/signin">Sign in</router-link>
          </p>
          <button>Sign up</button>
          <span>Terms & Conditions</span>
        </div>
      </form>
    </ion-content>
  </ion-page>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { arrowUndo } from "ionicons/icons";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const store = useStore();
    const email = ref("");
    const password = ref("");
    let error = ref(null);

    const goBack = () => {
      router.push("/auth");
    };

    const register = async () => {
      const data = {
        email: email.value,
        password: password.value,
      };
      try {
        await store.dispatch("signup", data);
        router.push("/signin");
      } catch (err) {
        error = err.message || "Failed to register, try later.";
      }
    };

    return {
      error,
      email,
      password,
      arrowUndo,
      goBack,
      register,
    };
  },
};
</script>

<style scoped>
ion-content {
  width: 100%;
  height: 100%;
  position: relative;
  padding: 1rem;
}
ion-icon {
  width: 24px;
  height: 24px;
}
.card {
  box-shadow: none;
  padding: 1rem;
  margin: 0;
  background: transparent;
}
.title {
  font: 700 28px Roboto;
  margin-bottom: 0;
}
.sub-title {
  font: 400 24px Roboto;
  margin-top: 0;
}
form {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
}
.form-control {
  margin: .5rem 0;
}
.form-control input {
  width: 100%;
  height: 100%;
  padding: 0.5rem 0.75rem;
  border: 0px;
  border-radius: 14px;
}
.form-action {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  /* position: absolute;
  bottom: 0;
  left: 0; */
  text-align: center;
}
.form-actionp {
  margin: .5rem 0;
}
.form-action a {
  text-decoration: none;
}
.form-action button {
  padding: 0.75rem 0.75rem;
  border-radius: 14px;
}
.form-action span {
  font-size: 14px;
  margin-top: .25rem;
}
</style>