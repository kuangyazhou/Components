import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import component from '@/components/components'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/Hello',
        name: 'Hello',
        component: HelloWorld
    }, {
        path: '/',
        name: 'component',
        component: component
    }]
})