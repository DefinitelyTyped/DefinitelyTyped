import Ember from 'ember';
import { assertType } from "./lib/assert";

let BaseEngine = Ember.Engine.extend({
    modulePrefix: 'my-engine'
});

BaseEngine.initializer({
    name: 'my-initializer',
    initialize(engine) {
        engine.register('foo:bar', Ember.Object.extend({ foo: 'bar' }));
    }
});

BaseEngine.instanceInitializer({
    name: 'my-instance-initializer',
    initialize(engine) {
        engine.lookup('foo:bar').get('foo');
    }
});

let Engine1 = BaseEngine.create({
    rootElement: '#engine-one',
    customEvents: {
        paste: 'paste'
    }
});

let Engine2 = BaseEngine.create({
    rootElement: '#engine-two',
    customEvents: {
        mouseenter: null,
        mouseleave: null
    }
});

let Engine3 = BaseEngine.create();

let Engine3Instance1 = Engine3.buildInstance();

let Engine3Instance2 = Engine3.buildInstance({ foo: 'bar' });
