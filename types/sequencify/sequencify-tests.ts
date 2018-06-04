/* Add tests for your definition file here */

/// <reference types="node" />

import sequencify = require('sequencify');

const items: sequencify.TaskMap = {
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

const names = ['d', 'b', 'c', 'a']; // The names of the items you want arranged, need not be all

const results: string[] = [];

sequencify(items, names, results);

console.log(results);
// ['a','b','c','d'];
