import Ember from 'ember';
import DS from 'ember-data';
import Controller from '@ember/controller';

class MyModel extends DS.Model {}

declare module 'ember-data/types/registries/model' {
    export default interface ModelRegistry {
        'my-model': MyModel;
    }
}

Ember.Route.extend({
    model(): any {
        return this.store.findAll('my-model');
    },
});

Controller.extend({
    actions: {
        create(): any {
            this.queryParams;
            return this.store.createRecord('my-model');
        },
    },
});

Ember.DataAdapter.extend({
    test() {
        this.store.findRecord('my-model', 123);
    },
});
