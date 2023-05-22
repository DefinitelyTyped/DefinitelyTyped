import * as THREE from 'three';

// Test for legacy usage
const eveDisForAnyEvent = new THREE.EventDispatcher();
eveDisForAnyEvent.addEventListener('eventA', e => {
    e.type; // $ExpectType "eventA"
    e.target; // $ExpectType any
    e.bar();
});
eveDisForAnyEvent.dispatchEvent({ type: 'eventA' });
eveDisForAnyEvent.removeEventListener('eventA', e => {
    e.type; // $ExpectType "eventA"
    e.target; // $ExpectType any
});
eveDisForAnyEvent.hasEventListener('eventA', e => {
    e.type; // $ExpectType "eventA"
    e.target; // $ExpectType any
});

// Test for typed events
type TestEvent = { type: 'foo'; foo: number } | { type: 'bar'; bar: string };
const eveDisForTestEvent = new THREE.EventDispatcher<TestEvent>();
eveDisForTestEvent.addEventListener('foo', e => {
    e.type; // $ExpectType "foo"
    e.target; // $ExpectType EventDispatcher<TestEvent>

    // NOTE: Error in ts lower than 3.9. The minimum typescript version cannot be raised from 3.6 because of the dependency from aframe.
    // e.foo; // $ExpectType number
    // @ts-expect-error
    e.bar;
});
// call addEventListener with an invalid event
// @ts-expect-error
eveDisForTestEvent.addEventListener('baz', () => {});

eveDisForTestEvent.dispatchEvent({ type: 'foo', foo: 42 });
// call dispatchEvent with an invalid event
// @ts-expect-error
eveDisForTestEvent.dispatchEvent({ type: 'foo', foo: '42' });
// @ts-expect-error
eveDisForTestEvent.dispatchEvent({ type: 'foo', bar: '42' });

eveDisForTestEvent.removeEventListener('bar', () => {});
eveDisForTestEvent.hasEventListener('bar', () => {});
