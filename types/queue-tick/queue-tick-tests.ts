import nextTick = require("queue-tick");

// Test basic usage
nextTick(() => {
    // Called in next tick
});

// Test with inline function
nextTick(function callback() {
    // do something
});

// Test that it accepts a void-returning function
const myCallback = (): void => {
    // do something
};
nextTick(myCallback);
