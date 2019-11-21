import whenDomReady = require('when-dom-ready');

whenDomReady(); // $ExpectType Promise<void>
whenDomReady(document); // $ExpectType Promise<void>
whenDomReady(() => {}, document); // $ExpectType Promise<void>

Promise.resolve('foo').then(whenDomReady.resume<string>(document)); // $ExpectType Promise<string>
