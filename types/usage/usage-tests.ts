
/// <reference types="node" />

import usage = require('usage');

var pid = process.pid;
var options = { keepHistory: true };

usage.lookup(pid, function(err, result) {
  console.log("Usage infos", result);
});

usage.lookup(pid, options, function (err, result) {
  console.log("Usage infos with history", result);
});

usage.clearHistory(pid);
usage.clearHistory();

