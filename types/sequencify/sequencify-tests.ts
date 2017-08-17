/* Add tests for your definition file here */

/// <reference types="node" />

import * as sequencify from 'sequencify';

let items: sequencify.TaskMap = {
    a: {
        name: 'a',
        dep: []
        // other properties as needed
    },
    b: {
        name: 'b',
        dep: ['a']
    },
    c: {
        name: 'c',
        dep: ['a']
    },
    d: {
        name: 'd',
        dep: ['c']
    },
};

let names = ['d', 'b', 'c', 'a']; // The names of the items you want arranged, need not be all

let results: string[] = [];

sequencify(items, names, results);

console.log(results);
// ['a','b','c','d'];
