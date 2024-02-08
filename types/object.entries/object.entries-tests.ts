import entries = require("object.entries");

const obj = {
    foo: "string",
    bar: 42,
};

entries(obj); // $ExpectType ['foo' | 'bar', string | number][]
