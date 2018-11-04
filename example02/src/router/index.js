import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes:[
        {
            path: '/',
            name: 'Home',
            meta: { layout: 'no-sidebar' },
            component: require("@/views/Home").default // load sync home
        },
        {
            path: '/client',
            name: 'Client',
            component: () => import("@/views/Client")
        }
    ]
})