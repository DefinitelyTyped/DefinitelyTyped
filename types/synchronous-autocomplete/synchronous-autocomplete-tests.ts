import createAutocomplete = require('synchronous-autocomplete');
import buildIndex = require('synchronous-autocomplete/build');
import encode = require('synchronous-autocomplete/encode');
import decode = require('synchronous-autocomplete/decode');

// test type exports
type Tokens = createAutocomplete.Tokens;
type Scores = createAutocomplete.Scores;
type Weights = createAutocomplete.Weights;
type NrOfTokens = createAutocomplete.NrOfTokens;
type OriginalIds = createAutocomplete.OriginalIds<string>;
type TokenizerFn = createAutocomplete.TokenizerFn;
type AutocompleteFn = createAutocomplete.AutocompleteFn<string>;
type AutocompleteResult = createAutocomplete.AutocompleteResult<string>;
type Index = buildIndex.Index<string>;
type Item = buildIndex.Item<string>;

const items = [
    {
        id: 'apple',
        name: 'Juicy sour Apple.',
        weight: 3,
        foo: 'bar',
    },
    {
        id: 'banana',
        name: 'Sweet juicy Banana!',
        weight: 2,
        baz: 'quux',
    },
] as const;

// $ExpectType Index<"apple" | "banana">
const index = buildIndex(str => {
    str; // $ExpectType string
    return str.split(/\s+/g);
}, items);

// $ExpectType AutocompleteFn<"apple" | "banana">
const autocomplete = createAutocomplete(
    index.tokens,
    index.scores,
    index.weights,
    index.nrOfTokens,
    index.originalIds,
    str => {
        str; // $ExpectType string
        return str.split(/\s+/g);
    },
);

// tslint:disable-next-line: no-object-literal-type-assertion
const tokens = {
    juicy: [0, 1],
    sour: [0, 3],
    apple: [0],
    sweet: [1],
    banana: [1],
    pomegranate: [3],
} as const;
const weights = [3, 2, 5] as const;
const nrOfTokens = [3, 3, 2] as const;
const scores = {
    juicy: 2 / 3,
    sour: 2 / 3,
    apple: 1 / 3,
    sweet: 1 / 3,
    banana: 1 / 3,
    pomegranate: 1 / 3,
};
const originalIds = ['apple', 'banana', 'pome'] as const;

// $ExpectType AutocompleteFn<"apple" | "banana" | "pome">
const autocomplete2 = createAutocomplete(tokens, scores, weights, nrOfTokens, originalIds, str => {
    str; // $ExpectType string
    return str.split(/\s+/g);
});

const results = autocomplete('ban'); // $ExpectType AutocompleteResult<"apple" | "banana">[]
autocomplete('ban', 10); // $ExpectType AutocompleteResult<"apple" | "banana">[]
autocomplete('ban', 10, true); // $ExpectType AutocompleteResult<"apple" | "banana">[]
autocomplete('ban', 10, true, false); // $ExpectType AutocompleteResult<"apple" | "banana">[]
const results2 = autocomplete2('ban'); // $ExpectType AutocompleteResult<"apple" | "banana" | "pome">[]
autocomplete2('ban', 10); // $ExpectType AutocompleteResult<"apple" | "banana" | "pome">[]
autocomplete2('ban', 10, true); // $ExpectType AutocompleteResult<"apple" | "banana" | "pome">[]
autocomplete2('ban', 10, true, false); // $ExpectType AutocompleteResult<"apple" | "banana" | "pome">[]

autocomplete.byFragment('ban'); // $ExpectType number[]
autocomplete.byFragment('ban', true); // $ExpectType number[]
autocomplete.byFragment('ban', true, true); // $ExpectType number[]

autocomplete.internalId; // $ExpectType typeof internalId

results[0].id; // $ExpectType "apple" | "banana"
results[0].relevance; // $ExpectType number
results[0].score; // $ExpectType number
results[0].weight; // $ExpectType number
results[0][autocomplete.internalId]; // $ExpectType number
results2[0].id; // $ExpectType "apple" | "banana" | "pome"
results2[0].relevance; // $ExpectType number
results2[0].score; // $ExpectType number
results2[0].weight; // $ExpectType number
results2[0][autocomplete.internalId]; // $ExpectType number

const encoded = encode({ tokens, scores, weights, nrOfTokens, originalIds }); // $ExpectType Buffer
decode(encoded); // $ExpectType Index<string>
