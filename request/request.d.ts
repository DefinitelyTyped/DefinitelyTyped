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
	import fs = require('fs');

	namespace request {
		export interface RequestAPI {
			defaults(options: Options): RequestAPI;
			(uri: string, 
			options?: Options, 
			callback?: (error: any, response: http.IncomingMessage, body: any) => void)
				: Request;
			(uri: string, callback?: (error: any, response: http.IncomingMessage, body: any) => void): Request;
			(options?: Options, callback?: (error: any, response: http.IncomingMessage, body: any) => void): Request;
			
			get(uri: string, options?: Options, callback?: (error: any, response: http.IncomingMessage, body: any) => void): Request;
			get(uri: string, callback?: (error: any, response: http.IncomingMessage, body: any) => void): Request;
			get(options: Options, callback?: (error: any, response: http.IncomingMessage, body: any) => void): Request;
	
			post(uri: string, options?: Options, callback?: (error: any, response: http.IncomingMessage, body: any) => void): Request;
			post(uri: string, callback?: (error: any, response: http.IncomingMessage, body: any) => void): Request;
			post(options: Options, callback?: (error: any, response: http.IncomingMessage, body: any) => void): Request;
	
			put(uri: string, options?: Options, callback?: (error: any, response: http.IncomingMessage, body: any) => void): Request;
			put(uri: string, callback?: (error: any, response: http.IncomingMessage, body: any) => void): Request;
			put(options: Options, callback?: (error: any, response: http.IncomingMessage, body: any) => void): Request;
	
			head(uri: string, options?: Options, callback?: (error: any, response: http.IncomingMessage, body: any) => void): Request;
			head(uri: string, callback?: (error: any, response: http.IncomingMessage, body: any) => void): Request;
			head(options: Options, callback?: (error: any, response: http.IncomingMessage, body: any) => void): Request;
	
			patch(uri: string, options?: Options, callback?: (error: any, response: http.IncomingMessage, body: any) => void): Request;
			patch(uri: string, callback?: (error: any, response: http.IncomingMessage, body: any) => void): Request;
			patch(options: Options, callback?: (error: any, response: http.IncomingMessage, body: any) => void): Request;
	
			del(uri: string, options?: Options, callback?: (error: any, response: http.IncomingMessage, body: any) => void): Request;
			del(uri: string, callback?: (error: any, response: http.IncomingMessage, body: any) => void): Request;
			del(options: Options, callback?: (error: any, response: http.IncomingMessage, body: any) => void): Request;
	
			forever(agentOptions: any, optionsArg: any): Request;
			jar(): CookieJar;
			cookie(str: string): Cookie;
	
			initParams: any;
			debug: boolean;
		}
		
		export interface Options {
			url?: string;
			uri?: string;
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
			multipart?: RequestPart[] | Multipart;
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
			gzip?: boolean;
			preambleCRLF?: boolean;
			postambleCRLF?: boolean;
			key?: Buffer;
			cert?: Buffer;
			passphrase?: string;
			ca?: Buffer;
			har?: HttpArchiveRequest;
		}
		
		export interface HttpArchiveRequest {
			url?: string;
			method?: string;
			headers?: NameValuePair[];
			postData?: {
				mimeType?: string;
				params?: NameValuePair[];
			}
	  	}

		export interface NameValuePair {
			name: string;
			value: string;
		}
		
		export interface Multipart {
      		chunked?: boolean;
      		data?: {
           		'content-type'?: string,
          		body: string
        	}[];
		}
	
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
	var request: request.RequestAPI;
	export = request;
}
