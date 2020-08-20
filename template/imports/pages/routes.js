import {RouterFactory} from 'meteor/akryum:vue-router2'

RouterFactory.configure(factory => {
  factory.addRoutes([
                      {
                        path: '/',
                        component: () => import('./home/Home'),
                      }
                    ])
})
