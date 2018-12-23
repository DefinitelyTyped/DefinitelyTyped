import escapeRegExp = require('escape-regexp');

// $ExpectType string
escapeRegExp('aaa');

// $ExpectError
escapeRegExp();

// $ExpectError
escapeRegExp({});

// $ExpectError
escapeRegExp(1);

// $ExpectError
escapeRegExp([]);

// $ExpectError
escapeRegExp(null);

// $ExpectError
escapeRegExp(undefined);
