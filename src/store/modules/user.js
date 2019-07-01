import _ from 'lodash'
import Cookie from 'js-cookie'

const state = {
    isLogin: false
}

const mutations = {
    // 设置用户登录状态 存入 cookie
    setUser(state,userDate){
        state = _.assign(state,userDate)
        Cookie.set('accountData',state)
        console.log('cookie---',Cookie)
    },
    // 移除用户登录状态 删除 cookie
    removeUser(state){
        state = _.assign(state,{isLogin: false})
        Cookie.remove('accountData')
    }
}

const actions = {
    actSetUser({commit},userDate){
        commit('setUser',userDate)
    },
    actRemoveUser({commit}){
        commit('removeUser')
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}