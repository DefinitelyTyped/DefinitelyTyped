import styleSearch = require('style-search');

const options: styleSearch.Options = {
    source: 'abc "var(--cba)"',
    target: ['a'],
    comments: 'check',
    functionArguments: 'check',
    functionNames: 'check',
    once: false,
    parentheticals: 'check',
    strings: 'check',
};

styleSearch(options, (match, count) => {
    const {
        endIndex, // $ExpectType number
        insideComment, // $ExpectType boolean
        insideFunctionArguments, // $ExpectType boolean
        insideString, // $ExpectType boolean
        startIndex, // $ExpectType number
        target, // $ExpectType string
    } = match;
    count; // $ExpectType number
});
