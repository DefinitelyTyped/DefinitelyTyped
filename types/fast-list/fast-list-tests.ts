import FastList = require("fast-list");

const thisArg = { foo: "bar" };

const list = new FastList<string>();
list; // $ExpectType List<string>
FastList<number>(); // $ExpectType List<number>

list.length; // $ExpectType number
// @ts-expect-error
list.length = 1;

list.push("foo");
list.pop(); // $ExpectType string | undefined
list.unshift("bar");
list.shift(); // $ExpectType string | undefined
list.drop();
list.item(2); // $ExpectType string | undefined

// $ExpectType List<string>
list.map(function(value, index, list) {
    this; // $ExpectType List<string>
    value; // $ExpectType string
    index; // $ExpectType number
    list; // $ExpectType List<string>
    return value;
});
// $ExpectType List<number>
list.map(function(value, index, list) {
    this; // $ExpectType { foo: string; }
    value; // $ExpectType string
    index; // $ExpectType number
    list; // $ExpectType List<string>
    return 1;
}, thisArg);

// $ExpectType string
list.reduce(function(prevVal, value, index, list) {
    this; // $ExpectType List<string>
    prevVal; // $ExpectType string
    value; // $ExpectType string
    index; // $ExpectType number
    list; // $ExpectType List<string>
    return prevVal;
});
// $ExpectType number
list.reduce(function(prevVal, value, index, list) {
    this; // $ExpectType List<string>
    prevVal; // $ExpectType number
    value; // $ExpectType string
    index; // $ExpectType number
    list; // $ExpectType List<string>
    return prevVal;
}, 1);
// $ExpectType number
list.reduce(
    function(prevVal, value, index, list) {
        this; // $ExpectType { foo: string; }
        prevVal; // $ExpectType number
        value; // $ExpectType string
        index; // $ExpectType number
        list; // $ExpectType List<string>
        return prevVal;
    },
    1,
    thisArg,
);

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
