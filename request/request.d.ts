// Type definitions for request
// Project: https://github.com/mikeal/request
// Definitions by: Carlos Ballesteros Velasco <https://github.com/soywiz>, bonnici <https://github.com/bonnici>, Bart van der Schoor <https://github.com/Bartvds>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// Imported from: https://github.com/soywiz/typescript-node-definitions/d.ts

/// <reference path="../node/node.d.ts" />
/// <reference path="../form-data/form-data.d.ts" />

declare module 'request' {
	import stream = require('stream');
	import http = require('http');
	import FormData = require('form-data');

	export = RequestAPI;

	function RequestAPI(uri: string, options?: RequestAPI.Options, callback?: (error: any, response: any, body: any) => void): RequestAPI.Request;
	function RequestAPI(uri: string, callback?: (error: any, response: any, body: any) => void): RequestAPI.Request;
	function RequestAPI(options: RequestAPI.Options, callback?: (error: any, response: any, body: any) => void): RequestAPI.Request;

	module RequestAPI {
		export function defaults(options: Options): typeof RequestAPI;

		export function request(uri: string, options?: Options, callback?: (error: any, response: any, body: any) => void): Request;
		export function request(uri: string, callback?: (error: any, response: any, body: any) => void): Request;
		export function request(options?: Options, callback?: (error: any, response: any, body: any) => void): Request;

		export function get(uri: string, options?: Options, callback?: (error: any, response: any, body: any) => void): Request;
		export function get(uri: string, callback?: (error: any, response: any, body: any) => void): Request;
		export function get(options: Options, callback?: (error: any, response: any, body: any) => void): Request;

		export function post(uri: string, options?: Options, callback?: (error: any, response: any, body: any) => void): Request;
		export function post(uri: string, callback?: (error: any, response: any, body: any) => void): Request;
		export function post(options: Options, callback?: (error: any, response: any, body: any) => void): Request;

		export function put(uri: string, options?: Options, callback?: (error: any, response: any, body: any) => void): Request;
		export function put(uri: string, callback?: (error: any, response: any, body: any) => void): Request;
		export function put(options: Options, callback?: (error: any, response: any, body: any) => void): Request;

		export function head(uri: string, options?: Options, callback?: (error: any, response: any, body: any) => void): Request;
		export function head(uri: string, callback?: (error: any, response: any, body: any) => void): Request;
		export function head(options: Options, callback?: (error: any, response: any, body: any) => void): Request;

		export function patch(uri: string, options?: Options, callback?: (error: any, response: any, body: any) => void): Request;
		export function patch(uri: string, callback?: (error: any, response: any, body: any) => void): Request;
		export function patch(options: Options, callback?: (error: any, response: any, body: any) => void): Request;

		export function del(uri: string, options?: Options, callback?: (error: any, response: any, body: any) => void): Request;
		export function del(uri: string, callback?: (error: any, response: any, body: any) => void): Request;
		export function del(options: Options, callback?: (error: any, response: any, body: any) => void): Request;

		export function forever(agentOptions: any, optionsArg: any): Request;
		export function jar(): CookieJar;
		export function cookie(str: string): Cookie;

		export var initParams: any;

		export interface Options {
			url?: string;
			uri?: string;
			callback?: (error: any, response: any, body: any) => void;
			jar?: any; // CookieJar
			form?: FormData;
			oauth?: OAuthOptions;
			aws?: AWSOptions;
			hawk ?: HawkOptions;
			qs?: Object;
			json?: any;
			multipart?: RequestPart[];
			agentOptions?: any;
			agentClass?: any;
			forever?: any;
			host?: string;
			port?: number;
			method?: string;
			headers?: Headers;
			body?: any;
			followRedirect?: boolean;
			followAllRedirects?: boolean;
			maxRedirects?: number;
			encoding?: string;
			pool?: any;
			timeout?: number;
			proxy?: any;
			strictSSL?: boolean;
		}

		export interface RequestPart {
			headers?: Headers;
			body: any;
		}

		export interface Request {
			getAgent(): http.Agent;
			//start(): void;
			//abort(): void;
			pipeDest(dest: any): void;
			setHeader(name: string, value: string, clobber?: boolean): Request;
			setHeaders(headers: Headers): Request;
			qs(q: Object, clobber?: boolean): Request;
			form(): FormData.FormData;
			form(form: any): Request;
			multipart(multipart: RequestPart[]): Request;
			json(val: any): Request;
			aws(opts: AWSOptions, now?: boolean): Request;
			oauth(oauth: OAuthOptions): Request;
			jar(jar: CookieJar): Request;

			pipe(dest: stream.Writable, opts?: any): stream.Writable;
			write(): void;
			end(chunk: string): void;
			end(chunk: NodeBuffer): void;
			pause(): void;
			resume(): void;
			abort(): void;
			destroy(): void;
			toJSON(): string;
		}

		export interface Headers {
			[key: string]: any;
		}

		export interface AuthOptions {
			user?: string;
			username?: string;
			pass?: string;
			password?: string;
			sendImmediately?: boolean;
		}

		export interface OAuthOptions {
			callback?: string;
			consumer_key?: string;
			consumer_secret?: string;
			token?: string;
			token_secret?: string;
			verifier?: string;
		}

		export interface HawkOptions {
			credentials: any;
		}

		export interface AWSOptions {
			secret: string;
			bucket?: string;
		}

		export interface CookieJar {
			add(cookie: Cookie): void;
			get(req: Request): Cookie;
			cookieString(req: Request): string;
		}

		export interface CookieValue {
			name: string;
			value: any;
			httpOnly: boolean;
		}

		export interface Cookie extends Array<CookieValue> {
			constructor(name: string, req: Request): void;
			str: string;
			expires: Date;
			path: string;
			toString(): string;
		}
	}
}
