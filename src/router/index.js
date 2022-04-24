import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/destination',
    name: 'destination',
    component: () => import('../views/DestinationView.vue')
  },
  {
    path: '/crew',
    name: 'crew',
    component: () => import('../views/CrewView.vue')
  },
  {
    path: '/technology',
    name: 'crewtechnology',
    component: () => import('../views/TechnologyView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
