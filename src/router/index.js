import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index'
import Cookie from 'js-cookie'

import { commonRoutes } from '@/mock/routers.js'

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
      console.log('sssss',store.getters)
      console.log('rrrrr',router)
      router.addRoutes(store.getters.addRoutes)
    })
  })
}else{
  router.addRoutes([commonRoutes()])
}

router.beforeEach((to, from, next) => {
  // 从 cookie 判断是否登录
  if (Cookie.getJSON('accountData') && Cookie.getJSON('accountData').isLogin) { 
    next();//当有用户权限的时候，说明当前用户可访问路由已生成
  } else if (to.path === '/login') {
    next();
  } else {
    next('/login'); 
  }
});
export default router