import Ember from 'ember';

declare global {
    // tslint:disable-next-line:no-empty-interface
    interface String extends Ember.StringPrototypeExtensions {}
}

''.dasherize('foo'); // $ExpectError
''.dasherize(); // $ExpectType string

''.camelize(); // $ExpectType string
''.camelize('blue man group'); // $ExpectError

''.decamelize(); // $ExpectType string
''.decamelize('blue man group'); // $ExpectError

''.underscore(); // $ExpectType string
''.underscore('blue man group'); // $ExpectError

''.w(); // $ExpectType string[]

''.classify(); // $ExpectType string
''.classify('blue man group'); // $ExpectError

''.capitalize(); // $ExpectType string
''.capitalize('blue man group'); // $ExpectError

''.loc(); // $ExpectType string
''.loc('_Hello World'); // $ExpectError
