import Ember from 'ember';

declare global {
    // tslint:disable-next-line:no-empty-interface
    interface String extends Ember.StringPrototypeExtensions {}
}

// @ts-expect-error
''.dasherize('foo');
''.dasherize(); // $ExpectType string

''.camelize(); // $ExpectType string
// @ts-expect-error
''.camelize('blue man group');

''.decamelize(); // $ExpectType string
// @ts-expect-error
''.decamelize('blue man group');

''.underscore(); // $ExpectType string
// @ts-expect-error
''.underscore('blue man group');

''.w(); // $ExpectType string[]

''.classify(); // $ExpectType string
// @ts-expect-error
''.classify('blue man group');

''.capitalize(); // $ExpectType string
// @ts-expect-error
''.capitalize('blue man group');

''.loc(); // $ExpectType string
// @ts-expect-error
''.loc('_Hello World');
