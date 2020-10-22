import RouterService from '@ember/routing/router-service';

declare let router: RouterService;

router.transitionTo('someRoute');
router.transitionTo('someRoute', { withModel: true });
router.transitionTo('someRoute', { withModel: true }, { queryParams: {} });
router.transitionTo(
    'someRoute',
    { withModel: true },
    { withMultipleModels: 'still checks correctly' },
    { queryParams: {} },
);

const transition = router.transitionTo('someRoute');

// $ExpectType Transition<any>
transition.abort();

// $ExpectType Promise<never>
transition.catch();
transition.catch(err => console.log(err), 'label');

// $ExpectType Promise<any>
transition.finally();
transition.finally(() => console.log('finally!'));
transition.finally(() => console.log('finally!'), 'label');

// $ExpectType Promise<any>
transition.followRedirects();

// $ExpectType Transition<any>
transition.method();
transition.method('replace');

// $ExpectType Transition<any>
transition.retry();

// $ExpectType Promise<any>
transition.then();
transition.then(
    result => console.log(result),
    err => console.log(err),
    'label',
);

// $ExpectType void
transition.trigger(false, 'error');

// $ExpectType void
transition.send(false, 'error');

transition.data = { some: 'data' };

// $ExpectType RouteInfo | null
transition.from;
// $ExpectError
transition.from = 'from';

// $ExpectType Promise<any>
transition.promise;
// $ExpectError
transition.promise = 'promise';

// $ExpectType RouteInfo
transition.to;
// $ExpectError
transition.to = 'to';

// NOTE: we cannot check the validity of invocations with just route name and
// query params beyond that the second argument is an object of some sort,
// because TS will always resolve it to the `models` variant if the
// `queryParams` variant fails.
router.transitionTo('someRoute', { queryParams: { shouldWork: true } });
router.transitionTo({ queryParams: { areSupported: true } });
router.transitionTo({ queryParams: 'potato' }); // $ExpectError
router.transitionTo('someRoute', 1);
router.transitionTo('someRoute', 1, { queryParams: { areSupported: true } });
router.transitionTo('someRoute', 1, '13');
router.transitionTo('someRoute', 1, '13', { queryParams: { areSupported: true } });
