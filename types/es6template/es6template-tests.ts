import es6template = require('es6template');

// This rule is disabled because the library uses ES6-looking template strings, but with normal strings.
/* tslint:disable:no-invalid-template-strings */

const test1 = es6template('foo ${bar} baz ${quux}', {bar: 'BAR', quux: 'QUUX'});
const test2 = es6template.render('Hello ${place} and ${user.name}!', {
    place: 'world',
    user: {
        name: 'Charlike'
    }
});
const fn = es6template.compile('Hello ${place} and ${user.name}!');
const test3 = fn({place: 'world', user: {name: 'Charlike'}});
