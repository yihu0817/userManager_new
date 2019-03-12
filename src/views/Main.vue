<template>
  
  <div>
		<!-- 头部区域 -->
    <Header></Header>

    <!-- 菜单区域--->
    <nav-menu></nav-menu>

    <!-- 内容区域-->
    <div class="rightContent">
      <div class="admin">
        <!--路由输出-->
        <router-view/>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style >
	@import "../assets/css/pintuer.css";
	@import "../assets/css/admin.css";
</style>

