import Ember from 'ember';

const LifetimeHooks = Ember.Object.extend({
    resource: null as {} | null,

    init() {
        this._super();
        this.resource = {};
    },

    willDestroy() {
        delete this.resource;
        this._super();
    }
});

class MyObject30 extends Ember.Object {
    constructor() {
        super();
    }
}

class MyObject31 extends Ember.Object {
    constructor(properties: object) {
        super(properties);
    }
}
