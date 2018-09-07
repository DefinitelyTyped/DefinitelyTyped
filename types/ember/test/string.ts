import Ember from 'ember';

const { dasherize, camelize, capitalize, classify, decamelize, htmlSafe, loc, underscore, w } = Ember.String;

dasherize(); // $ExpectError
dasherize('blue man group'); // $ExpectType string
dasherize('', ''); // $ExpectError

camelize(); // $ExpectError
camelize('blue man group'); // $ExpectType string
camelize('', ''); // $ExpectError

decamelize(); // $ExpectError
decamelize('blue man group'); // $ExpectType string
decamelize('', ''); // $ExpectError

underscore(); // $ExpectError
underscore('blue man group'); // $ExpectType string
underscore('', ''); // $ExpectError

w(); // $ExpectError
w('blue man group'); // $ExpectType string[]
w('', ''); // $ExpectError

classify(); // $ExpectError
classify('blue man group'); // $ExpectType string
classify('', ''); // $ExpectError

capitalize(); // $ExpectError
capitalize('blue man group'); // $ExpectType string
capitalize('', ''); // $ExpectError

loc(); // $ExpectError
loc("_Hello World");  // $ExpectType string
// TODO - fix this case upstream in @types/ember https://github.com/typed-ember/ember-cli-typescript/issues/281
loc("_Hello %@ %@", ["John", "Smith"]);  // $ExpectType string
