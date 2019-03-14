<template>
  <div class="header bg-main">
    <div class="logo margin-big-left fadein-top">
      <h1>
        <img src="images/y.jpg" class="radius-circle rotate-hover" height="50" alt>后台管理中心
      </h1>
    </div>

    <div class="head-l">
      <div class="button button-little bg-blue" @click="logout"><span class="icon-power-off"></span>退出登录</div>
    </div>

    <div style="color:lightcyan;font-size:14px; float: right; margin-right: 40px; margin-top: 20px">
      当前用户:{{user}}
      <span style="font-size:14px;"></span>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      user: ''
    }
  },
  mounted(){
    //  this.user = sessionStorage.getItem('user');
    this.user = this.$store.getters.getUser;
  },
  methods:{
    logout(){
      // sessionStorage.removeItem('user');
      this.$store.dispatch('clearUser');
      this.$router.push({name:'Login'});
    }
  }
}
</script>

<style scoped>
@import "../assets/css/pintuer.css";
@import "../assets/css/admin.css";
</style>