/* Add tests for your definition file here */

import * as sequencify from 'sequencify';

var items: sequencify.TaskMap = {
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

var names = ['d', 'b', 'c', 'a']; // The names of the items you want arranged, need not be all

var results: string[] = [];

sequencify(items, names, results);

console.log(results);
// ['a','b','c','d'];
