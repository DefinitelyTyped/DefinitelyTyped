import parse = require('parse-unit');
const [number, length] = parse('10px');
number === 50;
length === 'px';

parse(10).length === 2; // $ExpectType boolean
parse(10)[0] === 10; // $ExpectType boolean
parse(10)[1] === ''; // $ExpectType boolean
Number.isNaN(parse()[0]); // $ExpectType boolean
