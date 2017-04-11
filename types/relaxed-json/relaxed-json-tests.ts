import RJSON from 'relaxed-json';

const relaxedString = `
    {                               // comment
        foo: "bar",                 // identifier
        "arr": [1,2,3,]             // trailing comma in array
        "single-quoted": 'string',
        'trailing': 4,
    },
`;

RJSON.transform(relaxedString);

RJSON.parse(relaxedString, (key, value) =>
    typeof value === 'number'
        ? value * 2 // return value * 2 for numbers
        : value     // return everything else unchanged
);

RJSON.parse(relaxedString, {
    relaxed: true,
    warnings: true,
    tolerant: true,
    duplicate: true,
});

RJSON.parse(relaxedString, {});

RJSON.parse(relaxedString);

RJSON.stringify({
    foo: 'bar',
});
RJSON.stringify([1, 2, 3]);
RJSON.stringify(3);
RJSON.stringify('a');
