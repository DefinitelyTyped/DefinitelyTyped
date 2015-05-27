// Type definitions for Glob
// Project: https://github.com/isaacs/node-glob
// Definitions by: vvakame <https://github.com/vvakame/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />
/// <reference path="../minimatch/minimatch.d.ts" />

declare module "glob" {

	import events = require("events");
	import minimatch = require("minimatch");

	function G(pattern:string, cb:(err:Error, matches:string[])=>void):void;

	function G(pattern:string, options:G.IOptions, cb:(err:Error, matches:string[])=>void):void;

	module G {
		function sync(pattern:string, options?:IOptions):string[];

		var Glob:IGlobStatic;

		interface IOptions extends minimatch.IOptions {
			cwd?: string;
			sync?: boolean;
			nomount?: boolean;
			matchBase?:any;
			noglobstar?:any;
			strict?: boolean;
			dot?:boolean;
			mark?:boolean;
			nounique?:boolean;
			nonull?:boolean;
			nosort?:boolean;
			nocase?:boolean;
			stat?:boolean;
			debug?:boolean;
			globDebug?:boolean;
			silent?:boolean;
		}

		interface IGlobStatic extends events.EventEmitter {
			new (pattern:string, cb?:(err:Error, matches:string[])=>void):IGlob;
			new (pattern:string, options:any, cb?:(err:Error, matches:string[])=>void):IGlob;
		}

		interface IGlob {
			EOF:any;
			paused:boolean;
			maxDepth:number;
			maxLength:number;
			cache:any;
			statCache:any;
			changedCwd:boolean;
			cwd: string;
			root: string;
			error: any;
			aborted: boolean;
			minimatch: minimatch.IMinimatch;
			matches:string[];

			log(...args:any[]):void;
			abort():void;
			pause():void;
			resume():void;
			emitMatch(m:any):void;
		}
	}

export = G;
}
