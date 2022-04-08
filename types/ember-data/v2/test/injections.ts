import Ember from 'ember';
import DS from 'ember-data';

class MyModel extends DS.Model {}

declare module 'ember-data' {
    interface ModelRegistry {
        'my-model': MyModel;
    }
}

Ember.Route.extend({
    model(): any {
        return this.store.findAll('my-model');
    },
});

Ember.Controller.extend({
    actions: {
        create(): any {
            return this.store.createRecord('my-model');
        },
    },
});

Ember.DataAdapter.extend({
    test() {
        this.store.findRecord('my-model', 123);
    },
});
