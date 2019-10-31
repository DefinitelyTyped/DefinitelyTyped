import hirestime = require("hirestime");

const getElapsed = hirestime();

let n: number = getElapsed();
n = getElapsed.s();
n = getElapsed.seconds();
n = getElapsed.ms();
n = getElapsed.milliseconds();
n = getElapsed.ns();
n = getElapsed.nanoseconds();
