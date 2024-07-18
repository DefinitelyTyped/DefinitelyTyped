import throwEmpty = require("throw-empty");

const value = Math.random() < 0.5 ? Math.random() : null;
// $ExpectType number | null
value;
// $ExpectType number
throwEmpty(value);

// @ts-expect-error
throwEmpty();
