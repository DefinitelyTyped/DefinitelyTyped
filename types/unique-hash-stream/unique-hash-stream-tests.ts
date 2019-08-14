import unique = require('unique-hash-stream');

const stream = unique();
unique(doc => {
    doc; // $ExpectType any
    return 'foo';
});
stream; // $ExpectType Transform
unique.Unique; // $ExpectType typeof Transform
unique.calculate; // $ExpectType (doc: any) => string

stream instanceof unique.Unique;
