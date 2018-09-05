import Ember from 'ember';
import { assertType } from './lib/assert';

class Foo extends Ember.Object {
    hello() { return 'world'; }
    protected bar() { return 'bar'; }
    private baz() { return 'baz'; }
}
const f = new Foo();
assertType<string>(f.hello());
assertType<string>(f.bar()); // $ExpectError
assertType<string>(f.baz()); // $ExpectError

class Foo2 extends Ember.Object.extend({
    bar: ''
}) {
    hello() { return 'world'; }
    protected bar() { return 'bar'; } // $ExpectError
    private baz() { return 'baz'; }
}
