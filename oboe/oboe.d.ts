// Type definitions for oboe v2.0.3
// Project: https://github.com/jimhigson/oboe.js
// Definitions by: Jared Klopper <https://github.com/optical>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module "oboe" {
	import stream = require('stream');

	function oboe(url: string): oboe.Oboe;
	function oboe(options: oboe.Options): oboe.Oboe;
	function oboe(stream: stream.Readable) : oboe.Oboe;

	module oboe {

		var drop: {};

		interface Oboe {
			done(callback: (result: any) => void): Oboe;

			fail(callback: (result: FailReason) => void): Oboe;

			node(pattern: string, callback: CallbackSignature): Oboe;

			on(event: string, pattern: string, callback: CallbackSignature): Oboe;
			on(eventPattern: string, callback: CallbackSignature): Oboe;

			path(pattern: string, callback: CallbackSignature): Oboe;
			path(listeners: any): Oboe;

			removeListener(eventPattern: string, callback: CallbackSignature): Oboe;
			removeListener(event: string, pattern: string, callback: CallbackSignature): Oboe;

			start(callback: (status: number, headers: Object) => void): Oboe;

			source: string;
		}

		interface CallbackSignature {
            (node: any, pathOrHeaders: any, ancestors: Object[]): any;
		}

		interface Options {
			url: string;
			method?: string;
			headers?: Object;
			body?: any;
			cached?: boolean;
			withCredentials?: boolean;
		}

		interface FailReason {
			thrown?: string;
			statusCode?: number;
			body?: string;
			jsonBody?: Object;
		}
	}

	export = oboe;
}

