import FuzzySet = require('fuzzyset');

// $ExpectType FuzzySet
const fuzzyset = FuzzySet(['coucou', 'foo', 'bar', 'toto']);

// $ExpectType [number, string][]
const results = fuzzyset.get('foo');

// $ExpectType number
fuzzyset.length();

// $ExpectType boolean
fuzzyset.isEmpty();

// $ExpectType string[]
fuzzyset.values();
