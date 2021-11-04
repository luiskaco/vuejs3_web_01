import {createWebHistory, createRouter} from 'vue-router';

import Content from '../components/ContentComponents.vue'
import Pagina from '../components/CardComponents.vue'
import Blog from '../components/BlogContents.vue'
import Form  from '../components/FormComponents.vue'
import Directiva  from '../components/PaginaDirectivaComponent.vue'
import Cicle from '../components/CicleComponents.vue'
//  import ErrorComponent from '../components/ErrorComponents.vue'

const routes = [
    {
        path: "/",
        name: "home",
        component: Content,
    },
    {
        path: "/blog",
        name: "Blog",
        component: Blog,
    },
    {
        path: "/pagina",
        name: "Pagina",
        component: Pagina,
    },
    {
        path: "/form",
        name: "Formulario",
        component: Form,
    },
    {
        path: "/directiva",
        name: "Directiva",
        component: Directiva,
    },
    {
        path: "/ciclo/:id",
        name: "Ciclo",
        component: Cicle,
        props: true,
    },
    {
        path: "/:catchAll(.*)",
        redirect: '/'
        // component: ErrorComponent
    }
    
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;