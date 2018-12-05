import Ember from 'ember';
import { assertType } from "./lib/assert";

const BaseApp = Ember.Application.extend({
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

const App1 = BaseApp.create({
    rootElement: '#app-one',
    customEvents: {
        paste: 'paste'
    }
});

const App2 = BaseApp.create({
    rootElement: '#app-two',
    customEvents: {
        mouseenter: null,
        mouseleave: null
    }
});

const App3 = BaseApp.create();

const App3Instance1 = App3.buildInstance();

const App3Instance2 = App3.buildInstance({ foo: 'bar' });
