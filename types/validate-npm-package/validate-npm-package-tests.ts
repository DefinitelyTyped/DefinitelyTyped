import validateNpmPackage = require('validate-npm-package');

// $ExpectType Result
const results = validateNpmPackage({
    name: 'FooABC',
    version: 'a.b.c',
});
