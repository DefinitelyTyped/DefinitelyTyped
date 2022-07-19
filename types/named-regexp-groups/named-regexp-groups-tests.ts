import NamedRegExp = require("named-regexp-groups");

// $ExpectType NamedRegExp
new NamedRegExp('aaa', 'gi');

// $ExpectType NamedRegExp
new NamedRegExp(/aaa/gi);

// $ExpectType NamedRegExp
new NamedRegExp();

// @ts-expect-error
new NamedRegExp(1);

// @ts-expect-error
new NamedRegExp({});

// @ts-expect-error
new NamedRegExp([]);
