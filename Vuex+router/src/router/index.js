import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import store from '../vuex/store'
console.log(store.getters);


Vue.use(Router)
//首页

const hello = r => require.ensure([], () => r(require('@/components/Hello')), 'hello')
const yes = r => require.ensure([], () => r(require('@/components/yes/Yes')), 'yes')

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hello',
      component: hello
    },
    {
      path:'/yes',
      name:'yes',
      component:yes
    }
  ]
})
