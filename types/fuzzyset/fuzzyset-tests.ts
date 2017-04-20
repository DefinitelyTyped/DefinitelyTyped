import FuzzySet = require('fuzzyset');

let fuzzyset: FuzzySet = FuzzySet(['coucou', 'foo', 'bar', 'toto']);
let results = fuzzyset.get('foo');

fuzzyset.length();

fuzzyset.isEmpty();

fuzzyset.values();
