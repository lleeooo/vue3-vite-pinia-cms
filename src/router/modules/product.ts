// goods
export default [
  {
    path: '/main/product/category',
    name: 'category',
    component: () => import('@/page/product/category/index.vue'),
    children: [],
  },
  {
    path: '/main/product/goods',
    name: 'goods',
    component: () => import('@/page/product/goods/index.vue'),
    children: [],
  },
];
