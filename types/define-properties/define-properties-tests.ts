import define = require('define-properties');

declare function __classPrivateFieldGet<T extends object, V>(receiver: T, privateMap: WeakMap<T, V>): V;

const object: object = undefined!;
const object_foo = new WeakMap<object, string>();

// $ExpectType boolean
define.supportsDescriptors;

// $ExpectType typeof defineProperties
define;

// $ExpectError
define(object);

// $ExpectError
define(null, {});

define(object, {
	getFoo() {
		this; // $ExpectType any

		return __classPrivateFieldGet(this, object_foo);
	}
});

define(object, {
	foo: 'any'
}, {
	foo: () => (object as any).foo !== 'any'
});

// $ExpectError
define(object, {
	foo: 'any'
}, {
	foo: () => (object as any).foo !== 'any',
	bar: () => { throw new Error(); },
});

define(object, {
	foo: 'any',
	bar: 'valid'
}, {
	foo: () => (object as any).foo !== 'any',
});
