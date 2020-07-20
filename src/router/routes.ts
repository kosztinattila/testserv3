import { RouteConfig } from 'vue-router'

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/body', component: () => import('components/body.vue') },
      { path: "/cart",component: () => import('components/cart.vue') },
      { path: "/buying",component: () => import('components/buying.vue') },
      { path: "/selling",component: () => import('components/selling.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  },
]

export default routes
