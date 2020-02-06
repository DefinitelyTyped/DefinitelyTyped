import NanoTimer = require('nanotimer');

var timer = new NanoTimer();
timer.setInterval(() => {}, '', '1s');
timer.setTimeout(() => {}, [timer], '10s');
var runtimeSeconds = timer.time(() => {}, '', 'u');

timer.clearInterval();
timer.clearTimeout();
timer.hasTimeout();
