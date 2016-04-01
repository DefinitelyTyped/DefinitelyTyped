///<reference path='./node-fibers.d.ts'/>
// node-fibers tests
// compile with --module=common

import Fiber = require("fibers");
import Future = require("fibers/future");

function sleep(ms) {
    var fiber = Fiber.current;
    setTimeout(function() {
        fiber.run();
    }, ms);
    Fiber.yield();
}

Fiber(function() {
    console.log('wait... ' + new Date);
    sleep(1000);
    console.log('ok... ' + new Date);
}).run();
console.log('back in main');

var inc = Fiber(function(start) {
    var total = start;
    while (true) {
        total += Fiber.yield(total);
    }
});

for (var ii = inc.run(1); ii <= 10; ii = inc.run(1)) {
    console.log(ii);
}


// Generator function. Returns a function which returns incrementing
// Fibonacci numbers with each call.
function Fibonacci() {
    // Create a new fiber which yields sequential Fibonacci numbers
    var fiber = Fiber(function() {
        Fiber.yield(0); // F(0) -> 0
        var prev = 0, curr = 1;
        while (true) {
            Fiber.yield(curr);
            var tmp = prev + curr;
            prev = curr;
            curr = tmp;
        }
    });
    // Return a bound handle to `run` on this fiber
    return fiber.run.bind(fiber);
}

// Initialize a new Fibonacci sequence and iterate up to 1597
var seq = Fibonacci();
for (var ii = seq(); ii <= 1597; ii = seq()) {
    console.log(ii);
}

var fn = Fiber(function() {
    console.log('async work here...');
    Fiber.yield();
    console.log('still working...');
    Fiber.yield();
    console.log('just a little bit more...');
    Fiber.yield();
    throw new Error('oh crap!');
});

try {
    while (true) {
        fn.run();
    }
} catch(e) {
    console.log('safely caught that error!');
    console.log(e.stack);
}
console.log('done!');



// This function returns a future which resolves after a timeout. This
// demonstrates manually resolving futures.
function sleep2(ms) {
    var future = new Future();
    setTimeout(function() {
        future.return();
    }, ms);
    return future;
}