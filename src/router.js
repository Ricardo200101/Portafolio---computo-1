import {createRouter, createWebHistory } from 'vue-router';
import Home from './views/home.vue';
import Portada from './views/portada.vue';
import Introduccion from './views/intro.vue';
import Calendarizacion from './views/cale.vue';
import Guias from './views/guia.vue';

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
    
        {
            path: '/portada',
            name: 'Portada',
            component: Portada

        },

        {
            path: '/intro',
            name: 'Introduccion',
            component: Introduccion

        },

        {
            path: '/cale',
            name: 'Calendarizacion',
            component: Calendarizacion

        },
      
        {
            path: '/guia',
            name: 'Guias',
            component: Guias

        },

       
      
        
    ]
});
