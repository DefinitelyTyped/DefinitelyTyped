import NamedRegExp = require("named-regexp-groups");

// $ExpectType NamedRegExp
new NamedRegExp('aaa', 'gi');

// $ExpectType NamedRegExp
new NamedRegExp(/aaa/gi);

// $ExpectType NamedRegExp
new NamedRegExp();

// $ExpectError
new NamedRegExp(1);

// $ExpectError
new NamedRegExp({});

// $ExpectError
new NamedRegExp([]);
