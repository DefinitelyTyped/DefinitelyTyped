import sort = require('sort-array');

interface AlphabetItem {
    letter: string;
    position: number;
}

const alphabet: AlphabetItem[] = [
    { letter: 'b', position: 2 },
    { letter: 'a', position: 1 },
    { letter: 'c', position: 3 }
];

// $ExpectType AlphabetItem[]
sort(alphabet, 'letter');
sort(alphabet, ['letter']);
sort(alphabet, 'letter');

sort<AlphabetItem>(alphabet, 'letter', { letter: ['c', 'a'] });

// Allow to use string and number, because we cannot get type of the current property
sort<AlphabetItem>(alphabet, 'letter', { letter: ['c', 'a', 1] });

interface Input {
    inner: { number: number };
}

const input: Input[] = [
    { inner: { number: 5 } },
    { inner: { number: 3 } }
];

// Allow to use without types

// $ExpectType object[]
sort(input, 'inner.number');
sort(input, 'inner.number', { 'inner.number': [5, 3] });
