import Route from '@ember/routing/route';
import Array from '@ember/array';
import Ember from 'ember'; // currently needed for Transition
import Transition from '@ember/routing/transition';

// Ensure that Ember.Transition is private
// @ts-expect-error
Ember.Transition;

interface Post extends Ember.Object {
    title: string;
}

interface Posts extends Array<Post> {}

Route.extend({
    beforeModel(transition: Transition) {
        this.transitionTo('someOtherRoute');
    },
});

Route.extend({
    afterModel(posts: Posts, transition: Transition) {
        if (posts.firstObject) {
            this.transitionTo('post.show', posts.firstObject);
        }
    },
});

Ember.Route.extend({
    model() {
        return this.modelFor('post');
    },
});

Route.extend({
    queryParams: {
        memberQp: { refreshModel: true },
    },
});

Route.extend({
    resetController(controller: Ember.Controller, isExiting: boolean, transition: boolean) {
        if (isExiting) {
            //   controller.set('page', 1);
        }
    },
});

Route.extend({
    setupController(controller: Ember.Controller, model: {}) {
        this._super(controller, model);
        this.controllerFor('application').set('model', model);
    },
});

class RouteUsingClass extends Route.extend({
    randomProperty: 'the .extend + extends bit type-checks properly',
}) {
    beforeModel() {
        return Promise.resolve('beforeModel can return promises');
    }
    afterModel(resolvedModel: unknown, transition: Transition) {
        return Promise.resolve('afterModel can also return promises');
    }
    intermediateTransitionWithoutModel() {
        this.intermediateTransitionTo('some-route');
    }
    intermediateTransitionWithModel() {
        this.intermediateTransitionTo('some.other.route', {});
    }
    intermediateTransitionWithMultiModel() {
        this.intermediateTransitionTo('some.other.route', 1, 2, {});
    }
}

class WithNonReturningBeforeAndModelHooks extends Route {
    beforeModel(transition: Transition): void | Promise<unknown> {
        return;
    }

    afterModel(resolvedModel: unknown, transition: Transition): void {
        return;
    }
}

class WithBadReturningBeforeAndModelHooks extends Route {
    beforeModel(transition: Transition): void | Promise<unknown> {
        // @ts-expect-error
        return "returning anything else is nonsensical (if 'legal')";
    }

    afterModel(resolvedModel: unknown, transition: Transition): void {
        // @ts-expect-error
        return "returning anything else is nonsensical (if 'legal')";
    }
}
