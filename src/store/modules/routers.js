import _ from 'lodash'
import {adminRoutes,normalRoutes} from '@/mock/router'

const state = {
    // 初始化 要加入的 权限路由
    addRoutes: []
}

const mutations = {
    // 设置 路由表
    setRouters(state,adds){
        state.addRoutes.length = 0
        state.addRoutes = _.concat(state.addRoutes,adds)
    }
}

const actions = {
    // commit 设置并获取 路由表
    getRoutes({commit},roles){
        if(_.indexOf(roles,'admin') !== -1){
            commit('setRouters',adminRoutes())
        }else{
            commit('setRouters',normalRoutes())
        }
    }
}