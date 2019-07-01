import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index'
import Cookie from 'js-cookie'

import { commonRoutes } from '@/mock/routers.js'
import routers from '../store/modules/routers';

Vue.use(Router)

let router = new Router({
  // routes: [
  //   {
  //     path: '/',
  //     name: 'HelloWorld',
  //     component: HelloWorld
  //   },
  //   {
  //     path: '/login',
  //     component: () => import('@/pages/login/login.vue')
  //   }
  // ]
})

// 根据是否有 cookie 来判断是否进行初始化
if(Cookie.getJSON('accountData') && Cookie.getJSON('accountData').isLogin){
  // 根据 cookie 设置用户登录状态
  store.dispatch('storeUser/actSetUser',Cookie.getJSON('accountData')).then(() => {
    let _roles = store.getters.userInfo._roles
    // 根据 roles 权限生成可访问的路由表
    store.dispatch('storeRouters/getRoutes',_roles).then(() => {
      routers.addRoutes(store.getters.addRoutes)
    })
  })
}else{
  routers.addRoutes([commonRoutes()])
}

export default router