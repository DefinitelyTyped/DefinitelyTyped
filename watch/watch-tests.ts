/// <reference path="watch.d.ts" />

import watch = require('watch');
import fs = require('fs');

var value: any;
var str: string;
var num: number;
var bool: boolean;

var mon: watch.Monitor;
var opts: watch.Options = {
	ignoreDotFiles: bool,
	filter: value
};

mon.on('foo', () => {

});

watch.watchTree(str, (f: any, curr: fs.Stats, prev: fs.Stats) => {

});
watch.watchTree(str, opts, (f: any, curr: fs.Stats, prev: fs.Stats) => {

});
watch.unwatchTree(str);
watch.createMonitor(str, (monitor: watch.Monitor) => {

});
watch.createMonitor(str, opts, (monitor: watch.Monitor) => {

});
