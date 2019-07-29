import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Menu from '../components/Menu'
import Admin from '../components/Admin'
import About from '../components/about/About'
import Login from '../components/Login'
import Register from '../components/Register'

//二级路由
import Contact from '../components/about/Contact'
import Delivery from '../components/about/Delivery'
import History from '../components/about/History'
import OrderingGuide from '../components/about/OrderingGuide'

//三级路由
import PhoneNumber from '../components/about/contact/PhoneNumber'
import PersonName from '../components/about/contact/PersonName'


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/', name: 'homeLink', components: {
        default: Home,
        'delivery': Delivery,
        'history': History,
        'orderingGuide': OrderingGuide
      }
    },
    {path: '/menu', name: 'menuLink', component: Menu},
    {
      path: '/admin', name: 'adminLink', component: Admin,
      // beforeEnter: (to, from, next) => {
      //路由独享守卫
      // if (to.path == '/login' || to.path == '/register') {
      //   next();
      // } else {
      //   alert("还没有登录，请先登录！");
      //   next('/login');
      // }
      // }
    },
    {
      path: '/about', name: 'aboutLink', redirect: '/about/contact', component: About,
      children: [
        {
          path: '/about/contact', name: 'contactLink', redirect: '/personName', component: Contact,
          children:
            [
              {path: '/personName', name: 'personNameLink', component: PersonName},
              {path: '/phoneNumber', name: 'phoneNumberLink', component: PhoneNumber},
            ]
        },
        {path: '/history', name: 'historyLink', component: History},
        {path: '/delivery', name: 'deliveryLink', component: Delivery},
        {path: '/orderingGuide', name: 'orderingGuideLink', component: OrderingGuide}
      ]
    },
    {path: '/login', name: 'loginLink', component: Login},
    {path: '/register', name: 'registerLink', component: Register},
    {path: '*', redirect: '/'}
  ],
  mode: 'history',
  scrollBehavior(to,from,savedPosition){
    //固定滚动
    // return{x:0, y:200}

    //相关滚动
    // return{selector:'.btn'}

    //记忆滚动
    if (savedPosition) {
      return savedPosition;
    }else {
      return{x:0, y:0}
    }
  }
});

