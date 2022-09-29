import { Route, Router } from '@hapi/call';

const router = new Router<{ id: string }>({ isCaseSensitive: false });

router.add({ method: 'get', path: '/user/{userId}'}, { id: 'get_user'});

const route = router.route('get', '/');

if (!(route instanceof Error)) {
    console.log(route.route.id);
    console.log(route.params.userId);
    console.log(route.paramsArray[0]);
} else {
  throw route;
}
