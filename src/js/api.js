/* import {
   Toast,
 } from 'mint-ui';*/
let host = 'http://localhost:3000/';
const api = {
  apiConfig() {
    return {
      baseURL: 'http://localhost:3000/',
      timeout: 1000000,
      transformResponse: [function (data) {
        // 这里提前处理返回的数据


        /*         Toast({
                   message: data.ErrMsg,
                   position: 'bottom',
                   duration: 5000,
                 });*/

        return data;
      }],
    };
  },
  login: `${host}login`,
  userInfo: `${host}users/userInfo`,
  folder: `${host}note/folder`,
  getFolder: `${host}note/getFolder`
}; // //////////api存放位置
export default api;
