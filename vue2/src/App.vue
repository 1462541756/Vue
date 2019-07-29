<template>
  <div id="app">
    <div class="container">
      <app-header></app-header>
    </div>
    <div id="content" class="container">
      <router-view></router-view>
    </div>
    <!--<Add-Blog></Add-Blog>-->
    <!--<show-blogs></show-blogs>-->
  </div>
</template>

<script>
  import AddBlog from './components/AddBlog'
  import ShowBlogs from './components/ShowBlogs'
  import Header from './components/Header'

  export default {
  name: 'App',
  components:{
    'add-blog':AddBlog,
    'show-blogs':ShowBlogs,
    'app-header':Header
  }
}
</script>

<style scoped>
  #content{


  }
</style>
