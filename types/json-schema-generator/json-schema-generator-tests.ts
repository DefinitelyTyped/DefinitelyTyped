import generate = require("json-schema-generator");

const obj = generate({a: 4}); // $ExpectType JSONSchema4

const withString = generate("{a: 4}"); // $ExpectError
