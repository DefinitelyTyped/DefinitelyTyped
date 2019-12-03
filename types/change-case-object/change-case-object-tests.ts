import changeCaseObject = require('change-case-object');

// $ExpectType object
changeCaseObject.camelCase({ hello_world: 'hi' });
// $ExpectType string
changeCaseObject.camelCase('hello_world');
// $ExpectType ReadonlyArray<string>
changeCaseObject.camelCase(['hello_world']);

// $ExpectType object
changeCaseObject.snakeCase({ helloWorld: 'hi' });
// $ExpectType string
changeCaseObject.snakeCase('helloWorld');
// $ExpectType ReadonlyArray<string>
changeCaseObject.snakeCase(['helloWorld']);

// $ExpectType object
changeCaseObject.paramCase({ helloWorld: 'hi' });
// $ExpectType string
changeCaseObject.paramCase('helloWorld');
// $ExpectType ReadonlyArray<string>
changeCaseObject.paramCase(['helloWorld']);

// $ExpectType object
changeCaseObject.camel({ hello_world: 'hi' });
// $ExpectType string
changeCaseObject.camel('hello_world');
// $ExpectType ReadonlyArray<string>
changeCaseObject.camel(['hello_world']);

// $ExpectType object
changeCaseObject.snake({ helloWorld: 'hi' });
// $ExpectType string
changeCaseObject.snake('helloWorld');
// $ExpectType ReadonlyArray<string>
changeCaseObject.snake(['helloWorld']);

// $ExpectType object
changeCaseObject.param({ helloWorld: 'hi' });
// $ExpectType string
changeCaseObject.param('helloWorld');
// $ExpectType ReadonlyArray<string>
changeCaseObject.param(['helloWorld']);
