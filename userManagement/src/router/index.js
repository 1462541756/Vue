import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import Home from '@/components/Home'
import Add from '@/components/Add'
import Edit from '@/components/Edit'
import Detail from '@/components/Detail'
import Alert from '@/components/Alert'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/about',
      name: 'AboutLink',
      component: About
    },
    {
      path: '/',
      name: 'HomeLink',
      component: Home
    },
    {
      path: '/add',
      name: 'AddLink',
      component: Add
    },
    {
      path: '/edit',
      name: 'EditLink',
      component: Edit
    },
    {
      path: '/detail/:id',
      name: 'DetailLink',
      component: Detail
    },
    {
      path: '/edit/:id',
      name: 'EditLink',
      component:Edit
    },
    {
      path: '/alert/:id',
      name: 'AlertLink',
      component: Alert
    },
    {
      path: '*',
      redirect: "/"
    }
  ],
  mode: 'history'
})
