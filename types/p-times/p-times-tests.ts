import pTimes = require('p-times');

// $ExpectType Promise<string[]>
pTimes(5, i => `🦄-${i + 1}`);
// $ExpectType Promise<string[]>
pTimes(5, i => `🦄-${i + 1}`, { concurrency: 1 });
