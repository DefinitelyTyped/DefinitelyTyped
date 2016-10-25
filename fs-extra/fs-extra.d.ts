// Type definitions for fs-extra
// Project: https://github.com/jprichardson/node-fs-extra
// Definitions by: midknight41 <https://github.com/midknight41>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Imported from: https://github.com/soywiz/typescript-node-definitions/fs-extra.d.ts

///<reference path="../node/node.d.ts"/>

declare module "fs-extra" {
	export * from "fs";

	export function copy(src: string, dest: string, callback?: (err: Error) => void): void;
	export function copy(src: string, dest: string, filter: CopyFilter, callback?: (err: Error) => void): void;
	export function copy(src: string, dest: string, options: CopyOptions, callback?: (err: Error) => void): void;

	export function copySync(src: string, dest: string): void;
	export function copySync(src: string, dest: string, filter: CopyFilter): void;
	export function copySync(src: string, dest: string, options: CopyOptions): void;

	export function move(src: string, dest: string, callback?: (err: Error) => void): void;
	export function move(src: string, dest: string, options: MoveOptions, callback?: (err: Error) => void): void;
	
	export function createFile(file: string, callback?: (err: Error) => void): void;
	export function createFileSync(file: string): void;

	export function mkdirs(dir: string, callback?: (err: Error) => void): void;
	export function mkdirp(dir: string, callback?: (err: Error) => void): void;
	export function mkdirs(dir: string, options?: MkdirOptions, callback?: (err: Error) => void): void;
	export function mkdirp(dir: string, options?: MkdirOptions, callback?: (err: Error) => void): void;
	export function mkdirsSync(dir: string, options?: MkdirOptions): void;
	export function mkdirpSync(dir: string, options?: MkdirOptions): void;

	export function outputFile(file: string, data: any, callback?: (err: Error) => void): void;
	export function outputFileSync(file: string, data: any): void;

	export function outputJson(file: string, data: any, callback?: (err: Error) => void): void;
	export function outputJSON(file: string, data: any, callback?: (err: Error) => void): void;
	export function outputJsonSync(file: string, data: any): void;
	export function outputJSONSync(file: string, data: any): void;

	export function readJson(file: string, callback: (err: Error, jsonObject: any) => void): void;
	export function readJson(file: string, options: OpenOptions, callback: (err: Error, jsonObject: any) => void): void;
	export function readJSON(file: string, callback: (err: Error, jsonObject: any) => void): void;
	export function readJSON(file: string, options: OpenOptions, callback: (err: Error, jsonObject: any) => void): void;

	export function readJsonSync(file: string, options?: OpenOptions): any;
	export function readJSONSync(file: string, options?: OpenOptions): any;

	export function remove(dir: string, callback?: (err: Error) => void): void;
	export function removeSync(dir: string): void;

	export function writeJson(file: string, object: any, callback?: (err: Error) => void): void;
	export function writeJson(file: string, object: any, options?: OpenOptions, callback?: (err: Error) => void): void;
	export function writeJSON(file: string, object: any, callback?: (err: Error) => void): void;
	export function writeJSON(file: string, object: any, options?: OpenOptions, callback?: (err: Error) => void): void;

	export function writeJsonSync(file: string, object: any, options?: OpenOptions): void;
	export function writeJSONSync(file: string, object: any, options?: OpenOptions): void;

	export function ensureDir(path: string, cb: (err: Error) => void): void;
	export function ensureDirSync(path: string): void;

	export function ensureFile(path: string, cb: (err: Error) => void): void;
	export function ensureFileSync(path: string): void;

	export function ensureLink(path: string, cb: (err: Error) => void): void;
	export function ensureLinkSync(path: string): void;

	export function ensureSymlink(path: string, cb: (err: Error) => void): void;
	export function ensureSymlinkSync(path: string): void;

	export function emptyDir(path: string, callback?: (err: Error) => void): void;
	export function emptyDirSync(path: string): boolean;
	
	export interface CopyFilterFunction {
		(src: string): boolean
	}

	export type CopyFilter = CopyFilterFunction | RegExp;

	export interface CopyOptions {
		clobber?: boolean
		preserveTimestamps?: boolean
        	dereference?: boolean
		filter?: CopyFilter
        	recursive?: boolean
	}
	
	export interface MoveOptions {
		clobber? : boolean;
		limit?: number;
	}

	export interface OpenOptions {
		encoding?: string;
		flag?: string;
	}

	export interface MkdirOptions {
		fs?: any;
		mode?: number;
	}
}
