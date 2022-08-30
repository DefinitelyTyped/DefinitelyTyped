import sortArray = require('sort-array');

// examples taken from README.md
// ---

// API listed in readme, but does not contain code example
const exampleTimes = ['twilight', 'afternoon', 'morning', 'evening'];
// $ExpectType string[]
sortArray(exampleTimes, { nullRank: 1, undefinedRank: 1 });

// https://github.com/75lb/sort-array#sorting-an-array-of-primitives
const partsOfTheDay = ['twilight', 'afternoon', 'morning', 'evening'];
// $ExpectType string[]
sortArray(partsOfTheDay);
// $ExpectType string[]
sortArray(partsOfTheDay, { order: 'desc' });
// $ExpectType string[]
sortArray(partsOfTheDay, {
    order: 'time',
    customOrders: {
        time: ['morning', 'afternoon', 'evening', 'twilight'],
    },
});

// https://github.com/75lb/sort-array#sorting-an-array-of-objects
interface SortArrayOfObjects {
    name: string;
    openIssues: number;
    closedIssues: number;
}
const repositories: SortArrayOfObjects[] = [
    { name: '75lb/sort-array', openIssues: 0, closedIssues: 4 },
    { name: 'lwsjs/local-web-server', openIssues: 4, closedIssues: 80 },
    { name: 'jsdoc2md/jsdoc-api', openIssues: 3, closedIssues: 47 },
];
// $ExpectType SortArrayOfObjects[]
sortArray(repositories, {
    by: 'openIssues',
    order: 'desc',
});
// $ExpectType SortArrayOfObjects[]
sortArray(repositories, {
    by: 'total',
    order: 'desc',
    computed: {
        total: repository => repository.openIssues + repository.closedIssues,
    },
});

// https://github.com/75lb/sort-array#sort-by-deep-object-values
interface SortArrayOfDeepObjects {
    inner: {
        number: number;
    };
}
const data: SortArrayOfDeepObjects[] = [{ inner: { number: 2 } }, { inner: { number: 3 } }, { inner: { number: 1 } }];
// $ExpectType SortArrayOfDeepObjects[]
sortArray(data, {
    by: 'number',
    computed: {
        number: row => row.inner.number,
    },
});
