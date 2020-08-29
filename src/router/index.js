import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('../views/front/Front.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/front/About.vue'),
      },
      {
        path: 'shop',
        component: () => import('../views/front/Shop.vue'),
      },
      {
        path: 'checkout',
        component: () => import('../views/front/checkout.vue'),
      },
      {
        path: 'FAQ',
        component: () => import('../views/front/FAQ.vue'),
      },
    ],
  },
  {
    path: '/admin',
    component: () => import('../views/admin/Admin.vue'),
    children: [
      {
        path: '/admin/login',
        component: () => import('../views/admin/Login.vue'),
      },
      {
        path: '/admin/productsmanagement',
        component: () => import('../views/admin/Productsmanagement.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
