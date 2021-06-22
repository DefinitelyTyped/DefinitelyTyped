import format = require('pg-format');

const testDate = new Date(Date.UTC(2012, 11, 14, 13, 6, 43, 152));
const testArray = [ 'abc', 1, true, null, testDate ];
const testIdentArray = [ 'abc', 'AbC', 1, true, testDate ];
const testObject = { a: 1, b: 2 };
const testNestedArray = [ [1, 2], [3, 4], [5, 6] ];

format.config({
    pattern: {
        ident: 'V',
        literal: 'C',
        string: 't'
    }
});
format.config();

format('some %s thing %s', 'long', 'here');
format('%L', testNestedArray);

format.withArray('some %s thing %s', [ 'long', 'here' ]);
format.withArray('many %s %s', ['things', testNestedArray]);

format.string(undefined);
format.string(null);
format.string(true);
format.string(false);
format.string(0);
format.string(15);
format.string(-15);
format.string(45.13);
format.string(-45.13);
format.string('something');
format.string(testArray);
format.string(testNestedArray);
format.string(testDate);
format.string(testObject);

format.ident(true);
format.ident(false);
format.ident(0);
format.ident(15);
format.ident(-15);
format.ident(45.13);
format.ident(-45.13);
format.ident('something');
format.ident(testIdentArray);
format.ident(testNestedArray);
format.ident(testDate);

format.literal(null);
format.literal(undefined);
format.literal(true);
format.literal(false);
format.literal(0);
format.literal(15);
format.literal(-15);
format.literal(45.13);
format.literal(-45.13);
format.literal('something');
format.literal(testArray);
format.literal(testNestedArray);
format.literal(testDate);
format.literal(testObject);
