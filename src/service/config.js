import axios from 'axios';
import { useDispatch } from 'react-redux';
import { store } from '../index';
import { turnOffLoading, turnOnLoading } from '../redux/spinnerSlice';

export let http = axios.create({
  baseURL: 'https://movienew.cybersoft.edu.vn',
  headers: {
    TokenCybersoft:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3MSIsIkhldEhhblN0cmluZyI6IjE0LzAzLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc0MTkxMDQwMDAwMCIsIm5iZiI6MTcxNDA2NDQwMCwiZXhwIjoxNzQyMDU4MDAwfQ.aL6UU86iw9qfiazPYi9hHV3FjYthitqZbK5pBfChSiU',
    Authorization:
      'bearer ' + JSON.parse(localStorage.getItem('USER_LOGIN'))?.accessToken,
  },
});

// axios interceptor ~ sẽ tự động chạy mỗi khi gọi request axios và nhận response từ axios
// let dispatch = useDispatch();
// Add a request interceptor
http.interceptors.request.use(
  function (config) {
    console.log('request đi');
    // Do something before request is sent
    store.dispatch(turnOnLoading());
    return config;
  },
  function (error) {
    // Do something with request error
    store.dispatch(turnOffLoading());
    return Promise.reject(error);
  },
);

// Add a response interceptor
http.interceptors.response.use(
  function (response) {
    console.log('response về');
    store.dispatch(turnOffLoading());
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    store.dispatch(turnOffLoading());

    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  },
);
