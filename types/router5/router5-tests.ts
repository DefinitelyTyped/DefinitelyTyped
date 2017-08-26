
import {loggerPlugin, createRouter} from 'router5';

const routes = [
    { 
      name: 'users', 
      path: 'users', 
      children: [
          {
              name: 'add', 
              path: 'add'
          }
      ]
    }
];

const router = createRouter();

router
    .setOption('useHash', true)
    .setOption('defaultRoute', 'home');

router
    .usePlugin(loggerPlugin())
    .useMiddleware(function () {})
    .useMiddleware(function () {}, function () {})
    .start()
    .stop();
