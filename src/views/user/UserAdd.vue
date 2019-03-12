<template>
  <div>
    <!-- <form name="formadd" @submit.prevent="userAdd" method="post" enctype="multipart/form-data"> -->
    <table>
      <input type="hidden" v-model="uid">
      <tr bgcolor="#f5f5f5">
        <td>
          <div>
            <font>*</font> 姓名:
          </div>
        </td>
        <td>
          <input type="text" v-model="username">
        </td>
      </tr>
      <tr bgcolor="#f0f0f0">
        <td>
          <div>
            <font>*</font> 密码:
          </div>
        </td>
        <td>
          <input type="password" v-model="password">
        </td>
      </tr>
      <tr bgcolor="#f5f5f5">
        <td>
          <div>头像:</div>
        </td>
        <td>
          <input type="file" @change="changeFile($event)">
        </td>
      </tr>

      <tr bgcolor="#f5f5f5">
        <td></td>
        <td colspan="2">
          <button @click="userAdd">提交</button>
        </td>
      </tr>
    </table>
    <div>{{message}}</div>
    <!-- </form> -->
  </div>
</template>
<script>
import { RequestUserAdd } from "api/api.js";
export default {
  data() {
    return {
      uid: "",
      username: "",
      password: "",
      message: "",
      file: ""
    };
  },
  methods: {
    changeFile() {
      let file = event.target.files[0];
      this.file = file;
    },
    userAdd() {
      let formData = new FormData(); // 创建Form表单对象
      formData.append("username", this.username); // 向表单对象添加提交项,名为username,值为this.username
      formData.append("psw", this.password);
      formData.append("fileHeader", this.file);

      // 文件上传 Content-Type": "multipart/form-data
      let config = {
        headers: { "Content-Type": "multipart/form-data" }
      };

      RequestUserAdd(formData, config)
        .then(data => {
          if (data.resultCode === 1) {
            this.message = "添加用户成功!";
            this.$router.push({ name: "UserList" });
          } else {
            this.message = "添加用户失败!";
          }
        }).catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
table {
  background-color: #cccccc;
  border: 1px;
  width: 100%;
}

table tr {
  height: 20px;
  line-height: 30px;
}

table tr div {
  text-align: right;
}

td font {
  color: red;
}
</style>