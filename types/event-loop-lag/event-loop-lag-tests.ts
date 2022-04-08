
import lag = require("event-loop-lag");

var fn: () => number = lag(1000);
var n: number = fn();
