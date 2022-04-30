export default [
  {
    path: '/main/story/chat',
    name: 'chat',
    component: () => import('@/page/story/chat/index.vue'),
    children: [],
  },
  {
    path: '/main/story/list',
    name: 'list',
    component: () => import('@/page/story/list/index.vue'),
    children: [],
  },
];
