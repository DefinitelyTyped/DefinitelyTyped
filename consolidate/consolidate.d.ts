// Type definitions for consolidate
// Project: https://github.com/visionmedia/consolidate.js
// Definitions by: Carlos Ballesteros Velasco <https://github.com/soywiz>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// Imported from: https://github.com/soywiz/typescript-node-definitions/consolidate.d.ts

/// <reference path="../node/node.d.ts" />

declare module "consolidate" {
	export function clearCache(): void;
	export var jade: (path: String, options: any, fn: any) => void;
	export var dust: (path: String, options: any, fn: any) => void;
	export var swig: (path: String, options: any, fn: any) => void;
	export var liquor: (path: String, options: any, fn: any) => void;
	export var ejs: (path: String, options: any, fn: any) => void;
	export var eco: (path: String, options: any, fn: any) => void;
	export var jazz: (path: String, options: any, fn: any) => void;
	export var jqtpl: (path: String, options: any, fn: any) => void;
	export var haml: (path: String, options: any, fn: any) => void;
	export var whiskers: (path: String, options: any, fn: any) => void;
	//export var 'haml-coffee':Function;
	export var hogan: (path: String, options: any, fn: any) => void;
	export var handlebars: (path: String, options: any, fn: any) => void;
	export var underscore: (path: String, options: any, fn: any) => void;
	export var qejs: (path: String, options: any, fn: any) => void;
	export var walrus: (path: String, options: any, fn: any) => void;
	export var mustache: (path: String, options: any, fn: any) => void;
	export var dot: (path: String, options: any, fn: any) => void;
}
