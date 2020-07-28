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
