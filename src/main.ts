import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/index.css';
import router from './router';
import { store } from './store';

const app = createApp(App);

app.use(store);
app.use(router);
app.use(ElementPlus);
app.mount('#app');
