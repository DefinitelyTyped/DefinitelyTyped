import * as exitHook from "./";

// you can add async hooks by accepting a callback
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
exitHook.hookEvent('SIGBREAK', 21);

// process event: `message` with a filter
// filter gets all arguments passed to *handler*: `process.on(message, *handler*)`
// Exits on process event `message` with msg `customShutdownMessage` only
exitHook.hookEvent('message', 0, msg => msg !== 'customShutdownMessage');

// All async hooks will work with uncaught errors when you have specified an uncaughtExceptionHandler
throw new Error('awesome');
 
//=> // Sync uncaughtExcpetion hooks called and retun
//=> '[Error: awesome]'
//=> // Sync hooks called and retun
//=> 'exiting'
//=> 'exiting 2'
//=> // Async uncaughtException hooks return
//=> 'Sent error to cloud'
//=> // Sync uncaughtException hooks return
//=> 'exiting 3'
