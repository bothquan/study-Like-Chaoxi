import Vue from 'vue'
import VueRouter from 'vue-router'
// 登录注册
import Register from '@/views/login/register.vue'
import Login from '@/views/login/login.vue'

// 主页
import Layout from '@/views/layout/index.vue'
// 展示首页
import MyLayout from '@/views/layout/index/layout.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/Register', component: Register },
  { path: '/Login', component: Login },
  {
    path: '/',
    component: Layout,
    children: [
      { path: '', redirect: 'layout' },
      { path: 'layout', component: MyLayout }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
