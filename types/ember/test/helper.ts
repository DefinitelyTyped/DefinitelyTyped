import Ember from 'ember';

const FormatCurrencyHelper = Ember.Helper.helper(function(params, hash: { currency: string }) {
    let cents = params[0];
    let currency = hash.currency;
    return `${currency}${cents * 0.01}`;
});

class User extends Ember.Object {
    email: string;
}

class SessionService extends Ember.Service {
    currentUser: User;
}

const CurrentUserEmailHelper = Ember.Helper.extend({
    session: Ember.inject.service() as Ember.ComputedProperty<SessionService>,
    onNewUser: Ember.observer('session.currentUser', function(this: Ember.Helper) {
        this.recompute();
    }),
    compute(): string {
        return this.get('session')
            .get('currentUser')
            .get('email');
    },
});

import { helper } from '@ember/component/helper';

function typedHelp(/*params, hash*/) {
  return 'my type of help';
}

export default helper(typedHelp);

function arrayNumHelp(/*params, hash*/) {
  return [1, 2, 3];
}

helper(arrayNumHelp);
