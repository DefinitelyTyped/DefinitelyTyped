import FuzzySet = require('fuzzyset');

// $ExpectType FuzzySet
const fuzzyset = FuzzySet(['coucou', 'foo', 'bar', 'toto']);

// $ExpectType [number, string][] | null
fuzzyset.get('foo');

// $ExpectType [number, string][] | "no match"
fuzzyset.get('some string', 'no match');

// $ExpectType [number, string][] | { value: string; }
fuzzyset.get('some string', {value: "not found"});

// $ExpectType [number, string][] | undefined
fuzzyset.get('some string', undefined, .5);

// $ExpectType false | undefined
fuzzyset.add('another string');

// $ExpectType number
fuzzyset.length();

// $ExpectType boolean
fuzzyset.isEmpty();

// $ExpectType string[]
fuzzyset.values();
