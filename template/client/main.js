
//quasar framework is based on vuejs
import Vue from 'vue';
import VueRouter from 'vue-router';
import {routes} from './routes';
import AppLayout from '/imports/ui/AppLayout.vue';


import Quasar from 'quasar';

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
};

Vue.use(VueRouter);
const router = new VueRouter({
    routes, // short for `routes: routes`
    mode: 'history'
});


//App start
Meteor.startup(() => {
    Vue.use(Quasar, {});
    new Vue({
        router: router,
        render: h => h(AppLayout),
    }).$mount('app');
});

