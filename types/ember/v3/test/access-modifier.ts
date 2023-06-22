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
// @ts-expect-error
assertType<string>(f.bar());
// private property should not be visible from outside of Foo
// @ts-expect-error
assertType<string>(f.baz());

class Foo2 extends Ember.Object.extend({
    bar: '',
}) {
    hello() {
        return 'world';
    }
    // Cannot override with a mis-matched property type
    // @ts-expect-error
    protected bar() {
        return 'bar';
    }
    private baz() {
        return 'baz';
    }
}
