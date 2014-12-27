// Type definitions for rest.js v1.2.0
// Project: https://github.com/cujojs/rest
// Definitions by: Wim Looman <https://github.com/Nemo157>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../when/when.d.ts" />

declare module "rest" {
	import when = require("when");

	export = rest;

	function rest(path: string): rest.ResponsePromise;
	function rest(request: rest.Request): rest.ResponsePromise;

	module rest {
		export function wrap(interceptor: Interceptor, config?: any): Client;

		export interface Request {
			method?: string;
			path?: string;
			params?: any;
			headers?: any;
			entity?: any;
		}

		export interface Status {
			code: number;
			text?: string;
		}

		export interface Headers {
			[index: string]: any // string or string[]
		}

		export interface Response {
			request: Request;
			raw: any;
			status: Status;
			headers: Headers;
			entity: any;
		}

		export interface ResponsePromise extends when.Promise<Response> {
			entity(): when.Promise<any>;
			status(): when.Promise<number>;
			headers(): when.Promise<Headers>;
			header(headerName: string): when.Promise<any>; // string or string[]
		}

		export interface Interceptor {
			(parent?: Client, config?: any): Client;
		}

		export interface Client {
			(path: string): ResponsePromise;
			(request: Request): ResponsePromise;

			skip(): Client;
			wrap(interceptor: Interceptor, config?: any): Client;
		}
	}
}

declare module "rest/interceptor/errorCode" {
	import rest = require("rest");

	var errorCode: rest.Interceptor;

	export = errorCode;
}

declare module "rest/interceptor/mime" {
	import rest = require("rest");

	var mime: rest.Interceptor;

	export = mime;
}

declare module "rest/mime/registry" {
	import when = require("when");

	export interface MIMEConverter {
		read(value: string): any; // any or when.Promise<any>;
		write(value: any): any; // string or when.Promise<string>;
	}

	export function lookup(mimeType: string): when.Promise<MIMEConverter>;

	export function register(mimeType: string, converter: MIMEConverter): void;
}
