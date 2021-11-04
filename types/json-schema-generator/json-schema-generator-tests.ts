import jsonToSchema = require("json-schema-generator");

const obj = jsonToSchema({a: 4}); // $ExpectType JSONSchema4

const withString = jsonToSchema("{a: 4}"); // $ExpectError
