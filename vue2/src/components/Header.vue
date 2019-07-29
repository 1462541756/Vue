<template>
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
       <a href="/" class="  navbar-brand"><strong>博客demo</strong></a>
       <ul class="navbar-nav mx-auto">
         <router-link :to="{name:'ShowBlogsLink'}"  class="nav-link  navbar-brand" exact><strong>博客主页</strong></router-link>
         <router-link :to="{name:'AddBlogLink'}" class="nav-link navbar-brand" exact><strong>写博客</strong></router-link>
       </ul>
     </nav>
     <hr>
   </header>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
header{

}
  a{
    text-decoration: none;
    padding: 12px;
    border-radius: 5px;
  }
  .router-link-active{
    background: rgba(255, 34, 54, 0.8);
    color: #444;
  }
</style>
