import * as THREE from "three";

// Test for legacy usage
const eveDisForAnyEvent = new THREE.EventDispatcher<Record<string, { [key: string]: unknown }>>();
eveDisForAnyEvent.addEventListener("eventA", e => {
    e.type; // $ExpectType "eventA"
    e.target; // $ExpectType EventDispatcher<Record<string, { [key: string]: unknown; }>>
    // @ts-expect-error
    e.bar();
});
eveDisForAnyEvent.dispatchEvent({ type: "eventA" });
eveDisForAnyEvent.dispatchEvent({ type: "eventB", otherProp: 42 });

eveDisForAnyEvent.removeEventListener("eventA", e => {
    e.type; // $ExpectType "eventA"
    e.target; // $ExpectType EventDispatcher<Record<string, { [key: string]: unknown; }>>
});
eveDisForAnyEvent.hasEventListener("eventA", e => {
    e.type; // $ExpectType "eventA"
    e.target; // $ExpectType EventDispatcher<Record<string, { [key: string]: unknown; }>>
});

// Test for typed events
interface TestEvent {
    foo: { foo: number };
    bar: { bar: string };
}

const eveDisForTestEvent = new THREE.EventDispatcher<TestEvent>();
eveDisForTestEvent.addEventListener("foo", e => {
    e.type; // $ExpectType "foo"
    e.target; // $ExpectType EventDispatcher<TestEvent>
    e.foo; // $ExpectType number
    // @ts-expect-error
    e.bar;
});
eveDisForTestEvent.addEventListener("bar", e => {
    e.type; // $ExpectType "bar"
    e.target; // $ExpectType EventDispatcher<TestEvent>
    e.bar; // $ExpectType string
    // @ts-expect-error
    e.foo;
});

// @ts-expect-error
eveDisForTestEvent.addEventListener("baz", e => {});

eveDisForTestEvent.dispatchEvent({ type: "foo", foo: 42 });
eveDisForTestEvent.dispatchEvent({ type: "bar", bar: "42" });
// @ts-expect-error
eveDisForTestEvent.dispatchEvent({ type: "zzzz", shouldWork: "42" });
// @ts-expect-error
eveDisForTestEvent.dispatchEvent({ type: "eventA" });

// call dispatchEvent with an invalid event
// @ts-expect-error
eveDisForTestEvent.dispatchEvent({ type: "foo", foo: "42" });
// @ts-expect-error
eveDisForTestEvent.dispatchEvent({ type: "foo", bar: "42" });
// @ts-expect-error
eveDisForTestEvent.dispatchEvent({ type: "bar", bar: 42 });
// @ts-expect-error
eveDisForTestEvent.dispatchEvent({ bar: 42 });

eveDisForTestEvent.removeEventListener("bar", () => {});
eveDisForTestEvent.hasEventListener("bar", () => {});
