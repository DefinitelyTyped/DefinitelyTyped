// Type definitions for nock v0.54.0
// Project: https://github.com/pgte/nock
// Definitions by: bonnici <https://github.com/bonnici>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Imported from: https://github.com/soywiz/typescript-node-definitions/nock.d.ts

declare module "nock" {
	export = nock;

	function nock (host: string, options?: nock.Options): nock.Scope;

	namespace nock {
		export function cleanAll(): void;

		export function disableNetConnect(): void;
		export function enableNetConnect(): void;
		export function enableNetConnect(regex: RegExp): void;
		export function enableNetConnect(domain: string): void;

		export var recorder: Recorder;
		type FilterFunction = (uri:string)=>boolean;
		type PathSpec = string|RegExp|FilterFunction;

		export interface Scope {
			get(path: PathSpec, data?: string): Scope;

			post(path: PathSpec, data?: string): Scope;
			post(path: PathSpec, data?: Object): Scope;
			post(path: PathSpec, regex?: RegExp): Scope;

			patch(path: PathSpec, data?: string): Scope;
			patch(path: PathSpec, data?: Object): Scope;
			patch(path: PathSpec, regex?: RegExp): Scope;

			put(path: PathSpec, data?: string): Scope;
			put(path: PathSpec, data?: Object): Scope;
			put(path: PathSpec, regex?: RegExp): Scope;

			head(path: PathSpec): Scope;

			delete(path: PathSpec, data?: string): Scope;
			delete(path: PathSpec, data?: Object): Scope;
			delete(path: PathSpec, regex?: RegExp): Scope;

			merge(path: PathSpec, data?: string): Scope;
			merge(path: PathSpec, data?: Object): Scope;
			merge(path: PathSpec, regex?: RegExp): Scope;

			query(params: any): Scope;
			query(acceptAnyParams: boolean): Scope;

			intercept(path: PathSpec, verb: string, body?: string, options?: any): Scope;
			intercept(path: PathSpec, verb: string, body?: Object, options?: any): Scope;
			intercept(path: PathSpec, verb: string, body?: RegExp, options?: any): Scope;

			reply(responseCode: number, body?: string, headers?: Object): Scope;
			reply(responseCode: number, body?: Object, headers?: Object): Scope;
			reply(responseCode: number, callback: (uri: string, body: string) => string, headers?: Object): Scope;
			replyWithFile(responseCode: number, fileName: string): Scope;
			replyWithError(errorMessage: string): Scope;

			defaultReplyHeaders(headers: Object): Scope;

			matchHeader(name: string, value: string): Scope;
			matchHeader(name: string, regex: RegExp): Scope;
			matchHeader(name: string, fn: (value: string) => boolean): Scope;

			filteringPath(regex: RegExp, replace: string): Scope;
			filteringPath(fn: (path: string) => string): Scope;
			filteringRequestBody(regex: RegExp, replace: string): Scope;
			filteringRequestBody(fn: (path: string) => string): Scope;

			persist(): Scope;
			log(out: () => void): Scope;

			delay(timeMs: number): Scope;
			delayConnection(timeMs: number): Scope;

			times(repeats: number): Scope;
			once(): Scope;
			twice(): Scope;
			thrice(): Scope;

			done(): void;
			isDone(): boolean;
			restore(): void;
			pendingMocks(): Object[];
		}

		export interface Recorder {
			rec(capture?: boolean): void;
			rec(options?: RecorderOptions): void;
			play(): any[];
		}

		export interface Options {
			allowUnmocked?: boolean;
		}

		export interface RecorderOptions {
			dont_print?: boolean;
			output_objects?: boolean;
			enable_reqheaders_recording?: boolean;
		}
	}
}
