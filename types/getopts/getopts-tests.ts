import getopts = require('getopts');

getopts([]); // $ExpectType ParsedOptions
getopts(['one', 'two']); // $ExpectType ParsedOptions
getopts(['one', 'two'], { alias: { h: 'help' } }); // $ExpectType ParsedOptions
getopts(['one', 'two'], { alias: { verbose: ['v', '--v'] } }); // $ExpectType ParsedOptions
getopts(['one', 'two'], { boolean: ['verbose'] }); // $ExpectType ParsedOptions
getopts(['one', 'two'], { default: { a: 1, b: 'c', d: true } }); // $ExpectType ParsedOptions
getopts(['one', 'two'], { unknown: (name) => name === 'name' }); // $ExpectType ParsedOptions

// $ExpectType ParsedOptions
getopts(
    ['one', 'two'],
    {
        alias: { h: 'help' },
        boolean: ['verbose'],
        default: { a: 1, b: 'c', d: true },
        unknown: (name) => name === 'name'
    }
);
