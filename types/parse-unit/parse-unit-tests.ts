import parse = require('parse-unit');
const [number, length] = parse('10px');
number === 50;
length === 'px';
