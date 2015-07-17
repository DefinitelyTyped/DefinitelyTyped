// Type definitions for json-refs by Jeremy Whitlock <https://github.com/whitlockjc>
// Definitions by: Jason 'Toolbox' Oettinger <https://bitbucket.org/toolbox>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path='../node/node.d.ts' />

declare module "json-refs" {
	import http = require('http');
	export function findRefs(json : any);
	export function isJsonReference(obj : any) : boolean;
	export function isRemotePointer(ptr : any) : boolean;
	export function pathFromPointer(ptr : string) : string[];
	export function pathToPointer(path : string[]) : string;
	export function resolveRefs(json : any, options : Options, done: (error : Error, document : any, metadata : MetaData) => void);
	
	interface FoundRefs {
		[index : string] : 
	}
	interface Options {
		depth: number;
		location: string;
		prepareRequest: (req : http.IncomingMessage) => void;
		processContent: (content : string) => void;
	}
	
	interface MetaData {//not exactly a perfect match but it'll work. Just lose the ability to reference as an object (which in most cases probably wouldn't be a great idea anyway considering you don't even know the parameters you'd be referencing. Array syntax it is!)
		[index: string] : MetaDataLet;
	}
	interface MetaDataLet {
		ref : string;
		err : Error;
		value? : any;	
	}
}
