import { dasherize, camelize, capitalize, classify, decamelize, loc, underscore, w } from '@ember/string';

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
loc("_Hello %@ %@", ["John", "Smith"]);  // $ExpectType string
