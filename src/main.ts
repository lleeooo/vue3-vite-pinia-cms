import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/index.css';
import 'normalize.css';
import '@/style/index.less';
import router from './router';
import { store, useUserStore } from './store';

const app = createApp(App);
app.use(store);
app.use(router);
app.use(ElementPlus);

//因为pinia刷新之后都会消失 所以需要重新赋值
const userStore = useUserStore();
userStore.loadLocalLogin();

app.mount('#app');
