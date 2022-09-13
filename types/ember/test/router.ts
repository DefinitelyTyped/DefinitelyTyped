import Ember from 'ember';
import { assertType } from './lib/assert';

const AppRouter = Ember.Router.extend({});

AppRouter.map(function () {
    this.route('index', { path: '/' });
    this.route('about');
    this.route('favorites', { path: '/favs' });
    this.route('posts', function () {
        this.route('index', { path: '/' });
        this.route('new');
        this.route('post', { path: '/post/:post_id', resetNamespace: true });
        this.route('comments', { resetNamespace: true }, function () {
            this.route('new');
        });
    });
    this.route('photo', { path: '/photo/:id' }, function () {
        this.route('comment', { path: '/comment/:id' });
    });
    this.route('not-found', { path: '/*path' });
    this.mount('my-engine');
    this.mount('my-engine', { as: 'some-other-engine', path: '/some-other-engine' });
});

const RouterServiceConsumer = Ember.Service.extend({
    router: Ember.inject.service('router'),
    currentRouteName() {
        const x: string = Ember.get(this, 'router').currentRouteName;
    },
    currentURL() {
        const x: string = Ember.get(this, 'router').currentURL;
    },
    transitionWithoutModel() {
        Ember.get(this, 'router').transitionTo('some-route');
    },
    transitionWithModel() {
        const model = Ember.Object.create();
        Ember.get(this, 'router').transitionTo('some.other.route', model);
    },
    transitionWithMultiModel() {
        const model = Ember.Object.create();
        Ember.get(this, 'router').transitionTo('some.other.route', model, model);
    },
    transitionWithModelAndOptions() {
        const model = Ember.Object.create();
        Ember.get(this, 'router').transitionTo('index', model, { queryParams: { search: 'ember' } });
    },
});
