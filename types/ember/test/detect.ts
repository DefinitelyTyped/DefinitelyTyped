import Ember from 'ember';
import { assertType } from './lib/assert';

const ExtendClass = Ember.Object.extend({
    foo: 'hello'
});

class ES6Class extends Ember.Object {
    bar: string;
}

const TestClass = Ember.Object;

if (ExtendClass.detect(TestClass)) {
    assertType<string>(TestClass.create().foo);
}

if (ES6Class.detect(TestClass)) {
    assertType<string>(TestClass.create().bar);
}
