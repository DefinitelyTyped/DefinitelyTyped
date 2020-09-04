import generate = require("json-schema-generator");

const obj = generate({a: 4});

 // @ts-expect-error
const withString = generate("{a: 4}");
