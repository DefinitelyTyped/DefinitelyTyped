import delay = require('yoctodelay'); // delay is(ms: number) => Promise<void>

// $ExpectType Promise<void>
delay(4);
