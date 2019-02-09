import Vue from 'vue'
import Router from 'vue-router'
import Flipcard from '@/components/Flipcard'
import Add from '@/components/Add'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            redirect: {
                name: "Flipcard"
            }
        },
        {
            path: "/flipcard",
            name: 'Flipcard',
            component: Flipcard
        },
        {
            path: '/add',
            name: 'Add',
            component: Add
        }
    ]
})