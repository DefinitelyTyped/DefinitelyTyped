import CappedArray = require('@emilbayes/capped-array');

const arr = new CappedArray<string>(2);

arr.push('foo');
arr.pop();
arr.unshift('foo');
arr.shift();
arr.forEach(el => {
    el; // $ExpectType string
});
arr.deleted; // $ExpectType number
arr.size; // $ExpectType number
