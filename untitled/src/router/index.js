import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'

Vue.use(Router);
// 配置路由
export default new Router({
  routes:[
    {path:'/',component:Home},
    {path: '/helloworld', component: HelloWorld}
  ],
  mode:'history'
})
