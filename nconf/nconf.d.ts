// Type definitions for nconf
// Project: https://github.com/flatiron/nconf
// Definitions by: Jeff Goddard <https://github.com/jedigo>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// Imported from: https://github.com/soywiz/typescript-node-definitions/nconf.d.ts

declare module "nconf" {
	export var version: number;
	export var stores: any;
	export var sources: any[];

	export function clear(key: string, callback?: ICallbackFunction): any;
	export function get (key: string, callback?: ICallbackFunction): any;
	export function merge(key: string, value: any, callback?: ICallbackFunction): any;
	export function set (key: string, value: any, callback?: ICallbackFunction): any;
	export function reset(callback?: ICallbackFunction): any;

	export function load(callback?: ICallbackFunction): any;
	export function mergeSources(data: any): void;
	export function loadSources(): any;
	export function save(value: any, callback?: ICallbackFunction): any;

	export function add(name: string, options?: IOptions): Provider;
	export function argv(options?: IOptions): Provider;
	export function env(options?: IOptions): Provider;
	export function file(name: string, options?: IFileOptions): Provider;
	export function file(options: IFileOptions): Provider;
	export function use(name: string, options?: IOptions): Provider;
	export function defaults(options?: IOptions): Provider;
	export function init(options?: IOptions): void;
	export function overrides(options?: IOptions): Provider;
	export function remove(name: string): void;
	export function create(name: string, options: IOptions): IStore;

	export function key(...values: any[]): string;
	export function path(key: any): any[];
	export function loadFiles(files: any, callback?: ICallbackFunction): void;
	export function loadFilesSync(files: any, callback?: ICallbackFunction): void;

	export enum formats {
		json,
		ini
	}

	export interface IOptions {
		type?: string;
	}

	export interface IFileOptions extends IOptions {
		file?: string;
		dir?: string;
		search?: boolean;
		json_spacing?: number;
	}

	export interface ICallbackFunction {
		(err: Error): void;
	}

	export class Provider {
		constructor(options: IOptions);

		stores: any;
		sources: any[];

		clear(key: string, callback?: ICallbackFunction): any;
		get (key: string, callback?: ICallbackFunction): any;
		merge(key: string, value: any, callback?: ICallbackFunction): any;
		set (key: string, value: any, callback?: ICallbackFunction): any;
		reset(callback?: ICallbackFunction): any;

		load(callback?: ICallbackFunction): any;
		mergeSources(data: any): void;
		loadSources(): any;
		save(value: any, callback?: ICallbackFunction): any;

		add(name: string, options?: IOptions): Provider;
		argv(options?: IOptions): Provider;
		env(options?: IOptions): Provider;
		file(name: string, options?: IFileOptions): Provider;
		file(options: IFileOptions): Provider;
		use(name: string, options?: IOptions): Provider;

		defaults(options?: IOptions): Provider;
		init(options?: IOptions): void;
		overrides(options?: IOptions): Provider;
		remove(name: string): void;
		create(name: string, options: IOptions): IStore;
	}

	export interface IStore {
		type: string;
		get (key: string): any;
		set (key: string, value: any): boolean;
		clear(key: string): boolean;
		merge(key: string, value: any): boolean;
		reset(callback?: ICallbackFunction): boolean;
	}
}
