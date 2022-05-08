import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: 'صفحه نخست'
      }
    },
    {
      path: '/change-background',
      name: 'ChangeBackground',
      component: () => import('../pages/ChangeBackground.vue'),
      meta: {
        title: 'پس‌زمینه'
      }
    },

  ]
})

router.beforeEach((to, from, next) => {
  document.title = `دیتی | ${to.meta.title}`
  next()
})

export default router
