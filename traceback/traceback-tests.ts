/// <reference path="traceback.d.ts" />
/// <reference path="../node/node.d.ts" />

function testTraceback() {
	var TracebackStaticClass: TracebackStatic = function () {
		return [{
			name: 'some',
			path: 'nice',
			file: 'good',
			line: 113,
			col: 32,
			pos: 43,
			fun: {'x-x': 'any'},
			method: 'like',
			this: { no: "thing"},
			type: 'goal',
			origin: ['bad'],
			is_top: true,
			is_eval: false,
			is_native: true,
			is_ctor: true
		}];
	};

	var traceback: Traceback[] = TracebackStaticClass();

	var TBReq: TracebackStatic = require('traceback');
	var traceback: Traceback[] = TBReq();
}
