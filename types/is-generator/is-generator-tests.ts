import isGenerator = require("is-generator");

// $ExpectType boolean
isGenerator({ next: () => {}, throw: () => {} });
// $ExpectType boolean
isGenerator.fn(function*() {
    yield "a";
});
