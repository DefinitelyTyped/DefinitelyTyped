import isExtglob = require("is-extglob");

// $ExpectType boolean
isExtglob("!(foo)");

// $ExpectType boolean
isExtglob("?(foo)");

// @ts-expect-error
isExtglob(1);

// @ts-expect-error
isExtglob(null);
