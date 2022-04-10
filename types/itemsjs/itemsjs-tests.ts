import itemsjs = require('itemsjs');

const myitems = [
    { name: 'foo', anumber: 123 },
    { name: 'bar', anumber: 456 },
    { name: 'abc', anumber: 789 },
];

// No config
itemsjs(myitems);
// Empty config
itemsjs(myitems, {});

// Invalid sort
// $ExpectError
itemsjs(myitems, { sortings: { foo: {} } });

const items = itemsjs(myitems, {
    sortings: {
        foo: {
            field: 'name',
            order: 'asc',
        },
        bar: {
            field: 'anumber',
            order: 'desc',
        },
    },
    aggregations: {
        anAggregation: {
            title: 'A Number',
            conjunction: false,
        },
    },
});

items.search({ query: 'abc' });

items.search({ query: 'abc', sort: 'foo' });

items.search({ query: 'abc', sort: 'bar' });

// Sort 'baz' was never defined
// $ExpectError
items.search({ query: 'abc', sort: 'baz' });

items.search({
    query: 'abc',
    sort: {
        field: 'anumber',
        order: 'desc',
    },
});

items.search({
    query: 'abc',
    filters: {}, // No filters provided
});

// Aggregation 'bar' was never defined
items.search({
    query: 'abc',
    // $ExpectError
    filters: { bar: [] },
});

items.search({
    query: 'abc',
    filters: { anAggregation: ['abc'] },
});

// Aggregation 'bar' was never defined
// $ExpectError
items.aggregation({ name: 'bar' });

items.aggregation({ name: 'anAggregation' });

itemsjs<typeof myitems[number]>([]).reindex(myitems);

const myItemsIds = myitems.map((v, i) => ({ id: i, ...v }));

const itemsIds = itemsjs(myItemsIds);

// ID 'abc' is invalid
// $ExpectError
itemsIds.similar('abc', { field: 'name' });

// Missing options & missing field key
itemsIds.similar(0); // $ExpectError
itemsIds.similar(0, {}); // $ExpectError

itemsIds.similar(0, { field: 'name' });
