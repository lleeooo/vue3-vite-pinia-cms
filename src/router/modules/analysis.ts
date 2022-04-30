export default [
  {
    path: '/main/analysis/dashboard',
    name: 'dashboard',
    component: () => import('@/page/analysis/dashboard/index.vue'),
    children: [],
  },
  {
    path: '/main/analysis/overview',
    name: 'overview',
    component: () => import('@/page/analysis/overview/index.vue'),
    children: [],
  },
];
