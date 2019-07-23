import Vue from 'vue';
import VueRouter from 'vue-router';

import NewsView from '../views/NewsView.vue';
import AsksView from '../views/AsksView.vue';
import JobsView from '../views/JobsView.vue';
import ItemView from '../views/ItemView.vue';
import UserView from '../views/UserView.vue';


Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/news',
        },
        {
            path: '/news',
            component: NewsView,
        },
        {
            path: '/asks',
            component: AsksView,
        },
        {
            path: '/jobs',
            component: JobsView,
        },
        {
            path: '/item',
            component: ItemView,
        },
        {
            path: '/user',
            component: UserView,
        },
    ]
});