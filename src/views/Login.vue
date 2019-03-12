<template>
  <div>
    <div class="bg"></div>
    <div class="container">
      <div class="line bouncein">
        <div class="xs6 xm4 xs3-move xm4-move">
          <div style="height:150px;"></div>
          <div class="media media-y margin-big-bottom"></div>
          <form action="index.html" method="post" @submit.prevent="login">
            <div class="panel loginbox">
              <div class="text-center margin-big padding-big-top">
                <h1>后台管理中心</h1>
              </div>
              <div class="panel-body" style="padding:30px; padding-bottom:10px; padding-top:10px;">
                <div class="form-group">
                  <div class="field field-icon-right">
                    <input
                      type="text"
                      class="input input-big"
                      name="name"
                      placeholder="登录账号"
                      data-validate="required:请填写账号"
                      v-model="username"
                    >
                    <span class="icon icon-user margin-small"></span>
                  </div>
                </div>
                <div class="form-group">
                  <div class="field field-icon-right">
                    <input
                      type="password"
                      class="input input-big"
                      name="password"
                      placeholder="登录密码"
                      data-validate="required:请填写密码"
                      v-model="password"
                    >
                    <span class="icon icon-key margin-small"></span>
                  </div>
                </div>
                {{error}}
              </div>
              <div style="padding:30px;">
                <input
                  type="submit"
                  class="button button-block bg-main text-big input-big"
                  value="登录"
                >
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {RequestLogin} from '../api/api.js'
export default {
    data(){
      return{
        username:'',
        password:'',
        error:''
      }
    },
    methods:{
      login(){
          RequestLogin({username:this.username,password:this.password}).then( data => {
             if(data.resultCode === 1){
               this.$router.push({name:'Main',params:{'username':this.username}});
             }else{
               this.error = response.data.resultInfo;
             }
          });
      }
    }
}
</script>

<style>
  @import "../assets/css/pintuer.css";
  @import "../assets/css/admin.css";
</style>


