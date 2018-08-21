import FuzzySet = require('fuzzyset.js');

const fuzzyset: FuzzySet = FuzzySet(['coucou', 'foo', 'bar', 'toto']);
const results = fuzzyset.get('foo');

fuzzyset.length();

fuzzyset.isEmpty();

fuzzyset.values();
