import createTrie = require('autosuggest-trie');

interface Item {
    id: number;
    name: string;
    population: number;
}

const locations = [
    {
        id: 1,
        name: 'East Richmond 1234 VIC',
        population: 10000,
    },
    {
        id: 2,
        name: 'East Eagle 1235 VIC',
        population: 5000,
    },
    {
        id: 3,
        name: 'Richmond West 5678 VIC',
        population: 4000,
    },
    {
        id: 4,
        name: 'Cheltenham 3192 Melbourne VIC',
        population: 7000,
    },
    {
        id: 5,
        name: 'Richmond 6776 VIC',
        population: 3000,
    },
];

// @ts-expect-error
createTrie<Item>();

// @ts-expect-error
createTrie<Item>(locations);

// @ts-expect-error
createTrie<Item>(locations, 'invalidKey');

// @ts-expect-error
createTrie<Item>(locations, 'name', {splitRegex: '12'});

// @ts-expect-error
createTrie<Item>(locations, 'name', {comparator: 12});

// $ExpectType Trie<Item>
createTrie<Item>(locations, 'name', {});

// $ExpectType Trie<Item>
createTrie<Item>(locations, 'name', {splitRegex: /12/});

// $ExpectType Trie<Item>
createTrie<Item>(locations, 'name', {comparator: () => 1});

// $ExpectType Trie<Item>
createTrie<Item>(locations, 'name', {splitRegex: /12/, comparator: () => 1});

// $ExpectType Trie<Item>
const trie = createTrie<Item>(locations, 'name');

// @ts-expect-error
trie.getMatches();

// @ts-expect-error
trie.getMatches(123);

// @ts-expect-error
trie.getMatches('richmond', 123);

// @ts-expect-error
trie.getMatches('richmond', {splitRegex: 12});

// @ts-expect-error
trie.getMatches('richmond', {limit: '12'});

// $ExpectType Item[]
trie.getMatches('richmond');

// $ExpectType Item[]
trie.getMatches('richmond', {});

// $ExpectType Item[]
trie.getMatches('richmond', {limit: 2});

// $ExpectType Item[]
trie.getMatches('richmond', {splitRegex: /2/});

// $ExpectType Item[]
trie.getMatches('richmond', {limit: 2, splitRegex: /2/});
