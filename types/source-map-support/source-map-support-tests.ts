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

const options: sms.Options = {
	emptyCacheBetweenOperations: false,
	handleUncaughtExceptions: false,
	retrieveFile,
	retrieveSourceMap,
	environment: 'node',
	hookRequire: false,
	overrideRetrieveSourceMap: false,
	overrideRetrieveFile: false
};

sms.install(options);

let stackFrame: any; // TODO: this should be a StackFrame, but it seems this would need to be defined elsewhere (in e.g. lib.d.ts)
stackFrame = sms.wrapCallSite(stackFrame);

let s: string | null;
s = sms.getErrorSource(new Error("foo"));

let p: sms.Position = {
	column: 0,
	line: 0,
	source: "foo"
};
p = sms.mapSourcePosition(p);

let u: sms.UrlAndMap;
u = retrieveSourceMap("foo");
