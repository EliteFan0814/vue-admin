const loginView = resolve => require(['@/pages/login/login.vue'],resolve)

export default {
    path: '/login',
    mame: 'login',
    component: loginView
}