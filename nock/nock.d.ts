// Type definitions for nock v0.54.0
// Project: https://github.com/pgte/nock
// Definitions by: bonnici <https://github.com/bonnici>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// Imported from: https://github.com/soywiz/typescript-node-definitions/nock.d.ts

declare module "nock" {
	export = nock;

	function nock (host: string, options?: nock.Options): nock.Scope;

	module nock {
		export function cleanAll(): void;

		export function disableNetConnect(): void;
		export function enableNetConnect(): void;
		export function enableNetConnect(regex: RegExp): void;
		export function enableNetConnect(domain: string): void;

		export var recorder: Recorder;

		export interface Scope {
			get(path: string, data?: string): Scope;

			post(path: string, data?: string): Scope;
			post(path: string, data?: Object): Scope;
			post(path: string, regex?: RegExp): Scope;

			patch(path: string, data?: string): Scope;
			patch(path: string, data?: Object): Scope;
			patch(path: string, regex?: RegExp): Scope;

			put(path: string, data?: string): Scope;
			put(path: string, data?: Object): Scope;
			put(path: string, regex?: RegExp): Scope;

			head(path: string): Scope;

			delete(path: string, data?: string): Scope;
			delete(path: string, data?: Object): Scope;
			delete(path: string, regex?: RegExp): Scope;

			merge(path: string, data?: string): Scope;
			merge(path: string, data?: Object): Scope;
			merge(path: string, regex?: RegExp): Scope;

			intercept(path: string, verb: string, body?: string, options?: any): Scope;
			intercept(path: string, verb: string, body?: Object, options?: any): Scope;
			intercept(path: string, verb: string, body?: RegExp, options?: any): Scope;

			reply(responseCode: number, body?: string, headers?: Object): Scope;
			reply(responseCode: number, body?: Object, headers?: Object): Scope;
			reply(responseCode: number, callback: (uri: string, body: string) => string, headers?: Object): Scope;
			replyWithFile(responseCode: number, fileName: string): Scope;

			defaultReplyHeaders(headers: Object): Scope;
			matchHeader(name: string, value: string): Scope;

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
