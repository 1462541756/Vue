// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//axios方式
import axios from 'axios'
Vue.prototype.$http = axios;
//全局配置
axios.defaults.baseURL='https://myblog-edb17.firebaseio.com';
/*axios.defaults.headers.common['Authorization']='Token';
axios.defaults.headers.post['Content-type']='application/urlencode';
axios.defaults.headers.get['Accepts']='application/json';*/


//Resource方式
// import VueResource from 'vue-resource'
// Vue.use(VueResource);





/*自定义指令*/
Vue.directive("theme", {
  bind(el, binding, vnode) {/*
    if (binding.value == 'wide') {
      el.style.maxWidth = "1200px";
    } else if (binding.value == 'narrow') {
      el.style.maxWidth = "560px";
    }

    if (binding.arg == 'column') {
      el.style.background = '#f9f9f9';
      el.style.padding = '20px';
    }*/
  }
});

/*filter*/
Vue.filter('to-uppercase',function(value) {
  return value.toUpperCase();
});
Vue.filter('snippet',function (value) {
  return value.slice(0,100)+"...";
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router:router,
  components: {App},
  template: '<App/>'
});
