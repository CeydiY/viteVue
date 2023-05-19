import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ProductView from "@/views/ProductView.vue";
import NotFoundView from "@/views/NotFoundView.vue";

const routes = [
    { path: '/', component: HomeView },
    { path: '/product', component: ProductView },
    { path: '/test', component: NotFoundView}

]
export const router = createRouter({ history: createWebHistory(), routes,});
