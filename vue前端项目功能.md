
## 图片上传
* 实现思路：通过FormData对象模拟表单上传
* 步骤:
    - 第一步: 页面
    ```html
    <input  type="file"  @change="changeFile($event)">
    <button @click="userAdd">提交</button>
    ```
    - 第二步:vue js代码

    ```javascript
    changeFile() {
      let file = event.target.files[0];
      this.file = file;
    }

    ```

    ```javascript
    userAdd() {
      let formData = new FormData(); // 创建Form表单对象
      formData.append("username", this.username);  // 向表单对象添加提交项,名为username,值为this.username
      formData.append("psw", this.password);
      formData.append("fileHeader",this.file,this.file.name);

      // 文件上传 Content-Type": "multipart/form-data
      let config = {
        headers: { "Content-Type": "multipart/form-data" }
      };

      this.$axios
        .post("http://192.168.35.114:8089/api/add",formData,config )
        .then(response => {
          if (response.data.resultCode === 1) {
            this.message = "添加用户成功!";
            this.$router.push({ name: "UserList" });
          } else {
            this.message = "添加用户失败!";
          }
        })
        .catch(error => {
          console.error(error);
        });
    }
    ```

    - 第三步 列表显示
    ```html
      <tr v-for="(user,index) in userLists" :key="index">
        <td v-if="user.headerimg">
          <img :src="'http://192.168.35.114:8089/'+user.headerimg" width="80px" height="80px" >
        </td>
        <td v-else>
           <img src="../../assets/images/y.jpg" width="80px" height="80px">
        </td>
      </tr>
    ```

## axios封装
```javascript
import axios from 'axios';

let baseUrl = 'http://192.168.35.114:8089';

// export const RequestLogin = function (params) {
//     return axios.post(`${baseUrl}/api/login`, params).then(response => {
//         return response.data;
//     });
// } 
/**登录*/ 
export const RequestLogin = params =>  axios.post(`${baseUrl}/api/login`, params).then( res => res.data);


// e6模块规范 暴露模块对象和引入模块对象方式
demo.js
const foo = function(a){
   a++;
   return a;
}
export {foo}
export default foo;

main.js
import {foo} form 'demo.js'

const a = foo();


// 箭头函数
const foo = (a) => {
   return a++;
}
const foo = a => a++;

let promise = axios.post(`${baseUrl}/api/login`, params);
promise.then(res => res.data);
promise.catch();

axios.post(`${baseUrl}/api/login`, params).then( res => res.data);
```

## 组件components
```html
 <div>
		<!-- 头部区域 -->
    <Header></Header>

    <!-- 菜单区域--->
    <nav-menu></nav-menu>
```

## 别名
build目录下webpack.base.conf.js
```javascript
  alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'static':resolve('static'),
      'api': resolve('src/api'),
    }
```


## 统一登录验证
当用户没有登录时直接访问未授权页面是不允许的.需要进行登录之后才能访问

* 在用户登录时记住登录状态
* 在访问需要登录页面进行判断( 为了不在每个需要授权页面都写判断代码，在某个地方进行统一登录验证。)
* 退出登录时清除登录状态

vue项目  sessionStorage + 全局前置守卫