import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/bootstrap.min.css';
Vue.prototype.bus = new Vue();
router.beforeEach((to, from, next) => {
  var routeMap = {
    'home':'首页',
    'js':'Javascript',
    'html':'Html+css',
    'jquery':'jQuery',
    'es6':'ES6/7',
    'webpack':'Webpack',
    'vue':'Vue',
    'node':'Nodejs',
    'centos':'Centos7建站',
    'support':'赞助我',
    'work':'业务合作',
    'about':'关于',
    'msg':'给我留言',
    'weixin':'微信小程序'
  }
  let routeName = to.params.id || to.name;
  store.commit('setMap',routeMap[routeName]);
  next();
})
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

