/**
 * Typescript definition tests for d3/d3-timer module
 *
 * Note: These tests are intended to test the definitions only
 * in the sense of typing and call signature consistency. They
 * are not intended as functional tests.
 */

import * as d3Timer from 'd3-timer';

// Test now definition
const now: number = d3Timer.now();

// Test timer and timerFlush definitions ------------

let t0: d3Timer.Timer = d3Timer.timer((elapsed: number) => { console.log(elapsed); });
let t1: d3Timer.Timer = d3Timer.timer((elapsed: number) => { console.log(elapsed); }, 150);
let t2: d3Timer.Timer = d3Timer.timer((elapsed: number) => { console.log(elapsed); }, 150, performance.now() || Date.now());

t0.restart((elapsed: number) => { console.log(elapsed); });
t0.restart((elapsed: number) => { console.log(elapsed); }, 150);
t0.restart((elapsed: number) => { console.log(elapsed); }, 150, performance.now() || Date.now());
t0.stop();

d3Timer.timerFlush();

t1.stop(); t2.stop();

// Test timeout Timer definitions  --------------------------------

t0 = d3Timer.timeout((elapsed: number) => { console.log(elapsed); });
t1 = d3Timer.timeout((elapsed: number) => { console.log(elapsed); }, 150);
t2 = d3Timer.timeout((elapsed: number) => { console.log(elapsed); }, 150, performance.now() || Date.now());

// Test interval Timer definitions --------------------------------

t0 = d3Timer.interval((elapsed: number) => { console.log(elapsed); });
t1 = d3Timer.interval((elapsed: number) => { console.log(elapsed); }, 150);
t2 = d3Timer.interval((elapsed: number) => { console.log(elapsed); }, 150, performance.now() || Date.now());
