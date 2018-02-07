import jsonp = require('jsonp');

/**
 * Dummy response callback.
 */
const print = (err: Error | null, data: any) =>
    console.log(err !== null ? err.message : data);

/**
 * Tests jsonp request with default parameters.
 */
const cancel1 = jsonp('https://jsonplaceholder.typicode.com/posts/1', print);
cancel1();

/**
 * Tests parametrized jsonp request.
 */
const cancel2 = jsonp(
    'https://jsonplaceholder.typicode.com/posts/1',
    {
        param: 'cb',
        timeout: 40000,
        prefix: '_jsonp',
        name: 'func',
    },
    print,
);
cancel2();
