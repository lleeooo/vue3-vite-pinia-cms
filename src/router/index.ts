import { createRouter, createWebHashHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import localCache from '@/utils/cache';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: 'login',
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/page/login/index.vue'),
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/page/main/index.vue'),
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = localCache.getLocalCache('token');
    if (!token) {
      return '/login';
    }
  }
});

export default router;
