<template>
    <!-- 头部区域 -->
    <div>
        <div class="header bg-main">
	  <div class="logo margin-big-left fadein-top">
		<h1><img src="images/y.jpg" class="radius-circle rotate-hover" height="50" alt="" />后台管理中心</h1>
	  </div>
	</div>
	
    <!-- 菜单区域--->
	<div class="leftnav">
	  <div class="leftnav-title"><strong><span class="icon-list"></span>菜单列表</strong></div>
	 
	 <h2><span class="icon-user"></span>用户管理</h2>
	  <ul style="display:block">
		<li><router-link tag='a' :to="{name:'UserAdd'}"><span class="icon-caret-right"/>添加用户</router-link></li>
		<li><router-link tag='a' :to="{name:'UserList'}"><span class="icon-caret-right"/>用户列表</router-link></li>
	  </ul>  
	  
	  <h2><span class="icon-pencil-square-o"></span>栏目管理</h2>
	  <ul>
		<li><a href="info.html" target="right"><span class="icon-caret-right"></span>内容管理</a></li>
		<li><a href="info.html" target="right"><span class="icon-caret-right"></span>添加内容</a></li>
		<li><a href="info.html" target="right"><span class="icon-caret-right"></span>分类管理</a></li>        
	  </ul>  
	  
	  <h2><span class="icon-pencil-square-o"></span>课程管理</h2>
	  <ul>
		<li><a href="info.html" target="right"><span class="icon-caret-right"></span>添加课程</a></li>
		<li><a href="info.html" target="right"><span class="icon-caret-right"></span>课程列表</a></li>   
	  </ul> 
	</div>
	
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

export default {
    created(){
        $(function(){
		  $(".leftnav h2").click(function(){
			  $(this).next().slideToggle(200);	
			  $(this).toggleClass("on"); 
		  })
		  $(".leftnav ul li a").click(function(){
				$("#a_leader_txt").text($(this).text());
				$(".leftnav ul li a").removeClass("on");
				$(this).addClass("on");
		  })
		});
    }
}
</script>

<style>
  @import "../assets/css/pintuer.css";
  @import "../assets/css/admin.css";
</style>

