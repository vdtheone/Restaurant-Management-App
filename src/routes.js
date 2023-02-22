import Home from './components/HomePage.vue'
import Sign_up from './components/Sign_up.vue'
import Login from './components/LoginPage.vue'
import Logout from './components/LogoutPage.vue'
import Add from './components/AddRestroPage.vue'
import Update from './components/UpdatePage.vue'
import {createRouter,createWebHistory} from 'vue-router'

const routes = [
    {
        name:'Home',
        component:Home,
        path:'/'
    },
    {
        name:'Sign_up',
        component:Sign_up,
        path:'/sign-up'
    },
    {
        name:'Login',
        component:Login,
        path:'/login'
    },
    {
        name:'Logout',
        component:Logout,
        path:'/logout'
    },
    {
        name:'Add',
        component:Add,
        path:'/add'
    },
    {
        name:'Update',
        component:Update,
        path:'/update/:id',
    },
    
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router