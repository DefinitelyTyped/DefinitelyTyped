import forEach = require('foreach');

declare const stringArray: string[];
declare const numberArrayLike: ArrayLike<string>;
declare const objectRecord: Record<string, object>;
declare const object: object;

// arrow callback
/// array
forEach(stringArray, (value, index, array) => {
    value; // $ExpectType string
    index; // $ExpectType number
    array; // $ExpectType string[]
});

forEach(numberArrayLike, (value, index, array) => {
    value; // $ExpectType string
    index; // $ExpectType number
    array; // $ExpectType ArrayLike<string>
});

/// record
forEach(objectRecord, (value, property, record) => {
    value; // $ExpectType object
    property; // $ExpectType string
    record; // $ExpectType Record<string, object>
});

forEach({ foo: 'bar' }, (value, property, record) => {
    value; // $ExpectType string
    property; // $ExpectType string
    record; // $ExpectType { foo: string; }
});

// thisArg
/// implicit undefined
forEach([], function () {
    this; // $ExpectType undefined
});

forEach({}, function () {
    this; // $ExpectType undefined
});

/// explicit binding
forEach(
    [],
    function () {
        this; // $ExpectType object
    },
    object,
);

forEach(
    {},
    function () {
        this; // $ExpectType object
    },
    object,
);
