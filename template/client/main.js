
//quasar framework is based on vuejs
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './router';
import App from '/imports/App.vue';
import createI18n from "./i18n";
import createRouter from "./router";
import Quasar from 'quasar';


//App start
Meteor.startup(() => {
    const i18n = createI18n()
    const router = createRouter()
    Vue.use(Quasar, {});
    new Vue({
        router: router,
        i18n,
        render: h => h(App),
    }).$mount('app');
});

