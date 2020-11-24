import Ember from 'ember';
import DS from 'ember-data';

class Session extends Ember.Service {}
declare module '@ember/service' {
    interface Registry {
        session: Session;
    }
}

const JsonApi = DS.JSONAPIAdapter.extend({
    // Application specific overrides go here
});

const Customized = DS.JSONAPIAdapter.extend({
    host: 'https://api.example.com',
    namespace: 'api/v1',
    headers: {
        API_KEY: 'secret key',
        ANOTHER_HEADER: 'Some header value',
    },
});

const AuthTokenHeader = DS.JSONAPIAdapter.extend({
    session: Ember.inject.service('session'),
    headers: Ember.computed('session.authToken', function () {
        return {
            API_KEY: this.get('session.authToken'),
            ANOTHER_HEADER: 'Some header value',
        };
    }),
});

const UseAjax = DS.JSONAPIAdapter.extend({
    query(store: DS.Store, type: string, query: object) {
        const url = 'https://api.example.com/my-api';
        return this.ajax(url, 'POST', {
            param: 'foo',
        });
    },
});

const UseAjaxOptions = DS.JSONAPIAdapter.extend({
    query(store: DS.Store, type: string, query: object) {
        const url = 'https://api.example.com/my-api';
        const options = this.ajaxOptions(url, 'DELETE', {
            foo: 'bar',
        });
        return Ember.$.ajax(url, {
            ...options,
        });
    },
});

const UseAjaxOptionsWithOptionalThirdParams = DS.JSONAPIAdapter.extend({
    query(store: DS.Store, type: string, query: object) {
        const url = 'https://api.example.com/my-api';
        const options = this.ajaxOptions(url, 'DELETE');
        return Ember.$.ajax(url, {
            ...options,
        });
    },
});

declare module 'ember-data' {
    interface ModelRegistry {
        rootModel: any;
        'super-user': any;
    }
}

// https://github.com/emberjs/data/blob/c9d8212c857ca78218ad98d11621819b38dba98f/tests/unit/adapters/build-url-mixin/build-url-test.js
const BuildURLAdapter = DS.RESTAdapter.extend({
    worksWithOnlyModelNameAndId() {
        this.buildURL('rootModel', 1);
    },

    worksWithFindRecord() {
        this.buildURL('super-user', 1, {} as any, 'findRecord');
    },

    worksWithFindAll() {
        this.buildURL('super-user', null, {} as any, 'findAll');
    },

    worksWithQueryStub() {
        this.buildURL('super-user', null, null, 'query', { limit: 10 });
    },

    worksWithQueryRecord() {
        this.buildURL('super-user', null, null, 'queryRecord', { companyId: 10 });
    },

    worksWithFindMany() {
        this.buildURL('super-user', [1, 2, 3], null, 'findMany');
    },

    worksWithFindHasMany() {
        this.buildURL('super-user', 1, {} as any, 'findHasMany');
    },

    worksWithFindBelongsTo() {
        this.buildURL('super-user', 1, {} as any, 'findBelongsTo');
    },

    worksWithCreateRecord() {
        this.buildURL('super-user', 1, {} as any, 'createRecord');
    },

    worksWithUpdateRecord() {
        this.buildURL('super-user', 1, {} as any, 'updateRecord');
    },

    worksWithDeleteRecord() {
        this.buildURL('super-user', 1, {} as any, 'deleteRecord');
    },

    worksWithUnknownRequestType() {
        this.buildURL('super-user', 1, null, 'unknown');
        this.buildURL('super-user', null, null, 'unknown');
    },
});
