import { createRouter, createWebHistory } from 'vue-router'

const routes = [{
        path: '/',
        name: 'Home',
        component: () => import( /* webpackChunkName: "home" */ '../views/Home.vue'),
        meta:{
            title: 'Python Eye'
        }
    },
    {
        path: '/nosotros',
        name: 'Nosotros',
        component: () => import( /* webpackChunkName: "nosotros" */ '../views/Home.vue'),
        meta:{
            title: 'Nosotros'
        }
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import( /* webpackChunkName: "dashboard" */ '../views/Dashboard.vue'),
        meta:{
            title: 'Dashboard'
        }
    },
    {
        path: '/dashboard/editar',
        name: 'Editar',
        component: () => import( /* webpackChunkName: "Editar" */ '../views/Dashboard.vue'),
        meta:{
            title: 'Editar Perfil'
        }
    },
    {
        path: '/dashboard/historial',
        name: 'Historial',
        component: () => import( /* webpackChunkName: "Editar" */ '../views/Dashboard.vue'),
        meta:{
            title: 'Tu Historial de IMC'
        }
    },
    {
        path: '/:id',
        name: 'Error',
        component: () => import( /* webpackChunkName: "Error" */ '../views/Home.vue'),
        meta:{
            title: 'Error 404'
        }
    },
    {
        path: '/dashboard/:id',
        name: 'Error2',
        component: () => import( /* webpackChunkName: "Error" */ '../views/Dashboard.vue'),
        meta:{
            title: 'Error 404'
        }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router