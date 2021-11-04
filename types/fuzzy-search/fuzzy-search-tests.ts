import FuzzySearch = require('fuzzy-search');

const f = new FuzzySearch(['1', '2', '3']);

new FuzzySearch([{ a: 1 }, { a: 2 }, { a: 3 }], ['a']);

new FuzzySearch([{ a: 1 }, { a: 2 }, { a: 3 }], ['a'], {});

new FuzzySearch([{ a: 1 }, { a: 2 }, { a: 3 }], ['a'], { caseSensitive: true });

new FuzzySearch([{ a: 1 }, { a: 2 }, { a: 3 }], ['a'], { sort: true });

new FuzzySearch([{ a: 1 }, { a: 2 }, { a: 3 }], ['a'], { caseSensitive: true, sort: true });

let strArr: string[];

strArr = f.haystack;
// $ExpectType string[]
f.keys;
// $ExpectType Required<Options>
f.options;

strArr = new FuzzySearch(['1', '2', '3']).search();
strArr = new FuzzySearch(['1', '2', '3']).search('2');

// $ExpectType number
FuzzySearch.isMatch('1', '1', false);
