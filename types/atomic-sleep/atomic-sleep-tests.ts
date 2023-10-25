import sleep = require('atomic-sleep');

sleep(1000); // $ExpectType void

// @ts-expect-error not a number
sleep("1000");
