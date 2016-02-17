/// <reference path="source-map-support.d.ts" />

import sms = require('source-map-support');

sms.install();

function retrieveFile(path: string): string {
	return "foo";
}

function retrieveSourceMap(source: string): sms.UrlAndMap {
	return {
		url: "http://foo",
		map: "foo"
	};
}

var options: sms.Options = {
	emptyCacheBetweenOperations: false,
	handleUncaughtExceptions: false,
	retrieveFile: retrieveFile,
	retrieveSourceMap: retrieveSourceMap
};

sms.install(options);

var stackFrame: any; // TODO: this should be a StackFrame, but it seems this would need to be defined elsewhere (in e.g. lib.d.ts)
stackFrame = sms.wrapCallSite(stackFrame);

var s: string;
s = sms.getErrorSource(new Error("foo"));

var p: sms.Position = {
	column: 0,
	line: 0,
	source: "foo"
};
p = sms.mapSourcePosition(p);

var u: sms.UrlAndMap;
u = retrieveSourceMap("foo");
