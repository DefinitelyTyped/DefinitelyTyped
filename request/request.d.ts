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
	import url = require('url');

	export = RequestAPI;

	function RequestAPI(uri: string, options?: RequestAPI.Options, callback?: (error: any, response: http.IncomingMessage, body: any) => void): RequestAPI.Request;
	function RequestAPI(uri: string, callback?: (error: any, response: http.IncomingMessage, body: any) => void): RequestAPI.Request;
	function RequestAPI(options: RequestAPI.Options, callback?: (error: any, response: http.IncomingMessage, body: any) => void): RequestAPI.Request;

	module RequestAPI {
		export function defaults(options: Options): typeof RequestAPI;

		export function request(uri: string, options?: Options, callback?: (error: any, response: http.IncomingMessage, body: any) => void): Request;
		export function request(uri: string, callback?: (error: any, response: http.IncomingMessage, body: any) => void): Request;
		export function request(options?: Options, callback?: (error: any, response: http.IncomingMessage, body: any) => void): Request;

		export function get(uri: string, options?: Options, callback?: (error: any, response: http.IncomingMessage, body: any) => void): Request;
		export function get(uri: string, callback?: (error: any, response: http.IncomingMessage, body: any) => void): Request;
		export function get(options: Options, callback?: (error: any, response: http.IncomingMessage, body: any) => void): Request;

		export function post(uri: string, options?: Options, callback?: (error: any, response: http.IncomingMessage, body: any) => void): Request;
		export function post(uri: string, callback?: (error: any, response: http.IncomingMessage, body: any) => void): Request;
		export function post(options: Options, callback?: (error: any, response: http.IncomingMessage, body: any) => void): Request;

		export function put(uri: string, options?: Options, callback?: (error: any, response: http.IncomingMessage, body: any) => void): Request;
		export function put(uri: string, callback?: (error: any, response: http.IncomingMessage, body: any) => void): Request;
		export function put(options: Options, callback?: (error: any, response: http.IncomingMessage, body: any) => void): Request;

		export function head(uri: string, options?: Options, callback?: (error: any, response: http.IncomingMessage, body: any) => void): Request;
		export function head(uri: string, callback?: (error: any, response: http.IncomingMessage, body: any) => void): Request;
		export function head(options: Options, callback?: (error: any, response: http.IncomingMessage, body: any) => void): Request;

		export function patch(uri: string, options?: Options, callback?: (error: any, response: http.IncomingMessage, body: any) => void): Request;
		export function patch(uri: string, callback?: (error: any, response: http.IncomingMessage, body: any) => void): Request;
		export function patch(options: Options, callback?: (error: any, response: http.IncomingMessage, body: any) => void): Request;

		export function del(uri: string, options?: Options, callback?: (error: any, response: http.IncomingMessage, body: any) => void): Request;
		export function del(uri: string, callback?: (error: any, response: http.IncomingMessage, body: any) => void): Request;
		export function del(options: Options, callback?: (error: any, response: http.IncomingMessage, body: any) => void): Request;

		export function forever(agentOptions: any, optionsArg: any): Request;
		export function jar(): CookieJar;
		export function cookie(str: string): Cookie;

		export var initParams: any;

    interface UriOptions {
      uri: string;
    }

    interface UrlOptions {
      url: string;
    }

		interface OptionalOptions {
			callback?: (error: any, response: http.IncomingMessage, body: any) => void;
			jar?: any; // CookieJar
			formData?: any; // Object
			form?: any; // Object or string
			auth?: AuthOptions;
			oauth?: OAuthOptions;
			aws?: AWSOptions;
			hawk ?: HawkOptions;
			qs?: any;
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
			followRedirect?: boolean|((response: http.IncomingMessage) => boolean);
			followAllRedirects?: boolean;
			maxRedirects?: number;
			encoding?: string;
			pool?: any;
			timeout?: number;
			proxy?: any;
			strictSSL?: boolean;
			gzip?: boolean;
		}

    export type Options = (UriOptions|UrlOptions)&OptionalOptions;

		export interface RequestPart {
			headers?: Headers;
			body: any;
		}

		export interface Request extends stream.Stream {
			readable: boolean;
			writable: boolean;

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
			auth(username: string, password: string, sendInmediately?: boolean, bearer?: string): Request;
			oauth(oauth: OAuthOptions): Request;
			jar(jar: CookieJar): Request;

			on(event: string, listener: Function): Request;

			write(buffer: Buffer, cb?: Function): boolean;
			write(str: string, cb?: Function): boolean;
			write(str: string, encoding: string, cb?: Function): boolean;
			write(str: string, encoding?: string, fd?: string): boolean;
			end(): void;
			end(chunk: Buffer, cb?: Function): void;
			end(chunk: string, cb?: Function): void;
			end(chunk: string, encoding: string, cb?: Function): void;
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
			bearer?: string;
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
			setCookie(cookie: Cookie, uri: string|url.Url, options?: any): void
			getCookieString(uri: string|url.Url): string
			getCookies(uri: string|url.Url): Cookie[]
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
