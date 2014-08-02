// Type definitions for nock
// Project: https://github.com/pgte/nock
// Definitions by: bonnici <https://github.com/bonnici>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// Imported from: https://github.com/soywiz/typescript-node-definitions/nock.d.ts

declare module "nock" {
	export = nock;

	function nock (host: string, options?: nock.Options): nock.Scope;

	module nock {
		export function cleanAll(): void;
		export var recorder: Recorder;

		export interface Scope {
			get(path: string, data?: string): Scope;
			post(path: string, data?: string): Scope;
			put(path: string, data?: string): Scope;
			head(path: string): Scope;
			delete(path: string, data?: string): Scope;
			intercept(path: string, verb: string, body?: string, options?: any): Scope;

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

			done(): void;
			isDone(): boolean;
			restore(): void;
		}

		export interface Recorder {
			rec(capture?: boolean): void;
			play(): string[];
		}

		export interface Options {
			allowUnmocked?: boolean;
		}
	}
}
