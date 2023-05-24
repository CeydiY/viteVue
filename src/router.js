import { createRouter, createWebHistory } from 'vue-router'
import Home from "../src/views/HomeView.vue";
import Product from "../src/views/ProductView.vue";
import NotFound from "../src/views/NotFoundView.vue";
import Login from  "../src/views/LoginView.vue"
import Register from  "../src/views/RegisterView.vue"

const routes = [
    { path: '/', name: 'Home', component: Home},
    { path: '/product', name: 'Product', component: Product},
    { path: "/notFound", component: NotFound},
    { path: '/login', name: 'login', component: Login},
    { path: '/register', name: 'register', component: Register}

];
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router


