import { assertType } from './lib/assert';
import EmberObject from '@ember/object';

const ExtendClass = EmberObject.extend({
    foo: 'hello'
});

class ES6Class extends EmberObject {
    bar: string;
}

const testObject = null;

if (ExtendClass.detectInstance(testObject)) {
    assertType<string>(testObject.foo);
}

if (ES6Class.detectInstance(testObject)) {
    assertType<string>(testObject.bar);
}
