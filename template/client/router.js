// Import the router
//import { RouterFactory } from 'meteor/akryum:vue-router2'
// Components

import Vue from 'vue';
import VueRouter from 'vue-router';
import { RouterFactory, nativeScrollBehavior } from 'meteor/akryum:vue-router2'
Vue.use(VueRouter);

import '../imports/features/product/routes'
import '../imports/pages/routes'

export default function createRouter() {
  const routerFactory = new RouterFactory({
                                            mode: 'history',
                                            scrollBehavior: nativeScrollBehavior,
                                          })
  const router = routerFactory.create()

  return router
}
