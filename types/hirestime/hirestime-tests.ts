import hirestime = require("hirestime");

const getElapsed = hirestime();

let n: number = getElapsed();
n = getElapsed(hirestime.S);
n = getElapsed(hirestime.MS);
n = getElapsed(hirestime.NS);
