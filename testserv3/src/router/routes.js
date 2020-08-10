const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/home', component: () => import('components/Home/Layout/Home.vue') },
      { path: '/cart', component: () => import('components/Cart/Layout/Cart.vue') },
      { path: '/buying', component: () => import('components/Buying/Layout/Buying.vue') },
      { path: '/selling', component: () => import('components/Selling/Layout/Selling.vue') }
    ]
  }
]
export default routes
