import resolveFrom = require("resolve-from");

// Much better testing in https://github.com/typed-typings/typed-resolve-from
if (typeof resolveFrom !== 'function') {
  throw new Error('resolveFrom is not a function');
}
