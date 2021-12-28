import Vue from 'vue'
import VueRouter from 'vue-router'
import Menu from '../views/Menu.vue'
import Contact from '../views/Contact.vue'
import Pole from '../views/Pole.vue'
import Live from '../views/Live.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Menu',
        component: Menu
    },

    {
        path: '/Pole',
        name: 'Pole',
        component: Pole
    },

    {
        path: '/Contact',
        name: 'Contact',
        component: Contact
    },

    {
        path: '/Live',
        name: 'Live',
        component: Live

    }


]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router