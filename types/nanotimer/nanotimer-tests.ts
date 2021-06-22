import NanoTimer = require('nanotimer');

const timer = new NanoTimer();
timer.setInterval(() => {}, '', '1s');
timer.setTimeout(() => {}, [timer], '10s');
const runtimeSeconds = timer.time(() => {}, '', 'u');

timer.clearInterval();
timer.clearTimeout();
timer.hasTimeout();
