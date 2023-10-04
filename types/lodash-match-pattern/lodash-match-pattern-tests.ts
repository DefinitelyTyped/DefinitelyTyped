import * as matchPattern from "lodash-match-pattern";

const lodash = matchPattern.getLodashModule(); // Use our lodash extensions (recommended)
const isString = lodash.isString;
// ^^^ setting isString explicitly to overcome a REPL issue with using '_'

// Trivial example
const testValue = { a: 1, b: "abc" };

const successResult = matchPattern(testValue, { a: 1, b: isString });
// returns null for a successful match.

const failResult = matchPattern(testValue, { a: isString, b: "abc" });
// returns "{a: 1} didn't match target {a: \'function isString(value) {...}\'}"

// Fancy test value
const fancyValue = {
    name: "Gale",
    email: "gale.force@winds.com",
    age: 23,
    friends: [
        { name: "Breeze", age: 14 },
        { name: "Cyclone", age: 29 },
        { name: "Gust", age: 22 },
    ],
};

// fancy match with partial match
const partialMatchResult = matchPattern(
    fancyValue,
    `{
  name: _.isString,
  email: _.isEmail,
  age: _.isBetween|20|30
  ...
}`,
);

// extra fancy match with filterPattern transform.
// This checks that "Gale" has two friends between the ages of 20 and 30
// and that one of them is named "Breeze".
const extraFancyResult = matchPattern(
    fancyValue,
    `{
  name: /^[A-Z]\w+$/,
  email: _.isEmail,
  age: _.isBetween|20|30,
  friends: {
    <-.filterPattern|'{age: _.isBetween|20|30 ...}': _.isSize|2,
    <=.get|name: [
      'Breeze',
      ...
    ]
  }
}`,
);
