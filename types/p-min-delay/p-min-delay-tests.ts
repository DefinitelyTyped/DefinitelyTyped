import pMinDelay = require('p-min-delay');

// $ExpectType Promise<number>
pMinDelay(Promise.resolve(1), 1000);
// $ExpectType Promise<string>
pMinDelay(Promise.resolve("1"), 1000, { delayRejection: false });
