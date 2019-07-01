// 登录组件路由
import loginRouter from '@/pages/login/router.js'

// 中间 main
import indexRouter from '@/pages/home/router.js'

// 管理员显示的路由
import roleRouter from '@/pages/role/router.js'

// 中间 内容组件
const mainContext = resolve => require(['@/components/maincontext.vue'],resolve)
// 左侧 sidebar 组件
const sideBar = resolve => require(['@/components/sidebar.vue'],resolve)

// 登陆界面
export function commonRoutes(){
    return loginRouter
}

// 登陆后路由
let logedObj = {
    path: '/',
    name: 'loged',
    redirect: '/index',
    components: {
        default: mainContext,
        sidebar: sideBar
    },
    children: [
        indexRouter
    ]
}

// 普通用户
export function normalRoutes(){
    return [commonRoutes(),logedObj]
}
// 管理员
export function adminRoutes(){
    logedObj.children = logedObj.children.concat([roleRouter])
    return [commonRoutes(),logedObj]
}