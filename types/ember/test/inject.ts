import Ember from 'ember';

class AuthService extends Ember.Service {
    declare isAuthenticated: boolean;
}

class ApplicationController extends Ember.Controller {
    model = {};
    declare string: string;
    transitionToLogin() {}
}

declare module '@ember/service' {
    interface Registry {
        auth: AuthService;
    }
}

declare module '@ember/controller' {
    interface Registry {
        application: ApplicationController;
    }
}

class LoginRoute extends Ember.Route {
    auth = Ember.inject.service('auth');
    application = Ember.inject.controller('application');

    didTransition() {
        if (!this.get('auth').get('isAuthenticated')) {
            this.get('application').transitionToLogin();
        }
    }

    anyOldMethod() {
        this.get('application').set('string', 'must be a string');
        this.controllerFor('application'); // $ExpectType Controller
    }
}

// New module injection style.
import Controller, { inject as controller } from '@ember/controller';
import Service, { inject as service } from '@ember/service';
import { assertType } from './lib/assert';

class ComponentInjection extends Ember.Component {
    applicationController = controller('application');
    auth = service('auth');
    router = service('router');
    misc = service();

    testem() {
        assertType<Ember.Service>(this.get('misc'));
        const url = this.get('router').urlFor('some-route', 1, 2, 3, { queryParams: { seriously: 'yes' } });
        assertType<string>(url);
        if (!this.get('auth').isAuthenticated) {
            this.get('applicationController').transitionToLogin();
        }
    }
}
