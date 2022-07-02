import 'setimmediate';

// $ExpectType number
const i1 = setImmediate((...args) => {
    args; // $ExpectType []
});

// $ExpectType number
const i2 = setImmediate((...args) => {
    args; // $ExpectType [number]
}, 1);

// $ExpectType number
const i3 = setImmediate((foo, bar, baz) => {
    foo; // $ExpectType number
    bar; // $ExpectType string
    baz; // $ExpectType boolean
}, 1, 'a', true);

clearImmediate(i1);
clearImmediate(i2);
clearImmediate(i3);

// Errors:
// @ts-expect-error
setImmediate();
// @ts-expect-error
setImmediate((foo: unknown) => {});

// @ts-expect-error
clearImmediate();
// @ts-expect-error
clearImmediate(null);
// @ts-expect-error
clearImmediate(undefined);
// @ts-expect-error
clearImmediate('string');
// @ts-expect-error
clearImmediate(Symbol.iterator);
// @ts-expect-error
clearImmediate(true);
// @ts-expect-error
clearImmediate(false);
// @ts-expect-error
clearImmediate({});
// @ts-expect-error
clearImmediate(Function);
