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

const input =
    'some@@[7febcd0b3806fbc48c01d7cea4ed1219]@@🦄##[7febcd0b3806fbc48c01d7cea4ed1219]## random text';
Subsume.parse(input, '7febcd0b3806fbc48c01d7cea4ed1219'); // $ExpectType ParseResult

const input2 =
    'some@@[7febcd0b3806fbc48c01d7cea4ed1219]@@🦄##[7febcd0b3806fbc48c01d7cea4ed1219]## ' +
    'random@@[7febcd0b3806fbc48c01d7cea4ed1218]@@🦄##[7febcd0b3806fbc48c01d7cea4ed1218]## ' +
    'text@@[7febcd0b3806fbc48c01d7cea4ed1217]@@🦄##[7febcd0b3806fbc48c01d7cea4ed1217]##';
Subsume.parseAll(input2); // $ExpectType ParseResults
Subsume.parseAll(input2, ['7febcd0b3806fbc48c01d7cea4ed1219']); // $ExpectType ParseResults
