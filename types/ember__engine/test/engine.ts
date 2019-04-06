import Engine from "@ember/engine";
import EmberObject from "@ember/object";

const BaseEngine = Engine.extend({
    modulePrefix: 'my-engine'
});

BaseEngine.initializer({
    name: 'my-initializer',
    initialize(engine) {
        engine.register('foo:bar', EmberObject.extend({ foo: 'bar' }));
    }
});

BaseEngine.instanceInitializer({
    name: 'my-instance-initializer',
    initialize(engine) {
        engine.lookup('foo:bar').get('foo');
    }
});

const Engine1 = BaseEngine.create({
    rootElement: '#engine-one',
    customEvents: {
        paste: 'paste'
    }
});

const Engine2 = BaseEngine.create({
    rootElement: '#engine-two',
    customEvents: {
        mouseenter: null,
        mouseleave: null
    }
});

const Engine3 = BaseEngine.create();

const Engine3Instance1 = Engine3.buildInstance();

const Engine3Instance2 = Engine3.buildInstance({ foo: 'bar' });
