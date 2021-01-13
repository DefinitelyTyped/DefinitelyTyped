import jslock = require("js-lock");

// $ExpectType void
jslock.Lock.all<number>([new jslock.Lock()], () => 2, 1000);

const lock = new jslock.Lock();

// $ExpectType boolean
lock.isLocked;

// $ExpectType Promise<string>
lock.lock<string>(() => 'test', 1000);

// $ExpectType TimeoutError
new jslock.TimeoutError('test');
