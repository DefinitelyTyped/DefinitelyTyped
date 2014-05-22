// Type definitions for vinyl-fs
// Project: https://github.com/wearefractal/vinyl-fs
// Definitions by: vvakame <https://github.com/vvakame/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />
/// <reference path="../vinyl/vinyl.d.ts" />

declare module NodeJS {
	interface WritableStream {
		write(buffer: any/* Vinyl.IFile */, cb?: Function): boolean;
	}
}

declare module "vinyl-fs" {
	import _events = require("events");

	function src(globs:string, opt?:{read?:boolean;buffer?:boolean;}):NodeJS.ReadWriteStream;

	function src(globs:string[], opt?:{read?:boolean;buffer?:boolean;}):NodeJS.ReadWriteStream;

	function watch(globs:string, cb?:(outEvt:{type:any;path:any;old:any;})=>void):_events.EventEmitter;

	function watch(globs:string[], cb?:(outEvt:{type:any;path:any;old:any;})=>void):_events.EventEmitter;

	function watch(globs:string, opt?:{interval?:number;debounceDelay?:number;cwd?:string;maxListeners?:Function;}, cb?:(outEvt:{type:any;path:any;old:any;})=>void):_events.EventEmitter;

	function watch(globs:string[], opt?:{interval?:number;debounceDelay?:number;cwd?:string;maxListeners?:Function;}, cb?:(outEvt:{type:any;path:any;old:any;})=>void):_events.EventEmitter;

	function dest(folder:string, opt?:{cwd?:string; mode?:any/* number or string */;}):NodeJS.ReadWriteStream;
}
