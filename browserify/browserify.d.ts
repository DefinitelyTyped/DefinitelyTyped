// Type definitions for Browserify
// Project: http://browserify.org/
// Definitions by: Andrew Gaspar <https://github.com/AndrewGaspar/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

interface BrowserifyObject {
	add(file: string);
	require(file: string, opts?: {
		expose: string;
	});
	bundle(opts?: {
		insertGlobals?: boolean;
		detectGlobals?: boolean;
		debug?: boolean;
		standalone?: string;
		insertGlobalVars? ;
	}, cb?: (err, src) => void): ReadableStream;

	external(file: string);
	ignore(file: string);
	transform(tr: string);
	transform(tr: Function);

	on(event: string, action: Function): void;
	on(event: "file", action: (file, id, parent) => void);
}

declare module "browserify" {
	function browserify(): BrowserifyObject;
	function browserify(files: string[]): BrowserifyObject;
	function browserify(opts: {
		entries?: string[];
		noParse?: string[];
	}): BrowserifyObject;
	
	export = browserify;
}