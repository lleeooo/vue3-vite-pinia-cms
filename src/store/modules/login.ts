// 引入仓库定义函数
import { defineStore } from 'pinia';
// 传入2个参数，定义仓库并导出
// 第一个参数唯一不可重复，字符串类型，作为仓库ID以区分仓库
// 第二个参数，以对象形式配置仓库的state,getters,actions
// 配置 state getters actions
import { accoutLogin, userInfo, userMenu } from '@/service/login';
import { Iaccount } from '@/service/login/type';
import localCache from '@/utils/cache';
import mapRouters from '@/utils/map-routers';
import router from '@/router';

export const useUserStore = defineStore('user', {
  state: () => ({
    token: '',
    userInfo: {},
    menu: [],
  }),
  getters: {},
  actions: {
    async onLoginClick(account: Iaccount) {
      const res = await accoutLogin({ ...account });
      const { token, id } = res.data;
      //保存token到缓存中
      localCache.setLocalCache('token', token);
      this.token = token;

      //用户信息
      const userInfoMessage = await userInfo(id);
      localCache.setLocalCache('userInfo', userInfoMessage.data);
      this.userInfo = userInfoMessage.data;

      //用户路由权限
      const userMenuMessage = await userMenu(id);
      const menuList = userMenuMessage.data;
      localCache.setLocalCache('userMenu', menuList);
      this.menu = menuList;

      //动态加载路由
      const rourters = mapRouters(menuList);
      rourters.forEach((route) => router.addRoute('main', route));
      router.push('/main');
    },
    loadLocalLogin() {
      const token = localCache.getLocalCache('token');
      if (token) this.token = token;

      const userInfo = localCache.getLocalCache('userInfo');
      if (userInfo) this.userInfo = userInfo;

      const userMenus = localCache.getLocalCache('userMenu');
      if (userMenus) this.menu = userMenus;
    },
  },
});
