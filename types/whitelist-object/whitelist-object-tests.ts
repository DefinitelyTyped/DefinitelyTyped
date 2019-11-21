import whiteListObject = require('whitelist-object');

const myObject = {
    cool: 'guy',
    conor: 'hastings',
    wow: 'so cool',
    but: { is: 'he', no: "he isn't" },
};

// $ExpectType { [key: string]: any; }
whiteListObject(myObject, ['cool', 'but', 'is']);
// $ExpectType { [key: string]: any; }
whiteListObject(myObject, ['cool', 'but', 'is'], false);
// $ExpectType { [key: string]: any; }
whiteListObject(myObject, ['cool', 'but', 'is'], true);
