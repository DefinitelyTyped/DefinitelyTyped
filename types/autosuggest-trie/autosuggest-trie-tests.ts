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

// $ExpectError
createTrie<Item>();

// $ExpectError
createTrie<Item>(locations);

// $ExpectError
createTrie<Item>(locations, 'invalidKey');

// $ExpectError
createTrie<Item>(locations, 'name', {splitRegex: '12'});

// $ExpectError
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

// $ExpectError
trie.getMatches();

// $ExpectError
trie.getMatches(123);

// $ExpectError
trie.getMatches('richmond', 123);

// $ExpectError
trie.getMatches('richmond', {splitRegex: 12});

// $ExpectError
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
