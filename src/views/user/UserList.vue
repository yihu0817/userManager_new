<template>
  <div class="emp_contaner">
    <table>
      <tr>
        <th>头像</th>
        <th>用户名</th>
        <th>密码</th>
        <th colspan="2">操作</th>
      </tr>

      <tr v-for="(user,index) in userLists" :key="index">
        
        <td v-if="user.headerimg">
          <!-- <img :src="'http://192.168.35.114:8089/'+user.headerimg" width="80px" height="80px"> -->
          <img :src="BASEURL + user.headerimg" width="80px" height="80px">
        </td>
        <td v-else>
          <img src="../../assets/images/y.jpg" width="80px" height="80px">
        </td>

        <td>{{user.username}}</td>
        <td>{{user.password}}</td>
        <td>
          <router-link :to="{name:'UserList',query:{uid:user.uid}}" @click.native="userDelete">删除</router-link>
        </td>
        <td>
          <router-link :to="{name:'UserUpdate',query:{uid: user.uid}}">修改</router-link>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
import { RequestUserList, RequestUserDelete,baseUrl } from "api/api.js";
export default {
  created() {
    console.log("create>>>>");
    this.userList();
  },
  mounted() {
    console.log("mounted>>>>");
  },
  data() {
    return {
      userLists: [],
      BASEURL: baseUrl,
    };
  },
  methods: {
    userList() {
      RequestUserList().then(data => {
        if (data.resultCode === 1) {
          this.userLists = data.resultInfo;
        }
      });
    },
    userDelete() {
      let uid = this.$route.query.uid;
      const params = { params: { uid: uid } };
      RequestUserDelete(params).then(data => {
        if (data.resultCode === 1) {
          this.userList();
        }
      });
    }
  }
};
</script>


<style scoped>
@import "../../assets/css/tables.css";
</style>



