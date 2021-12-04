import { createRouter, createWebHistory } from 'vue-router'

import World from '../views/World.vue'
import Create from '../views/Create.vue'
import Life from '../views/Life.vue'
import Study from '../views/Study.vue'
import Economy from '../views/Economy.vue'
import Chat from '../views/Chat.vue'
import Play from '../views/Play.vue'

import About from '../views/About.vue'
import ProductList from '../views/ProductList.vue'

const routes = [
  {
    path: '/',
    name: 'World',
    component: World
  },
  {
    path: '/Create',
    name: 'Create',
    component: Create
  },
  {
    path: '/Life',
    name: 'Life',
    component: Life
  },
  {
    path: '/Study',
    name: 'Study',
    component: Study
  },
  {
    path: '/Economy',
    name: 'Economy',
    component: Economy
  },
  {
    path: '/Chat',
    name: 'Chat',
    component: Chat
  },
  {
    path: '/Play',
    name: 'Play',
    component: Play
  },
  {
    path: '/productList',
    name: 'ProductList',
    component: ProductList
  },  
  {
    path: '/about',
    name: 'About',
    component: About    
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
