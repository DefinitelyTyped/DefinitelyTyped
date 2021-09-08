import * as THREE from 'three';

// Test for legacy usage
const eveDisForAnyEvent = new THREE.EventDispatcher();
eveDisForAnyEvent.addEventListener('eventA', e => {
    const type: 'eventA' = e.type;
    // $ExpectError
    const invalidType: 'eventB' = e.type;
    const target = e.target;
    target.foo();
    e.bar();
});
eveDisForAnyEvent.dispatchEvent({ type: 'eventA' });
eveDisForAnyEvent.removeEventListener('eventA', e => {
    const type: 'eventA' = e.type;
    // $ExpectError
    const invalidType: 'eventB' = e.type;
    const target = e.target;
    target.foo();
    e.bar();
});
eveDisForAnyEvent.hasEventListener('eventA', e => {
    const type: 'eventA' = e.type;
    // $ExpectError
    const invalidType: 'eventB' = e.type;
    const target = e.target;
    target.foo();
    e.bar();
});

// Test for typed events
type TestEvent = { type: 'foo'; foo: number } | { type: 'bar'; bar: string };
const eveDisForTestEvent = new THREE.EventDispatcher<TestEvent>();
eveDisForTestEvent.addEventListener('foo', e => {
    const type: 'foo' = e.type;
    // $ExpectError
    const invalidType: 'bar' = e.type;
    const target: THREE.EventDispatcher<TestEvent> = e.target;
    // $ExpectError
    const invalidTarget: string = e.target;
    const foo: number = e.foo;
    // $ExpectError
    const invalidPropertyFoo: string = e.foo;
    // $ExpectError
    const invalidPropertyBar: any = e.bar;
});
eveDisForTestEvent.dispatchEvent({ type: 'foo', foo: 42 });
// call dispatchEvent with an invalid event
// $ExpectError
eveDisForTestEvent.dispatchEvent({ type: 'foo', foo: '42' });
// $ExpectError
eveDisForTestEvent.dispatchEvent({ type: 'foo', bar: '42' });
eveDisForTestEvent.removeEventListener('bar', e => {
    const type: 'bar' = e.type;
    const target: THREE.EventDispatcher<TestEvent> = e.target;
    const bar: string = e.bar;
});
eveDisForTestEvent.hasEventListener('bar', e => {
    const type: 'bar' = e.type;
    const target: THREE.EventDispatcher<TestEvent> = e.target;
    const bar: string = e.bar;
});
