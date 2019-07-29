<template>
  <div id="app">
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light" >
        <a class="py-2" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor"
               stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="d-block mx-auto" role="img"
               viewBox="0 0 24 24" focusable="false"><title>Product</title>
            <circle cx="12" cy="12" r="10"/>
            <path
              d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"/>
          </svg>
        </a>
        <a href="/" class="  navbar-brand"><strong>用户管理系统demo</strong></a>
        <ul class="navbar-nav mx-auto">
          <router-link :to="{name:'HomeLink'}"  class="nav-link  navbar-brand" exact><strong>主页</strong></router-link>
          <router-link :to="{name:'AboutLink'}" class="nav-link navbar-brand" exact><strong>关于我们</strong></router-link>

        </ul>
<ul class="navbar-nav navbar-right">
  <router-link :to="{name:'AddLink'}" class="nav-link navbar-brand " exact><strong>添加用户</strong></router-link>
</ul>
      </nav>
    </header>
<div id="content" class="container view" >
  <router-view></router-view>
</div>
  </div>
</template>

<script>
  export default {
    name: 'App',
  }
</script>

<style scoped>
#content{
  margin: 30px auto;
}
</style>
