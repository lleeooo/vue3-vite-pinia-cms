export default [
  {
    path: '/main/system/department',
    name: 'department',
    component: () => import('@/page/system/department/index.vue'),
    children: [],
  },
  {
    path: '/main/system/menu',
    name: 'menu',
    component: () => import('@/page/system/menu/index.vue'),
    children: [],
  },
  {
    path: '/main/system/role',
    name: 'role',
    component: () => import('@/page/system/role/index.vue'),
    children: [],
  },
  {
    path: '/main/system/user',
    name: 'user',
    component: () => import('@/page/system/user/index.vue'),
    children: [],
  },
];
