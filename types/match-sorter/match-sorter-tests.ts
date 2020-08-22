import matchSorter = require('match-sorter');

// # Basic Sample
{
    const list = ['hi', 'hey', 'hello', 'sup', 'yo'];
    matchSorter(list, 'h'); // ['hi', 'hey', 'hello']
    matchSorter(list, 'y'); // ['yo', 'hey']
    matchSorter(list, 'z'); // []
}

// # Advanced options

// ## keys: [string]
{
    const objList = [
        { name: 'Janice', color: 'Green' },
        { name: 'Fred', color: 'Orange' },
        { name: 'George', color: 'Blue' },
        { name: 'Jen', color: 'Red' }
    ];
    matchSorter(objList, 'g', { keys: ['name', 'color'] });
    // [{name: 'George', color: 'Blue'}, {name: 'Janice', color: 'Green'}, {name: 'Fred', color: 'Orange'}]

    matchSorter(objList, 're', { keys: ['color', 'name'] });
    // [{name: 'Jen', color: 'Red'}, {name: 'Janice', color: 'Green'}, {name: 'Fred', color: 'Orange'}, {name: 'George', color: 'Blue'}]
}

// ### Array of values
{
    const iceCreamYum = [
        { favoriteIceCream: ['mint', 'chocolate'] },
        { favoriteIceCream: ['candy cane', 'brownie'] },
        { favoriteIceCream: ['birthday cake', 'rocky road', 'strawberry'] }
    ];
    matchSorter(iceCreamYum, 'cc', { keys: ['favoriteIceCream'] });
    // [{favoriteIceCream: ['candy cane', 'brownie']}, {favoriteIceCream: ['mint', 'chocolate']}]
}

// ### Nested Keys
{
    const nestedObjList = [
        { name: { first: 'Janice' } },
        { name: { first: 'Fred' } },
        { name: { first: 'George' } },
        { name: { first: 'Jen' } }
    ];
    matchSorter(nestedObjList, 'j', { keys: ['name.first'] });
    // [{name: {first: 'Janice'}}, {name: {first: 'Jen'}}]
}
{
    const nestedObjList = [
        { name: [{ first: 'Janice' }] },
        { name: [{ first: 'Fred' }] },
        { name: [{ first: 'George' }] },
        { name: [{ first: 'Jen' }] }
    ];
    matchSorter(nestedObjList, 'j', { keys: ['name.0.first'] });
    // [{name: {first: 'Janice'}}, {name: {first: 'Jen'}}]
    // matchSorter(nestedObjList, 'j', {keys: ['name[0].first']}) does not work
}

// ### Property Callbacks
{
    const list = [
        { name: 'Janice' },
        { name: 'Fred' },
        { name: 'George' },
        { name: 'Jen' }
    ];
    matchSorter(list, 'j', { keys: [item => item.name] });
    // [{name: 'Janice'}, {name: 'Jen'}]
}
{
    const tea = [
        { tea: 'Earl Grey', alias: 'A' },
        { tea: 'Assam', alias: 'B' },
        { tea: 'Black', alias: 'C' }
    ];
    matchSorter(tea, 'e', { keys: [item => [item.tea, item.alias]] });
    // [{tea: 'Earl Grey', alias: 'A'}]
}
{
    const tea = [
        { tea: 'Earl Grey', alias: 'A' },
        { tea: 'Assam', alias: 'B' },
        { tea: 'Black', alias: 'C' }
    ];
    matchSorter(tea, 'e', {
        keys: [{
            key: item => [item.alias, item.tea],
            minRanking: matchSorter.rankings.EQUAL
        }]
    });
    // [{tea: 'Earl Grey', alias: 'A'}]
}

// ### Min and Max Ranking
{
    const tea = [
        { tea: 'Earl Grey', alias: 'A' },
        { tea: 'Assam', alias: 'B' },
        { tea: 'Black', alias: 'C' }
    ];
    matchSorter(tea, 'A', {
        keys: [
            'tea',
            { maxRanking: matchSorter.rankings.STARTS_WITH, key: 'alias' }
        ]
    });
    // without maxRanking, Earl Grey would come first because the alias "A" would be CASE_SENSITIVE_EQUAL
    // `tea` key comes before `alias` key, so Assam comes first even though both match as STARTS_WITH
    // [{tea: 'Assam', alias: 'B'}, {tea: 'Earl Grey', alias: 'A'},{tea: 'Black', alias: 'C'}]
}
{
    const tea = [
        { tea: 'Milk', alias: 'moo' },
        { tea: 'Oolong', alias: 'B' },
        { tea: 'Green', alias: 'C' }
    ];
    matchSorter(tea, 'oo', {
        keys: ['tea', { minRanking: matchSorter.rankings.EQUAL, key: 'alias' }]
    });
    // minRanking bumps Milk up to EQUAL from CONTAINS (alias)
    // Oolong matches as STARTS_WITH
    // Green is missing due to no match
    // [{tea: 'Milk', alias: 'moo'}, {tea: 'Oolong', alias: 'B'}]
}

// # key: methods
{
    const tea = [
        { tea: 'Milk', alias: 'moo' },
        { tea: 'Oolong', alias: 'B' },
        { tea: 'Green', alias: 'C' }
    ];
    matchSorter(tea, 'oo', {
        keys: [
            item => item.tea,
            { minRanking: matchSorter.rankings.EQUAL, key: item => item.alias }
        ]
    });
    // minRanking bumps Milk up to EQUAL from CONTAINS (alias)
    // Oolong matches as STARTS_WITH
    // Green is missing due to no match
    // [{tea: 'Milk', alias: 'moo'}, {tea: 'Oolong', alias: 'B'}]
}

// ## threshold: number
{
    const fruit = ['orange', 'apple', 'grape', 'banana'];
    matchSorter(fruit, 'ap', { threshold: matchSorter.rankings.NO_MATCH });
    // ['apple', 'grape', 'orange', 'banana'] (returns all items, just sorted by best match)

    const things = ['google', 'airbnb', 'apple', 'apply', 'app'];
    matchSorter(things, 'app', { threshold: matchSorter.rankings.EQUAL });
    // ['app'] (only items that are equal)

    const otherThings = [
        'fiji apple',
        'google',
        'app',
        'crabapple',
        'apple',
        'apply'
    ];
    matchSorter(otherThings, 'app', {
        threshold: matchSorter.rankings.WORD_STARTS_WITH
    });
    // ['app', 'apple', 'apply', 'fiji apple'] (everything that matches with "word starts with" or better)
}

// ## keepDiacritics: boolean
{
    const thingsWithDiacritics = [
        'jalapeño',
        'à la carte',
        'café',
        'papier-mâché',
        'à la mode'
    ];
    matchSorter(thingsWithDiacritics, 'aa');
    // ['jalapeño', 'à la carte', 'à la mode', 'papier-mâché']

    matchSorter(thingsWithDiacritics, 'aa', { keepDiacritics: true });
    // ['jalapeño', 'à la carte']

    matchSorter(thingsWithDiacritics, 'à', { keepDiacritics: true });
    // ['à la carte', 'à la mode']
}
