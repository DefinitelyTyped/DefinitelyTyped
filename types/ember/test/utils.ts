import Ember from 'ember';
import { assertType } from './lib/assert';

function testTypeOf() {
    Ember.typeOf(); // $ExpectType "undefined"
    const str: string = Ember.typeOf({});
}

function testIsNoneType() {
    const maybeUndefined: string | undefined = 'not actually undefined';
    if (Ember.isNone(maybeUndefined)) {
        return;
    }

    const anotherString = maybeUndefined + 'another string';
    Ember.isNone(); // $ExpectType boolean
}

function testIsBlank() {
    Ember.isBlank(); // $ExpectType boolean
    Ember.isBlank(''); // $ExpectType boolean
    // @ts-expect-error
    Ember.isBlank('', '');
}

function testIsEmpty() {
    Ember.isEmpty(); // $ExpectType boolean
    Ember.isEmpty(''); // $ExpectType boolean
    // @ts-expect-error
    Ember.isEmpty('', '');
}

function testIsPresent() {
    Ember.isPresent(); // $ExpectType boolean
    Ember.isPresent(''); // $ExpectType boolean
    // @ts-expect-error
    Ember.isPresent('', '');
}

function testIsNone() {
    Ember.isNone(); // $ExpectType boolean
    Ember.isNone(''); // $ExpectType boolean
    // @ts-expect-error
    Ember.isNone('', '');
}

function testAssign() {
    assertType<{ first: string; middle: string; last: string }>(
        Ember.assign({ first: 'Tom' }, { middle: 'M' }, { last: 'Dale' }),
    );
}

function testOnError() {
    Ember.onerror = error => {
        fetch('/report-error', {
            method: 'POST',
            body: JSON.stringify({
                stack: error.stack,
                otherInformation: 'whatever app state you want to provide',
            })
        });
    };
}

function testDeprecateFunc() {
    function newMethod(first: string, second: number): string {
        return '';
    }

    const oldMethod = Ember.deprecateFunc(
        'Please use the new method',
        { id: 'deprecated.id', until: '6.0' },
        newMethod,
    );
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
        value: 'Charles',
    });

    // define a simple property
    Ember.defineProperty(contact, 'lastName', undefined, 'Jolley');

    // define a computed property
    Ember.defineProperty(
        contact,
        'fullName',
        Ember.computed('firstName', 'lastName', function () {
            return `${this.firstName} ${this.lastName}`;
        }),
    );
}

// For use in IIFE below.
declare const fileList: FileList;

(() => {
    /** typeOf */
    Ember.typeOf(); // $ExpectType "undefined"
    Ember.typeOf(null); // $ExpectType "null"
    Ember.typeOf(undefined); // $ExpectType "undefined"
    Ember.typeOf('michael'); // $ExpectType "string"
    // tslint:disable-next-line:no-construct
    Ember.typeOf(new String('michael')); // $ExpectType "string"
    Ember.typeOf(101); // $ExpectType "number"
    // tslint:disable-next-line:no-construct
    Ember.typeOf(new Number(101)); // $ExpectType "number"
    Ember.typeOf(true); // $ExpectType "boolean"
    // tslint:disable-next-line:no-construct
    Ember.typeOf(new Boolean(true)); // $ExpectType "boolean"
    Ember.typeOf(() => 4); // $ExpectType "function"
    Ember.typeOf([1, 2, 90]); // $ExpectType "array"
    Ember.typeOf(/abc/); // $ExpectType "regexp"
    Ember.typeOf(new Date()); // $ExpectType "date"
    Ember.typeOf(fileList); // $ExpectType "filelist"
    Ember.typeOf(Ember.Object.extend()); // $ExpectType "class"
    Ember.typeOf(Ember.Object.create()); // $ExpectType "instance"
    Ember.typeOf(new Error('teamocil')); // $ExpectType "error"
    Ember.typeOf(new Date() as RegExp | Date); // "regexp" | "date"
    Ember.typeOf({ randomObject: true }); // $ExpectType "object"
})();

(() => {
    /* assign */
    Ember.assign({}, { a: 'b' });
    Ember.assign({}, { a: 'b' }).a; // $ExpectType string
    Ember.assign({ a: 6 }, { a: 'b' }).a; // $ExpectType string
    Ember.assign({ a: 6 }, {}).a; // $ExpectType number
    // @ts-expect-error
    Ember.assign({ b: 6 }, {}).a;
    Ember.assign({}, { b: 6 }, {}).b; // $ExpectType number
    Ember.assign({ a: 'hello' }, { b: 6 }, {}).a; // $ExpectType string
    Ember.assign({ a: 'hello' }, { b: 6 }, { a: true }).a; // $ExpectType boolean
    // @ts-expect-error
    Ember.assign({ a: 'hello' }, '', { a: true }).a;
    Ember.assign({ d: ['gobias industries'] }, { a: 'hello' }, { b: 6 }, { a: true }).d; // $ExpectType string[]
})();
