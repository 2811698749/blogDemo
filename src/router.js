import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/',
      redirect: '/home'
     },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/msg',
      name: 'msg',
      component: () => import('./views/Msg.vue')
    },{
      path: '/support',
      name: 'support',
      component: () => import('./views/Support.vue')
    },
    {
      path: '/article/:id',
      name: 'article',
      component: () => import('./views/Article.vue'),
      props: true
    },
    {
      path:'/detail/:id',
      name:'detail',
      component:()=>import('./views/Detail.vue'),
      props:true,
    },{
      path:'/tags/:id',
      name:'tags',
      component:() => import('./views/Tags.vue'),
      props:true
    },
    {
      path: '/work',
      name: 'work',
      component: () => import('./views/Business.vue')
    },{
      path: '/*',
      name: 'notFound',
      component: () => import('./views/NotFound.vue')
    }
  ]
})
