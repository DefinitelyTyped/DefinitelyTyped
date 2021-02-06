import * as memwatch from "memwatch-next";

memwatch.on('leak', function (info) { });

var hd = new memwatch.HeapDiff();
var diff = hd.end();
