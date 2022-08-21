import autocomplete = require('db-stations-autocomplete');

// test type exports
type Res = autocomplete.Result;

const results = autocomplete('Hamburg'); // $ExpectType Result[]
autocomplete('Hamburg', 3); // $ExpectType Result[]
autocomplete('Hamburg', 3, true); // $ExpectType Result[]
autocomplete('Hamburg', 3, true, false); // $ExpectType Result[]

results[0].id; // $ExpectType string
results[0].relevance; // $ExpectType number
results[0].score; // $ExpectType number
results[0].weight; // $ExpectType number
