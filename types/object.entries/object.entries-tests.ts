import entries = require("object.entries");

const obj = {
    foo: "string",
    bar: 42,
};

entries(obj); // $ExpectType ['foo' | 'bar', string | number][]

const nullObj = {
    __proto__: null,
    foo: "a",
    bar: true,
};

entries(nullObj); // $ExpectType ['foo' | 'bar', string | boolean][]
