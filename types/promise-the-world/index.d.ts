// Type definitions for promise-the-world 1.0
// Project: https://github.com/bergos/promise-the-world
// Definitions by: tpluscode <https://github.com/tpluscode>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import defer = require('./defer');
import delay = require('./delay');
import mutex = require('./mutex');
import queue = require('./queue');

declare const promiseTheWorld: {
    defer: typeof defer,
    delay: typeof delay,
    mutex: typeof mutex,
    queue: typeof queue
};

export = promiseTheWorld;
