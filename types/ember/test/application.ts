import Ember from 'ember';
import { assertType } from "./lib/assert";

let BaseApp = Ember.Application.extend({
    modulePrefix: 'my-app'
});

BaseApp.initializer({
    name: 'my-initializer',
    initialize(app) {
        app.register('foo:bar', Ember.Object.extend({ foo: 'bar' }));
    }
});

BaseApp.instanceInitializer({
    name: 'my-instance-initializer',
    initialize(app) {
        app.lookup('foo:bar').get('foo');
    }
});

let App1 = BaseApp.create({
    rootElement: '#app-one',
    customEvents: {
        paste: 'paste'
    }
});

let App2 = BaseApp.create({
    rootElement: '#app-two',
    customEvents: {
        mouseenter: null,
        mouseleave: null
    }
});
