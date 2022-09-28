import jsonp = require('jsonp-promise');

/**
 * Dummy function to test returned promise
 */
// tslint:disable-next-line no-unnecessary-generics
const wait = async <T>(_promise: Promise<T>) => {};

/**
 * Tests parametrized jsonp request.
 */
const { promise, cancel } = jsonp('https://jsonplaceholder.typicode.com/posts/1', {
    param: 'cb',
    timeout: 40000,
    prefix: '_jsonp',
});
wait(promise);
// $ExpectType void
cancel();

/**
 * Tests optional `options` parameter
 */
jsonp('https://jsonplaceholder.typicode.com/posts/1');
