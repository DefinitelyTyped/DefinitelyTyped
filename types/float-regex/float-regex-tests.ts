import regexp = require('float-regex');

const foo: RegExp = regexp;

const anchor = RegExp(`^${regexp.source}$`);
anchor.test('1.23e24'); // true
anchor.test('1.23e24.55'); // false

const freg = regexp.source;
const capture = RegExp(`\\b(${freg})\\b`, 'g');
const str = '1.2  555    beep boop 4.2.1.5 66.2e99  22.54e23 qrs2';
str.match(capture);
