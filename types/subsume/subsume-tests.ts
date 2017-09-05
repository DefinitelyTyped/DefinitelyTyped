import Subsume = require('subsume');

const subsume = new Subsume();
new Subsume('foo');

subsume.id; // $ExpectType string
subsume.prefix; // $ExpectType string
subsume.postfix; // $ExpectType string
subsume.regex; // $ExpectType RegExp

const text = subsume.compose('🦄');
text; // $ExpectType string

const output = `some${text} random text`;

const res = subsume.parse(output);
res; // $ExpectType ParseResult
res.data; // $ExpectType string | undefined
res.rest; // $ExpectType string

const input = 'some@@[7febcd0b3806fbc48c01d7cea4ed1219]@@🦄##[7febcd0b3806fbc48c01d7cea4ed1219]## random text';
Subsume.parse(text, '7febcd0b3806fbc48c01d7cea4ed1219'); // $ExpectType ParseResult
