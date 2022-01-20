import { createRouter, createWebHistory } from '@ionic/vue-router';
import store from '../store';
import TabsPage from '../views/TabsPage.vue'

const UserAuth = () => import('@/pages/auth/UserAuth.vue');
const UserSign = () => import('@/pages/auth/UserSign.vue');
const UserRegister = () => import('@/pages/auth/UserRegister.vue');

const routes = [
  {
    path: '/',
    redirect: '/tabs/tab1'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    meta: { requireAuth: true },
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1Page.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2Page.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3Page.vue')
      }
    ]
  },
  {
    name: '',
    path: '/register',
    meta: { requireUnAuth: true },
    component: UserRegister,
  },
  {
    path: '/signin',
    meta: { requireUnAuth: true },
    component: UserSign,
  },
  {
    path: '/auth',
    meta: { requireUnAuth: true },
    component: UserAuth
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, _, next) => {
  if (to.meta.requireAuth && !store.getters.isUserLogin) {
    next('/auth')
  } else if (to.meta.requireUnAuth && store.getters.isUserLogin) {
    next('/tabs/tab1')
  } else {
    next()
  }
})

export default router
