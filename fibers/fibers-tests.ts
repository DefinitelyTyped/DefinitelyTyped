/// <reference path="fibers.d.ts" />

import fibers = require('fibers');

var fib: fibers.Fiber;
var x:any = null;
var func: () => void = null;

fib = fibers(func);
fib = fibers.current;
x = fibers.yield(x);
x = fib.run();
x = fib.run(x);
