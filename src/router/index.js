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
    {
      path: '/bmi',
      name: 'BMI',
      component: () => import('../pages/BMI.vue'),
      meta: {
        title: 'بی‌ام‌آی'
      }
    },
    {
      path: '/modal',
      name: 'Modal',
      component: () => import('../pages/Modal.vue'),
      meta: {
        title: 'پنجره مدال'
      }
    },
    {
      path: '/todo',
      name: 'Todo',
      component: () => import('../pages/Todo.vue'),
      meta: {
        title: 'تسک‌ها'
      }
    },
    {
      path: '/users',
      name: 'Users',
      component: () => import('../pages/Users.vue'),
      meta: {
        title: 'کاربران'
      }
    },
    {
      path: '/form',
      name: 'Form',
      component: () => import('../pages/Form.vue'),
      meta: {
        title: 'فرم'
      }
    },
    {
      path: '/nested',
      name: 'Nested',
      component: () => import('../pages/NestedComment.vue'),
      meta: {
        title: 'کامنت‌های تودرتو'
      }
    },
    {
      path: '/auto-input',
      name: 'AutoInput',
      component: () => import('../pages/AutoInput.vue'),
      meta: {
        title: 'پرش اتوماتیک'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = `دیتی | ${to.meta.title}`
  next()
})

export default router
