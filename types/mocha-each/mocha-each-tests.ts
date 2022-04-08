/*
 * These tests are adapted from the use examples for the package from
 * its host repository, [github.com/ryym/mocha-each#readme].
 *
 * Adapting involved ensuring each set of test was wrapped in its own
 * `describe` context; adding mock functions for use in the examples;
 * and adding type declarations for most elements.
 */

import forEach = require('mocha-each');

declare function assert(...args: any[]): void;
declare function assertEquals(a: any, b: any): void;

// Basic

function add(a: any, b: any) {
    return parseInt(a, 10) + parseInt(b, 10);
}

describe('add()', () => {
    forEach([
        [1, 1, 2],
        [2, -2, 0],
        [140, 48, 188]
    ])
    .it('adds %d and %d then returns %d', (left: any, right: any, expected: any) => {
        assert(add(left, right) === expected);
    });

    context('with invalid arguments', () => {
        forEach([
            [1, 'foo'],
            [null, 10],
            [{}, []]
        ])
        .it('adds %j and %j then returns NaN', (left: any, right: any) => {
            const value = add(left, right);
            assert(isNaN(value));
        });
    });
});

// At describe level
function subtract(a: any, b: any) {
  return parseInt(a, 10) - parseInt(b, 10);
}

forEach([
  [1, 1, 0],
  [2, -2, 4],
  [140, 48, 92]
])
.describe('subtract() with %d and %d', (left: number, right: number, expected: number) => {
  let actual: number;
  before(() => {
    actual = subtract(left, right);
  });

  it('subtracts correctly and returns ' + expected, () => {
    assertEquals(actual, expected);
  });
});

// Asynchronous code
declare function fetchData(a: any): Promise<any>;

describe('Asynchronous Code Example', () => {
    forEach([
        [0, 1],
        [2, 3]
    ])
    .it('does async operation', (arg: any, expected: any, done: (error: any) => any) => {
    fetchData(arg)
        .then((actual: any) => assert(actual === expected))
        .then(done);
    });
});

// Exclusive or inclusive tests
describe('Exclusive/Inclusive Test Example', () => {
    forEach([
        0, 1, 2, 3
    ])
    .it.only('works fine', (number: number) => {
        assert(number);
    });

    forEach([
        'foo', 'bar', 'baz'
    ])
    .it.skip('also works fine', (word: string) => {
        assert(word);
    });
});

// .timeout example
declare function use(...args: any[]): void;

describe('.timeout Example', () => {
    forEach([
        // ...
    ])
    .it('is a slow test', function(p0: null, p1: null, p2: null/* , done */) {
        this.timeout(3000); // Configure timeout.
        use(p0, p1, p2);
        // ...
    });
});

// Using a BDD-like name
import withThese = require('mocha-each');

declare function findByName(name: string): { id: number };

describe('findByName()', () => {
  withThese([
    [1, 'foo'],
    [2, 'bar'],
    [3, 'baz']
  ])
  .it('should find data by name', (id, name) => {
    const data = findByName(name);
    assertEquals(data.id, id);
  });
});
