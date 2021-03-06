import { message } from 'antd';
import axios from 'axios';
import qs from 'qs';
message.config({
  top: 100,
  duration: 2,
  maxCount: 3,
});
if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = 'http://127.0.0.1:7001/api';
} else {
  axios.defaults.baseURL = 'http://140.143.124.13:7001/api';
}
axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// 允许axio请求携带cookies
axios.defaults.withCredentials = true;
// 请求拦截器
axios.interceptors.request.use(
  config => {
    if (config.method === 'post') {
      config.data = qs.stringify(config.data);
    }
    if (sessionStorage.token) {
      config.headers.Authorization = sessionStorage.token || sessionStorage.admin;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);
// 响应拦截器
axios.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return Promise.resolve(response);
    }
    return Promise.reject(response);
  },
  error => {
    if (error.response.status) {
      switch (error.response.status) {
        case 403:
          message.error('登录过期，请重新登录');
          sessionStorage.removeItem('token');
          break;
        case 404:
          message.error('资源不存在');
          break;
        default:
          message.error('请求有误');
      }
    }
  },
);
export default axios;
