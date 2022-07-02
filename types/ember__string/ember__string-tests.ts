import {
  dasherize,
  camelize,
  capitalize,
  classify,
  decamelize,
  underscore,
  w,
} from '@ember/string';

// @ts-expect-error
dasherize();
dasherize('blue man group'); // $ExpectType string
// @ts-expect-error
dasherize('', '');

// @ts-expect-error
camelize();
camelize('blue man group'); // $ExpectType string
// @ts-expect-error
camelize('', '');

// @ts-expect-error
decamelize();
decamelize('blue man group'); // $ExpectType string
// @ts-expect-error
decamelize('', '');

// @ts-expect-error
underscore();
underscore('blue man group'); // $ExpectType string
// @ts-expect-error
underscore('', '');

// @ts-expect-error
w();
w('blue man group'); // $ExpectType string[]
// @ts-expect-error
w('', '');

// @ts-expect-error
classify();
classify('blue man group'); // $ExpectType string
// @ts-expect-error
classify('', '');

// @ts-expect-error
capitalize();
capitalize('blue man group'); // $ExpectType string
// @ts-expect-error
capitalize('', '');
