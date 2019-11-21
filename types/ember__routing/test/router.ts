import Router from '@ember/routing/router';
import Service, { inject as service } from '@ember/service';
import EmberObject, { get } from '@ember/object';

const AppRouter = Router.extend({
});

AppRouter.map(function() {
    this.route('index', { path: '/' });
    this.route('about');
    this.route('favorites', { path: '/favs' });
    this.route('posts', function() {
        this.route('index', { path: '/' });
        this.route('new');
        this.route('post', { path: '/post/:post_id', resetNamespace: true });
        this.route('comments', { resetNamespace: true }, function() {
            this.route('new');
        });
    });
    this.route('photo', { path: '/photo/:id' }, function() {
        this.route('comment', { path: '/comment/:id' });
    });
    this.route('not-found', { path: '/*path' });
    this.mount('my-engine');
    this.mount('my-engine', { as: 'some-other-engine', path: '/some-other-engine'});
});

const RouterServiceConsumer = Service.extend({
    router: service('router'),
    currentRouteName() {
        const x: string = get(this, 'router').currentRouteName;
    },
    currentURL() {
        const x: string = get(this, 'router').currentURL;
    },
    transitionWithoutModel() {
        get(this, 'router')
        .transitionTo('some-route');
    },
    transitionWithModel() {
        const model = EmberObject.create();
        get(this, 'router')
        .transitionTo('some.other.route', model);
    },
    transitionWithMultiModel() {
        const model = EmberObject.create();
        get(this, 'router')
        .transitionTo('some.other.route', model, model);
    },
    transitionWithModelAndOptions() {
        const model = EmberObject.create();
        get(this, 'router')
        .transitionTo('index', model, { queryParams: { search: 'ember' }});
    },
    onAndRouteInfo() {
        const router = get(this, 'router');
        router
            .on('routeWillChange', transition => {
                const to = transition.to;
                to.child; // $ExpectType RouteInfo | null
                to.localName; // $ExpectType string
                to.name; // $ExpectType string
                to.paramNames; // $ExpectType string[]
                to.params.foo; // $ExpectType string | undefined
                to.parent; // $ExpectType RouteInfo | null
                to.queryParams.foo; // $ExpectType string | undefined
                to.find(info => info.name === 'foo'); // $ExpectType RouteInfo | undefined
            })
            .on('routeDidChange', transition => {
                const from = transition.from;
                if (from) {
                    from.child; // $ExpectType RouteInfo | null
                    from.localName; // $ExpectType string
                    from.name; // $ExpectType string
                    from.paramNames; // $ExpectType string[]
                    from.params.foo; // $ExpectType string | undefined
                    from.parent; // $ExpectType RouteInfo | null
                    from.queryParams.foo; // $ExpectType string | undefined
                    from.find(info => info.name === 'foo'); // $ExpectType RouteInfo | undefined
                }
            });
    },
});
