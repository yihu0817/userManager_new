import axios from 'axios';

export let baseUrl = 'http://192.168.35.114:8089';

// export const RequestLogin = function (params) {
//     return axios.post(`${baseUrl}/api/login`, params).then(response => {
//         return response.data;
//     });
// } 
/**登录*/
export const RequestLogin = params => axios.post(`${baseUrl}/api/login`, params).then( res => res.data);
/**用户列表 */
export const RequestUserList = () => axios.get(`${baseUrl}/api/list`).then( res => res.data);
/**删除用户 */
export const RequestUserDelete = params => axios.get(`${baseUrl}/api/delete`, params).then(res => res.data);
/**添加用户,包含头像 */
export const RequestUserAdd = (pararms, config) => axios.post(`${baseUrl}/api/add`, pararms, config).then(res => res.data);
/**查询用户 */
export const RequestUserFind = params => axios.get(`${baseUrl}/api/find`,params).then( res => res.data);
/**修改用户 */
export const RequestUserUpdate = params => axios.post(`${baseUrl}/api/update`,params).then( res => res.data);


