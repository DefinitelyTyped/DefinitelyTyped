import { cache, Component, events, instance, util, Service } from 'sauronjs';

events.dom.update();

// $ExpectType Component
new Component({ element: new HTMLElement() });

class SomeComponent extends Component {}

// $ExpectType SomeComponent
const example = new SomeComponent({ element: new HTMLElement() });

util.insert(new HTMLElement());
util.ready(() => {
    'example';
});

// $ExpectType Service
new Service(['examplePublisher'], ['exampleSubscription']);

class ExampleService extends Service {
    constructor() {
        super(['examplePublisher'], ['exampleSubscription']);
    }
}

// $ExpectType ExampleService
new ExampleService();

// $ExpectType Cache
cache('test');

// $ExpectType void
cache();

// $ExpectType SauronInstance
instance({ example });
