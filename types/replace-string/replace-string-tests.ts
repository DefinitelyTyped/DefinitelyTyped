import replaceString = require('replace-string');

const input = 'My friend has a 🐑. I want a 🐑 too!';

// $ExpectType string
replaceString(input, '🐑', '🦄');
// $ExpectType string
replaceString(input, '🐑', (needle, matchCount, input, matchIndex) => {
    // $ExpectType string
    needle;
    // $ExpectType number
    matchCount;
    // $ExpectType string
    input;
    // $ExpectType number
    matchIndex;

    return '🦄';
});
// $ExpectType string
replaceString(input, '🐑', '🦄', { fromIndex: 1 });
