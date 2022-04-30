import axios from 'axios';
import proxy from './config';
import localCache from '@/utils/cache';

const instance = axios.create({
  baseURL: proxy['development'].BASE_URL,
  timeout: 1000,
});

instance.interceptors.request.use(
  (config) => {
    const token = localCache.getLocalCache('token');
    if (token) {
      config.headers!.authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => error,
);

instance.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      const { data } = response;
      if (data.code === 0) {
        return data;
      }
    }
    return response;
  },
  (err) => err,
);

// const api = new instance()
export default instance;
