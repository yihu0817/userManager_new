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
        <td>
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
      userLists: []
    };
  },
  methods: {
    userList() {
      const that = this;
      this.$axios.get("http://192.168.35.114:8089/api/list").then(response => {
        console.log(response.data);
        if (response.data.resultCode === 1) {
          this.userLists = response.data.resultInfo;
        }
      });
    },
    userDelete() {
      let uid = this.$route.query.uid;
      //  console.log(`uid = ${uid}`);
      // 箭头函数中this
      const that = this;
      this.$axios
        .get("http://192.168.35.114:8089/api/delete", { params: { uid: uid } })
        .then(response => {
          if (response.data.resultCode === 1) {
            that.userList();
          }
        });
    }
  }
};
</script>


<style scoped>
@import "../../assets/css/tables.css";
</style>



