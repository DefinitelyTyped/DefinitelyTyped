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

const routeWillChangeHandler = () => {};

// $ExpectType RouterService
router.on('routeWillChange', routeWillChangeHandler);

// $ExpectType boolean
router.has('routeWillChange');

// $ExpectType RouterService
router.off('routeWillChange', routeWillChangeHandler);

// $ExpectType RouterService
router.one('routeWillChange', routeWillChangeHandler);

// $ExpectType void
router.trigger('routeWillChange', 'boo');

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
// @ts-expect-error
transition.from = 'from';

// $ExpectType Promise<unknown>
transition.promise;
// @ts-expect-error
transition.promise = 'promise';

// $ExpectType RouteInfo | RouteInfoWithAttributes
transition.to;
// @ts-expect-error
transition.to = 'to';

// $ExpectType unknown
transition.to.metadata;
// @ts-expect-error
transition.to.metadata = 'foo';

// NOTE: we cannot check the validity of invocations with just route name and
// query params beyond that the second argument is an object of some sort,
// because TS will always resolve it to the `models` variant if the
// `queryParams` variant fails.
// $ExpectType Transition<unknown>
router.transitionTo('someRoute', { queryParams: { shouldWork: true } });
// $ExpectType Transition<unknown>
router.transitionTo({ queryParams: { areSupported: true } });
// @ts-expect-error
router.transitionTo({ queryParams: 'potato' });
// $ExpectType Transition<unknown>
router.transitionTo('someRoute', 1);
// $ExpectType Transition<unknown>
router.transitionTo('someRoute', 1, { queryParams: { areSupported: true } });
// $ExpectType Transition<unknown>
router.transitionTo('someRoute', 1, '13');
// $ExpectType Transition<unknown>
router.transitionTo('someRoute', 1, '13', { queryParams: { areSupported: true } });

router.recognize('foo/bar'); // $ExpectType RouteInfo

router.recognizeAndLoad('foo/bar'); // $ExpectType RouteInfoWithAttributes

router.rootURL; // $ExpectType string
// @ts-expect-error
router.rootURL = 'foo';

router.refresh(); // $ExpectType Transition<unknown>
router.refresh('my-route'); // $ExpectType Transition<unknown>
