import Ember from 'ember';
import * as utils from '@ember/utils';
import { assertType } from "./lib/assert";

function testTypeOf() {
    utils.typeOf(); // $ExpectType "undefined"
    const str: string = utils.typeOf({});
}

function testIsNoneType() {
    const maybeUndefined: string | undefined = 'not actually undefined';
    if (utils.isNone(maybeUndefined)) {
        return;
    }

    const anotherString = maybeUndefined + 'another string';
    utils.isNone(); // $ExpectType boolean
}

function testIsBlank() {
    utils.isBlank(); // $ExpectType boolean
    utils.isBlank(''); // $ExpectType boolean
    utils.isBlank('', ''); // $ExpectError
}

function testIsEmpty() {
    utils.isEmpty(); // $ExpectType boolean
    utils.isEmpty(''); // $ExpectType boolean
    utils.isEmpty('', ''); // $ExpectError
}

function testIsPresent() {
    utils.isPresent(); // $ExpectType boolean
    utils.isPresent(''); // $ExpectType boolean
    utils.isPresent('', ''); // $ExpectError
}

function testIsNone() {
    utils.isNone(); // $ExpectType boolean
    utils.isNone(''); // $ExpectType boolean
    utils.isNone('', ''); // $ExpectError
}

function testMerge() {
    assertType<{ first: string, last: string }>(
        Ember.merge({ first: 'Tom' }, { last: 'Dale' })
    );
}

function testAssign() {
    assertType<{ first: string, middle: string, last: string }>(
        Ember.assign({ first: 'Tom' }, { middle: 'M' }, { last: 'Dale' })
    );
}

function testOnError() {
    Ember.onerror = function(error) {
        Ember.$.post('/report-error', {
            stack: error.stack,
            otherInformation: 'whatever app state you want to provide'
        });
    };
}

function testDeprecateFunc() {
    function newMethod(first: string, second: number): string {
        return '';
    }

    let oldMethod = Ember.deprecateFunc('Please use the new method', { id: 'deprecated.id', until: '6.0' }, newMethod);
    assertType<string>(newMethod('first', 123));
    assertType<string>(oldMethod('first', 123));
}

function testDefineProperty() {
    const contact = {};

    // ES5 compatible mode
    Ember.defineProperty(contact, 'firstName', {
        writable: true,
        configurable: false,
        enumerable: true,
        value: 'Charles'
    });

    // define a simple property
    Ember.defineProperty(contact, 'lastName', undefined, 'Jolley');

    // define a computed property
    Ember.defineProperty(contact, 'fullName', Ember.computed('firstName', 'lastName', function() {
        return `${this.firstName} ${this.lastName}`;
    }));
}

function testTryInvoke() {
    class Foo {
        hello() { return ['world']; }
        add(x: number, y: string) { return x + parseInt(y, 10); }
        apples(n: number) { return `${n} apples`; }
    }
    // zero-argument function
    Ember.tryInvoke(new Foo(), 'hello'); // $ExpectType string[]
    // one-argument function
    Ember.tryInvoke(new Foo(), 'apples', [4]); // $ExpectType string
    // multi-argument function with different types (reversed types negative test case below)
    Ember.tryInvoke(new Foo(), 'add', [4, '3']); // $ExpectType number

    // Cases that should return undefined
    // No args provided
    Ember.tryInvoke(new Foo(), 'apples'); // $ExpectType undefined
    // Function does not exist
    Ember.tryInvoke(new Foo(), 'doesNotExist'); // $ExpectType undefined
    // Empty args provided
    Ember.tryInvoke(new Foo(), 'apples', []); // $ExpectType undefined
    // Wrong args provided
    Ember.tryInvoke(new Foo(), 'apples', ['']); // $ExpectType undefined
    // Wrong arg types
    Ember.tryInvoke(new Foo(), 'add', [4, 3]); // $ExpectType undefined
    // Reversed arg types
    Ember.tryInvoke(new Foo(), 'add', ['4', 3]); // $ExpectType undefined
}

(function() {
    /** typeOf */
    // TODO: more specific return type in @types/ember https://github.com/typed-ember/ember-cli-typescript/issues/259
    Ember.typeOf();                       // $ExpectType "undefined"
    Ember.typeOf(null);                   // $ExpectType "null"
    Ember.typeOf(undefined);              // $ExpectType "undefined"
    Ember.typeOf('michael');              // $ExpectType "string"
    // tslint:disable-next-line:no-construct
    Ember.typeOf(new String('michael'));  // $ExpectType "string"
    Ember.typeOf(101);                    // $ExpectType "number"
    // tslint:disable-next-line:no-construct
    Ember.typeOf(new Number(101));        // $ExpectType "number"
    Ember.typeOf(true);                   // $ExpectType "boolean"
    // tslint:disable-next-line:no-construct
    Ember.typeOf(new Boolean(true));      // $ExpectType "boolean"
    Ember.typeOf(() => 4);                // $ExpectType "function"
    Ember.typeOf([1, 2, 90]);             // $ExpectType "array"
    Ember.typeOf(/abc/);                  // $ExpectType "regexp"
    Ember.typeOf(new Date());             // $ExpectType "date"
    Ember.typeOf(({} as any) as FileList);  // $ExpectType "filelist"
    Ember.typeOf(Ember.Object.extend());   // $ExpectType "class"
    Ember.typeOf(Ember.Object.create());   // $ExpectType "instance"
    Ember.typeOf(new Error('teamocil'));  // $ExpectType "error"
    Ember.typeOf((new Date()) as RegExp | Date); // "regexp" | "date"
})();

(function() { /* assign */
    Ember.assign({}, { a: 'b'});
    Ember.assign({}, { a: 'b'}).a; // $ExpectType string
    Ember.assign({ a: 6 }, { a: 'b'}).a; // $ExpectType string
    Ember.assign({ a: 6 }, {}).a; // $ExpectType number
    Ember.assign({ b: 6 }, {}).a; // $ExpectError
    Ember.assign({}, { b: 6 }, {}).b; // $ExpectType number
    Ember.assign({ a: 'hello' }, { b: 6 }, {}).a; // $ExpectType string
    Ember.assign({ a: 'hello' }, { b: 6 }, { a: true }).a; // $ExpectType boolean
    Ember.assign({ a: 'hello' }, '', { a: true }).a; // $ExpectError
    Ember.assign({ d: ['gobias industries'] }, { a: 'hello' }, { b: 6 }, { a: true }).d; // $ExpectType string[]
}());

(function() { /* merge */
    Ember.merge({}, { a: 'b'});
    Ember.merge({}, { a: 'b'}).a; // $ExpectType string
    Ember.merge({ a: 6 }, { a: 'b'}).a; // $ExpectType string
    Ember.merge({ a: 6 }, {}).a; // $ExpectType number
    Ember.merge({ b: 6 }, {}).a; // $ExpectError
}());
