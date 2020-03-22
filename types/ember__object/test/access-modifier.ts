import { assertType } from './lib/assert';
import EmberObject from '@ember/object';

class Foo extends EmberObject {
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
assertType<string>(f.bar()); // $ExpectError
assertType<string>(f.baz()); // $ExpectError

// TODO: enable after TS 3.0 https://github.com/typed-ember/ember-cli-typescript/issues/291
// class Foo2 extends EmberObject.extend({
//     bar: ''
// }) {
//     hello() { return 'world'; }
//     protected bar() { return 'bar'; } // $ExpectError
//     private baz() { return 'baz'; }
// }
