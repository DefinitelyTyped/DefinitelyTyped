import Ember from 'ember';

class AuthService extends Ember.Service {
    isAuthenticated: boolean;
}

class ApplicationController extends Ember.Controller {
    transitionToLogin() {}
}

declare module 'ember' {
    interface ServiceRegistry {
        auth: AuthService;
    }

    interface ControllerRegistry {
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
}
