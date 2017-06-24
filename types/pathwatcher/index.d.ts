// Type definitions for pathwatcher
// Project: https://github.com/atom/node-pathwatcher
// Definitions by: vvakame <https://github.com/vvakame/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { EventEmitter } from "events";
import * as Q from "q";

export as namespace PathWatcher;

export interface IFileStatic {
	new (path:string, symlink?:boolean):IFile;
}

export interface IFile {
	realPath:string;
	path:string;
	symlink:boolean;
	cachedContents:string;
	digest:string;

	handleEventSubscriptions():void;
	setPath(path:string):void;
	getPath():string;
	getRealPathSync():string;
	getBaseName():string;
	write(text:string):void;
	readSync(flushCache:boolean):string;
	read(flushCache?:boolean): Promise<string>;
	// exists():boolean;
	existsSync():boolean;
	setDigest(contents:string):void;
	getDigest():string;
	writeFileWithPrivilegeEscalationSync (filePath:string, text:string):void;
	handleNativeChangeEvent(eventType:string, eventPath:string):void;
	detectResurrectionAfterDelay():void;
	detectResurrection():void;
	subscribeToNativeChangeEvents():void;
	unsubscribeFromNativeChangeEvents():void;
}

export interface IDirectoryStatic {
	new (path:string, symlink?:boolean):IDirectory;
}

export interface IDirectory {
	realPath:string;
	path:string;
	symlink:boolean;

	getBaseName():string;
	getPath():void;
	getRealPathSync():string;
	contains(pathToCheck:string):boolean;
	relativize(fullPath:string):string;
	getEntriesSync():any[]; // return type are {File | Directory}[]
	getEntries(callback:Function):void;
	subscribeToNativeChangeEvents():void;
	unsubscribeFromNativeChangeEvents():void;
	isPathPrefixOf(prefix:string, fullPath:string):boolean;
}

export interface IHandleWatcher extends EventEmitter {
	onEvent(event:any, filePath:any, oldFilePath:any):any;
	start():void;
	closeIfNoListener():void;
	close():void;
}

export interface IPathWatcher {
	isWatchingParent:boolean;
	path:any;
	handleWatcher:IHandleWatcher;

	close():void;
}

export function watch(path:string, callback:Function):IPathWatcher;

export function closeAllWatchers():void;

export function getWatchedPaths():string[];

export var File: IFileStatic;
export var Directory: IDirectoryStatic;

