import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import Daftar from '../views/Daftar'
import LupaPassword from '../views/LupaPassword'
import ResetPassword from '../views/ResetPassword'

Vue.use(VueRouter)

  const routes = [
  {
    path      : '/',
    name      : 'Login',
    component : Login
  },
  {
    path      : '/daftar',
    name      : 'Daftar',
    component : Daftar
  },
  {
    path      : '/lupa-password',
    name      : 'LupaPassword',
    component : LupaPassword
  },
  {
    path      : '/reset-password',
    name      : 'ResetPassword',
    component : ResetPassword
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
