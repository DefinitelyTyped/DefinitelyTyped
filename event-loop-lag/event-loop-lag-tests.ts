/// <reference path="event-loop-lag.d.ts" />

import lag = require("event-loop-lag");

var fn: () => number = lag(1000);
var n: number = fn();
