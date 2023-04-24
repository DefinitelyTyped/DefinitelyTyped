import Ember from 'ember';
import { SafeString } from '@ember/template/-private/handlebars';

const { dasherize, camelize, capitalize, classify, decamelize, htmlSafe, loc, underscore, w } = Ember.String;

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

// @ts-expect-error
loc();
loc('_Hello World'); // $ExpectType string
// TODO - fix this case upstream in @types/ember https://github.com/typed-ember/ember-cli-typescript/issues/281
loc('_Hello %@ %@', ['John', 'Smith']); // $ExpectType string

const handlebarsSafeString: SafeString = Ember.String.htmlSafe('lorem ipsum...');
Ember.String.htmlSafe('lorem ipsum...'); // $ExpectType SafeString
// @ts-expect-error
const regularString: string = Ember.String.htmlSafe('lorem ipsum...');
