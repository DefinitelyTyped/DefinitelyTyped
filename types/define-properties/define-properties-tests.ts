import define = require('define-properties');

declare function __classPrivateFieldGet<T extends object, V>(receiver: T, privateMap: WeakMap<T, V>): V;

const object: object = undefined!;
const object_foo = new WeakMap<object, string>();

// $ExpectType boolean
define.supportsDescriptors;

// $ExpectType typeof defineProperties
define;

// @ts-expect-error
define(object);

// @ts-expect-error
define(null, {});

define(object, {
    getFoo() { // $ExpectType () => string
        this; // $ExpectType any

        return __classPrivateFieldGet(this, object_foo);
    }
});

define(object, {
    foo: 'any' // $ExpectType string
}, {
    foo: () => (object as any).foo !== 'any'
});

define(object, {
    foo: 'any' // $ExpectType string
}, {
    foo: () => (object as any).foo !== 'any',
    // @ts-expect-error
    bar: () => { throw new Error(); },
});

define(object, {
    foo: 'any', // $ExpectType string
    bar: 'valid' // $ExpectType string
}, {
    foo: () => (object as any).foo !== 'any',
});
