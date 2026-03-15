import queueMicrotask = require("queue-microtask");

// $ExpectType void
queueMicrotask(() => {});

// @ts-expect-error - callback must be a function
queueMicrotask("not a function");
