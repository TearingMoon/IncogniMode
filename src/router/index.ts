import { createRouter, createWebHistory } from 'vue-router'
import TargetView from '../views/TargetView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'targets',
      component: TargetView
    },
    {
      path: '',
      redirect: { name: 'targets' }
    },
    {
      path: '/actions',
      name: 'actions',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ActionsView.vue')
    }
  ]
})

export default router
