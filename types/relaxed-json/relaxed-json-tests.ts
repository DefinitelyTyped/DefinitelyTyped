import * as RJSON from 'relaxed-json';

const relaxedString = `
    {                               // comment
        foo: "bar",                 // identifier
        "arr": [1,2,3,],            // trailing comma in array
        "single-quoted": 'string',
        'trailing': 4,
    },
`;

RJSON.transform(relaxedString);

function revive(key: string, value: any): any {
    return typeof value === 'number'
        ? value * 2  // return value * 2 for numbers
        : value;     // return everything else unchanged
}

RJSON.parse(relaxedString, revive);

RJSON.parse(relaxedString, {
    reviver: revive,
    relaxed: true,
    warnings: true,
    tolerant: true,
    duplicate: true,
});

RJSON.parse(relaxedString, {
    tolerant: false,
    duplicate: true,
});

RJSON.parse(relaxedString, {
    reviver: revive,
});

RJSON.parse(relaxedString, {});

const parsed = RJSON.parse(relaxedString);
RJSON.stringify(parsed);

RJSON.stringify({
    foo: 'bar',
});
RJSON.stringify([1, 2, 3]);
RJSON.stringify(3);
RJSON.stringify('a');
