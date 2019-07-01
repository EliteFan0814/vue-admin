import Vue from 'vue'
import Vuex from 'vuex'

import storeRouters from '@/store/modules/routers.js'
import storeUser from '@/store/modules/user.js'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        storeRouters,
        storeUser
    },
    getters: {
        addRoutes: state => state.storeRouters,
        userInfo: state => state.storeUser
    }
})
