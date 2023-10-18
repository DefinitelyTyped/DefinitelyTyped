import defer = require("./defer");
import delay = require("./delay");
import mutex = require("./mutex");
import queue = require("./queue");

declare const promiseTheWorld: {
    defer: typeof defer;
    delay: typeof delay;
    mutex: typeof mutex;
    queue: typeof queue;
};

export = promiseTheWorld;
