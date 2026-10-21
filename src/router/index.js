import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Skills from '../views/Skills.vue'
import Projects from '../views/Projects.vue'
import Certifications from '../views/Certifications.vue'
import Contact from '../views/Contact.vue'

export default createRouter({
    history : createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {path:'/',component:Home},
        {path:'/about',component:About},
        {path:'/skills',component:Skills},
        {path:'/projects',component:Projects},
        {path:'/certifications',component:Certifications},
        {path:'/contact',component:Contact},
    ],
    scrollBehavior : ()=> ({top : 0}),
})