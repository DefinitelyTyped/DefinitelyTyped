import isArguments = require("is-arguments");

((value: unknown) => {
    if (isArguments(value)) {
        value; // $ExpectType IArguments
    }
});
