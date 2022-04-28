/**
 * Tests to ensure that access modifier keywords are appropriately
 * respected and supported
 */
import Ember from 'ember';
import { assertType } from './lib/assert';

class Foo extends Ember.Object {
    hello() {
        return 'world';
    }
    protected bar() {
        return 'bar';
    }
    private baz() {
        return 'baz';
    }
}
const f = new Foo();
assertType<string>(f.hello());
// protected property should not be visible from outside of Foo
assertType<string>(f.bar()); // $ExpectError
// private property should not be visible from outside of Foo
assertType<string>(f.baz()); // $ExpectError

class Foo2 extends Ember.Object.extend({
    bar: '',
}) {
    hello() {
        return 'world';
    }
    // Cannot override with a mis-matched property type
    // $ExpectError
    protected bar() {
        return 'bar';
    }
    private baz() {
        return 'baz';
    }
}
