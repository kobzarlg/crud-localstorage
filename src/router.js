import Vue from 'vue'
import Router from 'vue-router'

// components
import Main from '@/components/Main.vue'
import Handle from '@/components/Handle.vue'
import Delete from '@/components/Delete.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/handle',
      name: 'Handle',
      component: Handle
    },
    {
      path: '/delete',
      name: 'Delete',
      component: Delete
    }
  ]
})
