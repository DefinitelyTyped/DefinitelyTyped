import stringifyAttributes = require('stringify-attributes');

// $ExpectType string
stringifyAttributes({
    unicorn: '🦄',
});
// $ExpectType string
stringifyAttributes({
    rainbow: true,
});
// $ExpectType string
stringifyAttributes({
    number: 1,
});
// $ExpectType string
stringifyAttributes({
    multiple: ['a', 1],
});
