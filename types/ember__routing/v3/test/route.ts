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
    actions: {
        showModal(evt: { modalName: string }) {
            this.render(evt.modalName, {
                outlet: 'modal',
                into: 'application',
            });
        },
        hideModal(evt: { modalName: string }) {
            this.disconnectOutlet({
                outlet: 'modal',
                parentView: 'application',
            });
        },
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
    renderTemplate() {
        this.render('photos', {
            into: 'application',
            outlet: 'anOutletName',
        });
    },
});

Route.extend({
    controllerName: 'photos',
    templateName: 'anOutletName',
    renderTemplate() {
        this.render(); // Render using defaults
    },
});

Route.extend({
    renderTemplate(controller: Controller, model: {}) {
        this.render('posts', {
            view: 'someView', // the template to render, referenced by name
            into: 'application', // the template to render into, referenced by name
            outlet: 'anOutletName', // the outlet inside `options.into` to render into.
            controller: 'someControllerName', // the controller to use for this template, referenced by name
            model, // the model to set on `options.controller`.
        });
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

class RedirectRoute extends Route {
    redirect(model: {}, a: Transition) {
        if (!model) {
            this.transitionTo('there');
        }
    }
}

class InvalidRedirect extends Route {
    // @ts-expect-error
    redirect(model: {}, a: Transition, anOddArg: any) {
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
        // @ts-expect-error
        this.transitionTo({ cannotDoModelHere: true });
    }

    transitionToBadQP() {
        // @ts-expect-error
        this.transitionTo({ queryParams: 12 });
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

class RouteUsingClass extends Route.extend({
    randomProperty: 'the .extend + extends bit type-checks properly',
}) {
    beforeModel(this: RouteUsingClass) {
        return 'beforeModel can return anything, not just promises';
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

interface ExampleModel { id: string; }

class TypedRoute extends Route<ExampleModel> {
    model(params: any): ExampleModel | PromiseLike<ExampleModel> {
        if (params.usePromise) {
          return { id: '123' };
        } else {
          const promise: PromiseLike<ExampleModel> = new Promise((resolve) => resolve({ id: '123'}));
          return promise;
        }
    }

    serialize(model: ExampleModel): string {
        return model.id;
    }

    afterModel(model: ExampleModel): void {
        if (model.id === 'new') {
            this.transitionTo('some.other.route');
        }
    }

    redirect(model: ExampleModel): void {
        if (model.id === 'new') {
            this.transitionTo('some.other.route');
        }
    }

    setupController(controller: Controller, model: ExampleModel, transition: Transition) {
        controller.set('model', model);
    }

    renderTemplate(controller: Controller, model: ExampleModel) {
        this.render('template', { model });
    }
}

interface InvalidModel { id: number; }

class InvalidTypedRoute extends Route<ExampleModel> {
    // @ts-expect-error
    model(params: any): InvalidModel {
      return { id: 123 };
    }

    // @ts-expect-error
    serialize(model: InvalidModel): number {
        return model.id;
    }

    // @ts-expect-error
    afterModel(model: InvalidModel): void {
        if (model.id === 0) {
            this.transitionTo('some.other.route');
        }
    }

    // @ts-expect-error
    redirect(model: InvalidModel): void {
        if (model.id === 0) {
            this.transitionTo('some.other.route');
        }
    }

    // @ts-expect-error
    setupController(controller: Controller, model: InvalidModel, transition: Transition) {
        controller.set('model', model);
    }

    // @ts-expect-error
    renderTemplate(controller: Controller, model: InvalidModel) {
        this.render('template', { model });
    }
}
