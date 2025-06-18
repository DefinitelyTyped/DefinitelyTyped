import sleep = require("atomic-sleep");

// $ExpectType void
sleep(1000);

// @ts-expect-error
sleep("1000");
