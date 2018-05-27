import Ember from 'ember';
import { assertType } from "./lib/assert";

let App = Ember.Application.create({
    customEvents: {
        paste: 'paste'
    }
});

App.initializer({
    name: 'my-initializer',
    initialize(app) {
        app.register('foo:bar', Ember.Object.extend({ foo: 'bar' }));
    }
});

App.instanceInitializer({
    name: 'my-instance-initializer',
    initialize(app) {
        app.lookup('foo:bar').get('foo');
    }
});

let App2 = Ember.Application.create({
    customEvents: {
        mouseenter: null,
        mouseleave: null
    }
});
