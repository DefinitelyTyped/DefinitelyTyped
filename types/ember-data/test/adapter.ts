import Ember from 'ember';
import DS from 'ember-data';

const JsonApi = DS.JSONAPIAdapter.extend({
    // Application specific overrides go here
});

const Customized = DS.JSONAPIAdapter.extend({
    host: 'https://api.example.com',
    namespace: 'api/v1',
    headers: {
        'API_KEY': 'secret key',
        'ANOTHER_HEADER': 'Some header value'
    }
});

const AuthTokenHeader = DS.JSONAPIAdapter.extend({
    session: Ember.inject.service('session'),
    headers: Ember.computed('session.authToken', function() {
        return {
            'API_KEY': this.get('session.authToken'),
            'ANOTHER_HEADER': 'Some header value'
        };
    })
});
