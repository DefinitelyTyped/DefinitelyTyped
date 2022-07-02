import * as R from 'ramda';

() => {
    R.is(Object, {}); // => true
    R.is(Object)({}); // => true
    R.is(Number, 1); // => true
    R.is(Number)(1); // => true
    R.is(Object, 1); // => false
    R.is(Object)(1); // => false
    R.is(String, 's'); // => true
    R.is(String)('s'); // => true
    R.is(String, new String('')); // => true
    R.is(String)(new String('')); // => true
    R.is(Object, new String('')); // => true
    R.is(Object)(new String('')); // => true
    R.is(Object, 's'); // => false
    R.is(Object)('s'); // => false
    R.is(Number, {}); // => false
    R.is(Number)({}); // => false
};

() => {
    const stringOrNumber = 'string' as string | number;

    if (R.is(Number, stringOrNumber)) {
        const number: number = stringOrNumber;
    }

    if (R.is(String)(stringOrNumber)) {
        const string: string = stringOrNumber;
    }
};

() => {
    // test classes that take parameters
    // tslint:disable-next-line:no-unnecessary-class
    class Foo {
        constructor(arg: string) {}
    }

    const unknownObject: unknown = {};

    if (R.is(Foo, unknownObject)) {
        const foo: Foo = unknownObject;
    }

    if (R.is(Foo)(unknownObject)) {
        const foo: Foo = unknownObject;
    }
};
