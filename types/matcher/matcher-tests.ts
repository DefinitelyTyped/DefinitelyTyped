import matcher = require('matcher');

// $ExpectType string[]
matcher(['foo', 'bar', 'moo'], ['*oo', '!foo']);
matcher(['foo', 'bar', 'moo'], ['!*oo']);
matcher(['foo', 'bar', 'moo'], ['!*oo'], { caseSensitive: true });

// $ExpectType boolean
matcher.isMatch('unicorn', 'uni*');
matcher.isMatch('UNICORN', 'UNI*', { caseSensitive: true });
