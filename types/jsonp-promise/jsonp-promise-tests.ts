import jsonp = require("jsonp-promise");

/**
 * Dummy function to test returned promise
 */
// eslint-disable-next-line @definitelytyped/no-unnecessary-generics
const wait = async <T>(_promise: Promise<T>) => {};

/**
 * Dummy function to test the type of generic parameter `R` for return
 */
// eslint-disable-next-line @definitelytyped/no-unnecessary-generics
const acceptObject = <T extends {} = {}>(arg: T) => {};

/**
 * Tests parametrized jsonp request.
 */
const { promise, cancel } = jsonp("https://jsonplaceholder.typicode.com/posts/1", {
    param: "cb",
    timeout: 40000,
    prefix: "_jsonp",
});
wait(promise);
// $ExpectType void
cancel();

/**
 * Tests optional `options` parameter
 */
jsonp("https://jsonplaceholder.typicode.com/posts/1");

/**
 * Tests the default type of generic parameter `R` for return
 */
jsonp("https://jsonplaceholder.typicode.com/posts/1", {
    param: "cb",
    timeout: 40000,
    prefix: "_jsonp",
})
    .promise
    .then((unknownResult) => {
        // @ts-expect-error
        acceptObject(unknownResult);
    });
