import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import AddBlog from '@/components/AddBlog'
import ShowBlogs from '@/components/ShowBlogs'
import Header from '@/components/Header'
import SingleBlog from '@/components/SingleBlog'
import EditBlog from '@/components/EditBlog'

export default new Router({
  routes: [
    {path: '/addblog', name:'AddBlogLink' ,component: AddBlog},
    {path: '/',name:'ShowBlogsLink', component: ShowBlogs},
    {path: '/header' ,name:'HeaderLink', component: Header},
    {path: '/blog/:id' ,name:'SingleBlogLink', component: SingleBlog},
    {path: '/edit/:id' ,name:'EditBlogLink', component: EditBlog},
   /* {path: '*', redirect:"/"}*/
  ],
  mode:'history'
});

