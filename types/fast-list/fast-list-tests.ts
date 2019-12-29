import FastList = require('fast-list');

const thisArg = {foo: 'bar'};

const list = new FastList<string>();
list; // $ExpectType List<string>
FastList<number>(); // $ExpectType List<number>

list.length; // $ExpectType number
list.length = 1; // $ExpectError

list.push('foo');
list.pop(); // $ExpectType string | undefined
list.unshift('bar');
list.shift(); // $ExpectType string | undefined
list.drop();
list.item(2); // $ExpectType string | undefined

list.map(function(value, index, list) { // $ExpectType List<string>
    this; // $ExpectType List<string>
    value; // $ExpectType string
    index; // $ExpectType number
    list; // $ExpectType List<string>
    return value;
});
list.map(function(value, index, list) { // $ExpectType List<number>
    this; // $ExpectType { foo: string; }
    value; // $ExpectType string
    index; // $ExpectType number
    list; // $ExpectType List<string>
    return 1;
}, thisArg);

list.reduce(function(prevVal, value, index, list) { // $ExpectType string
    this; // $ExpectType List<string>
    prevVal; // $ExpectType string
    value; // $ExpectType string
    index; // $ExpectType number
    list; // $ExpectType List<string>
    return prevVal;
});
list.reduce(function(prevVal, value, index, list) { // $ExpectType number
    this; // $ExpectType List<string>
    prevVal; // $ExpectType number
    value; // $ExpectType string
    index; // $ExpectType number
    list; // $ExpectType List<string>
    return prevVal;
}, 1);
list.reduce(function(prevVal, value, index, list) { // $ExpectType number
    this; // $ExpectType { foo: string; }
    prevVal; // $ExpectType number
    value; // $ExpectType string
    index; // $ExpectType number
    list; // $ExpectType List<string>
    return prevVal;
}, 1, thisArg);

list.forEach(function(value, index, list) {
    this; // $ExpectType List<string>
    value; // $ExpectType string
    index; // $ExpectType number
    list; // $ExpectType List<string>
});
list.forEach(function(value, index, list) {
    this; // $ExpectType { foo: string; }
    value; // $ExpectType string
    index; // $ExpectType number
    list; // $ExpectType List<string>
}, thisArg);

list.filter(function(value, index, list) { // $ExpectType List<string>
    this; // $ExpectType List<string>
    value; // $ExpectType string
    index; // $ExpectType number
    list; // $ExpectType List<string>
    return true;
});
list.filter(function(value, index, list) { // $ExpectType List<string>
    this; // $ExpectType { foo: string; }
    value; // $ExpectType string
    index; // $ExpectType number
    list; // $ExpectType List<string>
    return true;
}, thisArg);

list.slice(); // $ExpectType string[]
list.slice(1); // $ExpectType string[]
list.slice(1, -2); // $ExpectType string[]
