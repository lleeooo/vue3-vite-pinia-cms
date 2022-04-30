import { RouteRecordRaw } from 'vue-router';

const mapRouters = (userMenus: any[]) => {
  const routers: RouteRecordRaw[] = [];

  //1.获取所有路由数据
  const allRouters: RouteRecordRaw[] = [];
  const routerFiles = import.meta.globEager('../router/modules/*.ts/');
  const filesArr = Object.keys(routerFiles);

  filesArr.forEach((item) => {
    allRouters.push(...routerFiles[item].default);
  });

  //查询并添加路由
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRouters.find((route) => route.path === menu.url);
        if (route) routers.push(route);
      } else {
        _recurseGetRoute(menu.children);
      }
    }
  };

  _recurseGetRoute(userMenus);
  return routers;
};

export default mapRouters;
