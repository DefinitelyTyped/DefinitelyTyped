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

const UseAjax = DS.JSONAPIAdapter.extend({
    query(store: DS.Store, type: string, query: object) {
        const url = 'https://api.example.com/my-api';
        return this.ajax(url, 'POST', {
            param: 'foo'
        });
    }
});

const UseAjaxOptions = DS.JSONAPIAdapter.extend({
    query(store: DS.Store, type: string, query: object) {
        const url = 'https://api.example.com/my-api';
        const options = this.ajaxOptions(url, 'DELETE', {
            foo: 'bar'
        });
        return Ember.$.ajax(url, {
            ...options
        });
    }
});

const UseAjaxOptionsWithOptionalThirdParams = DS.JSONAPIAdapter.extend({
    query(store: DS.Store, type: string, query: object) {
        const url = 'https://api.example.com/my-api';
        const options = this.ajaxOptions(url, 'DELETE');
        return Ember.$.ajax(url, {
            ...options
        });
    }
});
