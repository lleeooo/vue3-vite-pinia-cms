import { createPinia } from 'pinia';

const store = createPinia();

export { store };

export * from './modules/login';

export default store;
