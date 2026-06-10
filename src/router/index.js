import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import DashboardView from '../views/DashboardView.vue'
import ProductView from '../views/ProductView.vue' 
//arreglamos un boton que no se dirigia a la ruta que era
const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView
  },
  {
    path: '/dashboard/habitaciones', 
    name: 'habitaciones',
    component: ProductView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

//aqui modifique para la seguridad de la ruta
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('user_authenticated') === 'true'
  if (to.path.startsWith('/dashboard')) {
    if (!isAuthenticated) {
      next('/') 
    } else {
      next() 
    }
  } 
  else if (to.path === '/' && isAuthenticated) {
    next('/dashboard') 
  } 
  else {
    next() 
  }
})

export default router