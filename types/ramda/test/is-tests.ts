import * as R from 'ramda';

() => {
    // $ExpectType boolean
    R.is(Object, {}); // => true
    // $ExpectType boolean
    R.is(Object)({}); // => true
    // $ExpectType boolean
    R.is(Number, 1); // => true
    // $ExpectType boolean
    R.is(Number)(1); // => true
    // $ExpectType boolean
    R.is(Object, 1); // => false
    // $ExpectType boolean
    R.is(Object)(1); // => false
    // $ExpectType boolean
    R.is(String, 's'); // => true
    // $ExpectType boolean
    R.is(String)('s'); // => true
    // $ExpectType boolean
    R.is(String, new String('')); // => true
    // $ExpectType boolean
    R.is(String)(new String('')); // => true
    // $ExpectType boolean
    R.is(Object, new String('')); // => true
    // $ExpectType boolean
    R.is(Object)(new String('')); // => true
    // $ExpectType boolean
    R.is(Object, 's'); // => false
    // $ExpectType boolean
    R.is(Object)('s'); // => false
    // $ExpectType boolean
    R.is(Number, {}); // => false
    // $ExpectType boolean
    R.is(Number)({}); // => false
};

() => {
    const stringOrNumber = 'string' as string | number;

    if (R.is(Number, stringOrNumber)) {
        // $ExpectType number
        stringOrNumber;
    }

    if (R.is(String)(stringOrNumber)) {
        // $ExpectType string
        stringOrNumber;
    }
};

() => {
    // test classes that take parameters
    class Foo {
        constructor(public arg: string) {}
    }

    const unknownObject: unknown = {};

    if (R.is(Foo, unknownObject)) {
        // $ExpectType Foo
        unknownObject;
    }

    if (R.is(Foo)(unknownObject)) {
        // $ExpectType Foo
        unknownObject;
    }
};
