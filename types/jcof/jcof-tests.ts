import jcof = require('jcof');

const exampleObject = {
  people: [
    { "first-name": "Bob", age: 32, occupation: "Plumber", "full-time": true },
    { "first-name": "Alice", age: 28, occupation: "Programmer", "full-time": true },
    { "first-name": "Bernard", age: 36, occupation: null, "full-time": null },
    { "first-name": "El", age: 57, occupation: "Programmer", "full-time": false }
  ]
};

const encoded = jcof.stringify(exampleObject); // $ExpectType string
jcof.parse(encoded); // $ExpectType object
