import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: () => import('@/view/home/home.vue')
    },
    {
      path: '/essay',
      component: () => import('@/view/essay/essay.vue')
    },

    {
      path: '/project',
      component: () => import('@/view/project/project.vue')
    },
    {
      path: '/private',
      component: () => import('@/view/private/private.vue')
    }
  ]
})

export default router
