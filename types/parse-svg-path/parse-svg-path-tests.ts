import parse = require('parse-svg-path');
const parsed = parse('M 10 10 L 100 100'); // $ExpectType Array
parsed.forEach(command => {
    const type = command[0]; // $ExpectType string
    const arg = command[1]; // $ExpectType number
});
