// Type definitions for vinyl
// Project: https://github.com/wearefractal/vinyl
// Definitions by: vvakame <https://github.com/vvakame/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module Vinyl {
	interface IOptions {
		cwd?:string;
		base?:string;
		path?:string;
		contents?:any; // Buffer or Stream
	}

	interface IFileStatic {
		new (file?:IOptions):IFile;
	}

	interface IFile {
		cwd:string;
		base:string;
		path:string;
		stat:any; // stat = fs stats object
		contents:any; // Buffer or Stream
		relative:string;

		isBuffer():boolean;
		isStream():boolean;
		isNull():boolean;
		isDirectory():boolean;
		clone():IFile;
		pipe<T extends NodeJS.ReadWriteStream>(stream:T, opts?:{ end?: boolean; }):T;
		inspect():string;
	}
}

declare module "vinyl" {
	var _:Vinyl.IFileStatic;
	export = _;
}
