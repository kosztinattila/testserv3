// Import the router
//import { RouterFactory } from 'meteor/akryum:vue-router2'
// Components
import Home from '/imports/ui/Home.vue'
import Buying from '/imports/ui/Buying.vue'

/*
RouterFactory.configure(factory => {
    // Simple routes
    factory.addRoutes([
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/session',
            name: 'session',
            component: Session,
        },
        {
            path: '/help',
            name: 'help',
            component: Help,
        },
    ])
})
*/
let routes = [
    {
        path: '*',
        name: '',
        component: Home,
    },
    {
        path: '/buying',
        name: 'buying',
        component: Buying,
    },
];

module.exports = {
    routes: routes,
};
