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

// $ExpectType Transition<unknown>
transition.abort();

// $ExpectType Promise<unknown>
transition.catch();
transition.catch(err => console.log(err), 'label');

// $ExpectType Promise<unknown>
transition.finally();
transition.finally(() => console.log('finally!'));
transition.finally(() => console.log('finally!'), 'label');

// $ExpectType Promise<unknown>
transition.followRedirects();

// $ExpectType Transition<unknown>
transition.method();
transition.method('replace');

// $ExpectType Transition<unknown>
transition.retry();

// $ExpectType Promise<unknown>
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

// $ExpectType RouteInfoWithAttributes | null
transition.from;
// $ExpectError
transition.from = 'from';

// $ExpectType Promise<unknown>
transition.promise;
// $ExpectError
transition.promise = 'promise';

// $ExpectType RouteInfo | RouteInfoWithAttributes
transition.to;
// $ExpectError
transition.to = 'to';

// $ExpectType unknown
transition.to.metadata;
// $ExpectError
transition.to.metadata = 'foo';

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

router.recognize('foo/bar'); // $ExpectType RouteInfo

router.recognizeAndLoad('foo/bar'); // $ExpectType RouteInfoWithAttributes

router.rootURL; // $ExpectType string
router.rootURL = 'foo'; // $ExpectError
