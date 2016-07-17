/**
 * Typescript definition tests for d3/d3-collection module
 * 
 * Note: These tests are intended to test the definitions only
 * in the sense of typing and call signature consistency. They
 * are not intended as functional tests.
 */

import * as d3Collection from 'd3-collection';

// Preparatory steps --------------------------------------------------------------

let keyValueObj = {
    a: 'test',
    b: 123,
    c: [true, true, false]
};

let keyValueObj2 = {
    a: 'test',
    b: 'same',
    c: 'type'
};

let stringArray: string[],
    anyArray: any[],
    stringKVArray: Array<{key: string, value: string}>,
    anyKVArray: Array<{key: string, value: any}>;


// test keys(...) signatures ------------------------------------------------------

stringArray = d3Collection.keys(keyValueObj);

stringArray = d3Collection.keys(document); // purely for the fun of it

// test values(...) signatures ------------------------------------------------------

anyArray = d3Collection.values(keyValueObj);
// stringArray = d3Collection.values(keyValueObj); // test fails, as values in keyValueObj are not all strings

stringArray = d3Collection.values(keyValueObj2);
stringArray = d3Collection.values<string>(keyValueObj2);

anyArray = d3Collection.values(document); // purely for the fun of it

// test entries(...) signatures ------------------------------------------------------

anyKVArray = d3Collection.entries(keyValueObj);
// stringKVArray = d3Collection.entres(keyValueObj); // test fails, as values in keyValueObj are not all strings

stringKVArray = d3Collection.entries(keyValueObj2);
stringKVArray = d3Collection.entries<string>(keyValueObj2);

anyKVArray = d3Collection.entries(document); // purely for the fun of it

// test D3Map signatures ------------------------------------------------------------

let map1: d3Collection.D3Map<any>;