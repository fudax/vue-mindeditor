import Vue from 'vue'
import Router from 'vue-router'
import editor from '@/components/editor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'editor',
      component: editor
    }
  ]
})
