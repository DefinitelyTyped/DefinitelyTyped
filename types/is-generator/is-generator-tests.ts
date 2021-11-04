import isGenerator = require("is-generator");

isGenerator({ next: () => { }, throw: () => { } }); // $ExpectType boolean
isGenerator.fn(function*() { yield "a"; }); // $ExpectType boolean
