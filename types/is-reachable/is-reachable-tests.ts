import isReachable = require('is-reachable');

isReachable('sindresorhus.com'); // $ExpectType Promise<boolean>
isReachable('google.com:80', { timeout: 10 }); // $ExpectType Promise<boolean>
