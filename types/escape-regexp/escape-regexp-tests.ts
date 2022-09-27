import escapeRegExp = require('escape-regexp');

// $ExpectType string
escapeRegExp('aaa');

// @ts-expect-error
escapeRegExp();

// @ts-expect-error
escapeRegExp({});

// @ts-expect-error
escapeRegExp(1);

// @ts-expect-error
escapeRegExp([]);

// @ts-expect-error
escapeRegExp(null);

// @ts-expect-error
escapeRegExp(undefined);
