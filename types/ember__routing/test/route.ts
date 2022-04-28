import Route from '@ember/routing/route';
import Array from '@ember/array';
import EmberObject from '@ember/object';
import Controller from '@ember/controller';
import Transition from '@ember/routing/-private/transition';

class Post extends EmberObject {}

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

Route.extend({
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
    resetController(controller: Controller, isExiting: boolean, transition: Transition) {
        if (isExiting) {
            //   controller.set('page', 1);
            transition.abort();
        }
    },
});

class ActivateRoute extends Route {
    activate(transition: Transition) {
        this.transitionTo('someOtherRoute');
    }
}

class DeactivateRoute extends Route {
    deactivate(transition: Transition) {
        this.transitionTo('someOtherRoute');
    }
}

class RedirectRoute extends Route {
    redirect(model: {}, a: Transition) {
        if (!model) {
            this.transitionTo('there');
        }
    }
}

class InvalidRedirect extends Route {
    // $ExpectError
    redirect(model: {}, a: Transition, anOddArg: unknown) {
        if (!model) {
            this.transitionTo('there');
        }
    }
}

class TransitionToExamples extends Route {
    // NOTE: this one won't check that `queryParams` has the right shape,
    // because the overload for the version where `models` are passed
    // necessarily includes all objects.
    transitionToModelAndQP() {
        // $ExpectType Transition<unknown>
        this.transitionTo('somewhere', { queryParams: { neat: true } });
    }

    transitionToJustQP() {
        // $ExpectType Transition<unknown>
        this.transitionTo({ queryParams: { neat: 'true' } });
    }

    transitionToNonsense() {
        this.transitionTo({ cannotDoModelHere: true }); // $ExpectError
    }

    transitionToBadQP() {
        this.transitionTo({ queryParams: 12 }); // $ExpectError
    }

    transitionToId() {
        // $ExpectType Transition<unknown>
        this.transitionTo('blog-post', 1);
    }

    transitionToIdWithQP() {
        // $ExpectType Transition<unknown>
        this.transitionTo('blog-post', 1, { queryParams: { includeComments: true } });
    }

    transitionToIds() {
        // $ExpectType Transition<unknown>
        this.transitionTo('blog-comment', 1, '13');
    }

    transitionToIdsWithQP() {
        // $ExpectType Transition<unknown>
        this.transitionTo('blog-comment', 1, '13', { queryParams: { includePost: true } });
    }

    buildRouteInfoMetadata() {
        return { foo: 'bar' };
    }
}

class ApplicationController extends Controller {}
declare module '@ember/controller' {
    interface Registry {
        application: ApplicationController;
    }
}

Route.extend({
    setupController(controller: Controller, model: {}, transition: Transition) {
        this._super(controller, model);
        this.controllerFor('application').set('model', model);
        transition.abort();
    },
});

const route = Route.create();
route.controllerFor('whatever'); // $ExpectType Controller
route.paramsFor('whatever'); // $ExpectType object

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
        return "returning anything else is nonsensical (if 'legal')"; // $ExpectError
    }

    afterModel(resolvedModel: unknown, transition: Transition): void {
        return "returning anything else is nonsensical (if 'legal')"; // $ExpectError
    }
}

interface RouteParams {
    cool: string;
}

class WithParamsInModel extends Route<boolean, RouteParams> {
    model(params: RouteParams, transition: Transition) {
        return true;
    }
}

// @ts-expect-error
class WithNonsenseParams extends Route<boolean, number> {}

class WithImplicitParams extends Route {
    model(params: RouteParams) {
        return { whatUp: 'dog' };
    }
}

// $ExpectType RouteParams
type ImplicitParams = WithImplicitParams extends Route<any, infer T> ? T : never;
