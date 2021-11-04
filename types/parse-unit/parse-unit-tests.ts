import parse = require('parse-unit');
const [number, length] = parse('10px');
number === 50;
length === 'px';

parse(10).length === 2;
parse(10)[0] === 10;
parse(10)[1] === '';
