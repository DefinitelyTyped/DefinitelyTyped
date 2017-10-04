import Ember from 'ember';

class AuthService extends Ember.Service {
    isAuthenticated: boolean;
}

class ApplicationController extends Ember.Controller {
    transitionToLogin() {}
}

class LoginRoute extends Ember.Route {
    auth = Ember.inject.service<AuthService>('authentication');
    application = Ember.inject.controller<ApplicationController>();

    didTransition() {
        if (!this.get('auth').get('isAuthenticated')) {
            this.get('application').transitionToLogin();
        }
    }
}
