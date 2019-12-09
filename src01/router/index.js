//路由器对象模块


import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '@/pages/About'
import Home from '@/pages/Home'
import News from '@/pages/News'
import Message from '@/pages/Message'


//声明使用vue插件
Vue.use(VueRouter)
Vue.config.productionTip = false
export default new VueRouter ({
  //应用中所有路由
  routes:[
    //路由
    {
      path:'/about',
      component:About
    },
    {
      path:'/home',
      component:Home,
      children:[//注册子路由
        {
          path:'/home/news',
          component:News
        },
        {
          path:'message',//相当于/home/message
          component:Message
        },
      ]
    },
    

    //自动重定向的路由
    {
      path:'/',
      redirect:'/about'
    }
  ]
})