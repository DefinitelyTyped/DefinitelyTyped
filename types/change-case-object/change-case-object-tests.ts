import changeCaseObject = require('change-case-object');

// $ExpectType object
changeCaseObject.camelCase({ hello_world: 'hi' });
// $ExpectType string
changeCaseObject.camelCase('hello_world');
// $ExpectType string[]
changeCaseObject.camelCase(['hello_world']);
// $ExpectType object[]
changeCaseObject.camelCase([{ hello_world: 'hi' }]);

// $ExpectType object
changeCaseObject.snakeCase({ helloWorld: 'hi' });
// $ExpectType string
changeCaseObject.snakeCase('helloWorld');
// $ExpectType string[]
changeCaseObject.snakeCase(['helloWorld']);
// $ExpectType object[]
changeCaseObject.snakeCase([{ hello_world: 'hi' }]);

// $ExpectType object
changeCaseObject.paramCase({ helloWorld: 'hi' });
// $ExpectType string
changeCaseObject.paramCase('helloWorld');
// $ExpectType string[]
changeCaseObject.paramCase(['helloWorld']);
// $ExpectType object[]
changeCaseObject.paramCase([{ hello_world: 'hi' }]);

// $ExpectType object
changeCaseObject.camel({ hello_world: 'hi' });
// $ExpectType string
changeCaseObject.camel('hello_world');
// $ExpectType string[]
changeCaseObject.camel(['hello_world']);
// $ExpectType object[]
changeCaseObject.camel([{ hello_world: 'hi' }]);

// $ExpectType object
changeCaseObject.snake({ helloWorld: 'hi' });
// $ExpectType string
changeCaseObject.snake('helloWorld');
// $ExpectType string[]
changeCaseObject.snake(['helloWorld']);
// $ExpectType object[]
changeCaseObject.snake([{ hello_world: 'hi' }]);

// $ExpectType object
changeCaseObject.param({ helloWorld: 'hi' });
// $ExpectType string
changeCaseObject.param('helloWorld');
// $ExpectType string[]
changeCaseObject.param(['helloWorld']);
// $ExpectType object[]
changeCaseObject.param([{ hello_world: 'hi' }]);
