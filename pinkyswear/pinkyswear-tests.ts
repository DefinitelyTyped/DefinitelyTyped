/// <reference path="pinkyswear.d.ts" />

var promise: PinkySwear.Promise = pinkySwear();

promise.then(function(value) {
    console.log("Success with value " + value + "1");
}, function(value) {
    console.log("Failure with value " + value + "!");
});

promise(true, [42]);

// Promise rejected with multiple values

promise = pinkySwear();

promise.then(function(...values: any[]) {
    console.log("Success with value " + values.join(',') + "1");
}, function(...values: any[]) {
    console.log("Failure with value " + values.join(',') + "!");
});

promise(false, [6, 6, 6]);

var state: boolean = promise();

// A PinkySwear-powered timeout function that returns a promise:

function promiseTimeout(timeoutMs: number) {
    var prom = pinkySwear();
    setTimeout(function() {
        prom(true, []);
    }, timeoutMs);
    return prom;
}

console.log('Starting timeout now.');
promiseTimeout(5000).then(function() {
    console.log('5s have passed.');
});
