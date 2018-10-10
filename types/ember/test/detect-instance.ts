import Ember from 'ember';
import { assertType } from './lib/assert';

const ExtendClass = Ember.Object.extend({
    foo: 'hello'
});

class ES6Class extends Ember.Object {
    bar: string;
}

const testObject = null;

if (ExtendClass.detectInstance(testObject)) {
    assertType<string>(testObject.foo);
}

if (ES6Class.detectInstance(testObject)) {
    assertType<string>(testObject.bar);
}
