// 引入仓库定义函数
import { defineStore } from 'pinia';
// 传入2个参数，定义仓库并导出
// 第一个参数唯一不可重复，字符串类型，作为仓库ID以区分仓库
// 第二个参数，以对象形式配置仓库的state,getters,actions
// 配置 state getters actions

export const useUserStore = defineStore('user', {
  state: () => ({
    name: 'lleeooo',
  }),
  getters: {},
  actions: {},
});
