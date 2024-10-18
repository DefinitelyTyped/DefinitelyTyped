import exitHook = require("async-exit-hook");

// You can add async hooks by accepting a callback
exitHook(callback => {
    setTimeout(() => {
        console.log("Waited 1 second, exiting...");
        callback();
    }, 1000);
});

// You can hook uncaught errors with uncaughtExceptionHandler(), consequently adding
// async support to uncaught errors (normally uncaught errors result in a synchronous exit).
exitHook.uncaughtExceptionHandler(err => {
    console.error(err);
});

// You can add multiple uncaught error handlers
// Add the second parameter (callback) to indicate async hooks
exitHook.uncaughtExceptionHandler((err, callback) => {
    console.error(err);

    setTimeout(() => {
        console.log("Done:)");
        callback();
    }, 1000);
});

// Custom signal
// Arguments are `signal, exitCode` (SIGBREAK is already handled, this is an example)
exitHook.hookEvent("SIGBREAK", 21);
