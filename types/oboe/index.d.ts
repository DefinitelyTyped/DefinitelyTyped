// Type definitions for oboe v2.0.3
// Project: https://github.com/jimhigson/oboe.js
// Definitions by: Jared Klopper <https://github.com/optical>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare namespace oboe {
	interface OboeFunction extends Function {
		drop: Object;
		(url: string): Oboe;
		(options: Options): Oboe;
		(stream: NodeJS.ReadableStream): Oboe;
	}

	interface Oboe {
		done(callback: (result: any) => void): Oboe;

		fail(callback: (result: FailReason) => void): Oboe;

		node(pattern: string, callback: CallbackSignature): Oboe;
		node(patterns: PatternMap): Oboe;

		on(event: string, pattern: string, callback: CallbackSignature): Oboe;
		on(eventPattern: string, callback: CallbackSignature): Oboe;

		path(pattern: string, callback: CallbackSignature): Oboe;
		path(listeners: any): Oboe;

		removeListener(eventPattern: string, callback: CallbackSignature): Oboe;
		removeListener(event: string, pattern: string, callback: CallbackSignature): Oboe;

		start(callback: (status: number, headers: Object) => void): Oboe;

		abort():void;

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
		thrown?: Error;
		statusCode?: number;
		body?: string;
		jsonBody?: Object;
	}

	interface PatternMap {
	  [pattern: string]: CallbackSignature
	}
}

declare var oboe: oboe.OboeFunction;

export = oboe;
export as namespace oboe;
