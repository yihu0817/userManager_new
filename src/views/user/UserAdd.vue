<template>
  <div>
    <form name="formadd" @submit.prevent="userAdd" method="post">
      <table>
        <input type="hidden" v-model="uid">
        <tr bgcolor="#f5f5f5">
          <td>
            <div>
              <font>*</font> 姓名:
            </div>
          </td>
          <td>
            <input id="clientname" type="text" name="name"  v-model="username" size="30">
          </td>
        </tr>
        <tr bgcolor="#f0f0f0">
          <td>
            <div>
              <font>*</font> 密码:
            </div>
          </td>
          <td>
            <input id="password" type="password" name="password"  v-model="password" size="30">
          </td>
        </tr>
         
        <tr bgcolor="#f5f5f5">
          <td></td>
          <td colspan="2">
            <input type="submit" value="提交">
            <input type="reset" value="重置">
          </td>
        </tr>
          
      </table>
        <div> {{message}}</div>
    </form>
  </div>
</template>
<script>
export default {
    data(){
        return{
            uid:'',
            username:'',
            password:'',
            message: '',
        }
    },
    methods:{
        userAdd(){
            const that = this;
            that.$axios.post('http://192.168.35.114:8089/api/add',{username:this.username,psw:this.password}).then( response => {
                if(response.data.resultCode === 1){
                     that.message = '添加用户成功!';
                       this.$router.push({name:'UserList'});
                }else{
                     that.message = '添加用户失败!';
                }
            }).catch( error => {
                console.error(error);
            });
        }
    }
}
</script>

<style scoped>
  table {
    background-color: #CCCCCC;
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