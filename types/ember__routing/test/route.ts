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
        if (posts.length === 1) {
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
    resetController(controller: Controller, isExiting: boolean, transition: boolean) {
        if (isExiting) {
            //   controller.set('page', 1);
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
    redirect(model: {}, a: Transition, anOddArg: any) { // $ExpectError
        if (!model) {
            this.transitionTo('there');
        }
    }
}

class ApplicationController extends Controller {}
declare module '@ember/controller' {
    interface Registry {
        application: ApplicationController;
    }
}

Route.extend({
    setupController(controller: Controller, model: {}) {
        this._super(controller, model);
        this.controllerFor('application').set('model', model);
    },
});

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
        this.intermediateTransitionTo('some.other.route', { });
    }
    intermediateTransitionWithMultiModel() {
        this.intermediateTransitionTo('some.other.route', 1, 2, { });
    }
}
