
import Router5, {loggerPlugin, RouteNode, Router5 as _Router5} from 'router5';

const router1: Router5 = new Router5();
const router2: Router5 = new _Router5();

[router1, router2].forEach(function (router: Router5) {
    const settingsNode: RouteNode = new RouteNode('settings', '/settings');

    router
        .setOption('useHash', true)
        .setOption('defaultRoute', 'home');

    router.setAdditionalArgs([]);

    router
        .add(settingsNode)
        .addNode('home', '/')
        .addNode('profile', '/profile', function () {
            return false;
        })
        .usePlugin(loggerPlugin())
        .useMiddleware(function () {})
        .useMiddleware(function () {}, function () {})
        .start()
        .stop();
});
