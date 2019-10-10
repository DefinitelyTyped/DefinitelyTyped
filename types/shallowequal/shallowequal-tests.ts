import shallowEqual = require('shallowequal');

const a = {};
const b = {};

shallowEqual(a, b); // $ExpectType boolean
// $ExpectType boolean
shallowEqual(a, b, (a, b, indexOrKey) => {
    a; // $ExpectType any
    b; // $ExpectType any
    indexOrKey; // $ExpectType string | number | undefined

    return false;
});
shallowEqual(a, b, () => undefined); // $ExpectType boolean
// $ExpectType boolean
shallowEqual(
    a,
    b,
    function() {
        this; // $ExpectType { foo: string; }
        return undefined;
    },
    { foo: 'bar' }
);

interface Foo {
    foo: string;
    bar: number;
}

const c: Foo = { foo: 'foo', bar: 0 };
const d: Foo = { foo: 'baz', bar: 1 };

const undefinedCustomizer: shallowEqual.Customizer<Foo> = () => undefined;

const customizer: shallowEqual.Customizer<Foo> = function(a: any, b: any) {
    this; // $ExpectType Foo
    a; // $ExpectType any
    b; // $ExpectType any
    return undefined;
};

shallowEqual(c, d, undefinedCustomizer); // $ExpectType boolean
shallowEqual(c, d, customizer); // $ExpectType boolean
