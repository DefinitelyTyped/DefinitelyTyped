import Ember from 'ember';
import * as utils from '@ember/utils';
import { assertType } from "./lib/assert";

function testIsNoneType() {
    const maybeUndefined: string | undefined = 'not actually undefined';
    if (utils.isNone(maybeUndefined)) {
        return;
    }

    const anotherString = maybeUndefined + 'another string';
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

function testMakeArray() {
    assertType<any[]>(Ember.makeArray());
    assertType<any[]>(Ember.makeArray(null));
    assertType<any[]>(Ember.makeArray(undefined));
    assertType<string[]>(Ember.makeArray('lindsay'));
    assertType<number[]>(Ember.makeArray([1, 2, 42]));
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
