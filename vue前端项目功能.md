
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