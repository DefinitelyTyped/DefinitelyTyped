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
		export function wrap<T>(interceptor: Interceptor<T>, config?: T): Client;

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

		export interface Interceptor<T> {
			(parent?: Client, config?: T): Client;
		}

		export interface Client {
			(path: string): ResponsePromise;
			(request: Request): ResponsePromise;

			skip(): Client;
			wrap<T>(interceptor: Interceptor<T>, config?: T): Client;
		}

		export interface Meta {
			client: Client;
			arguments: any;
		}
	}
}

declare module "rest/interceptor" {
	import when = require("when");
	import rest = require("rest");

	function interceptor<T, U>(config: interceptor.Config<T, U>): rest.Interceptor<T>;

	module interceptor {
		interface Config<T, U> {
			init?: (config: T) => U;
			request?: (request: rest.Request, config: U, meta: rest.Meta) => rest.Request | when.Promise<rest.Request>;
			response?: (response: rest.Response, config: U, meta: rest.Meta) => rest.Response | when.Promise<rest.Response>;
			success?: (response: rest.Response, config: U, meta: rest.Meta) => rest.Response | when.Promise<rest.Response>;
			error?: (response: rest.Response, config: U, meta: rest.Meta) => rest.Response | when.Promise<rest.Response>;
		}
	}

	export = interceptor;
}

declare module "rest/interceptor/defaultRequest" {
	import rest = require("rest");

	var defaultRequest: rest.Interceptor<any>;

	export = defaultRequest;
}

declare module "rest/interceptor/hateoas" {
	import rest = require("rest");

	var hateoas: rest.Interceptor<any>;

	export = hateoas;
}

declare module "rest/interceptor/location" {
	import rest = require("rest");

	var location: rest.Interceptor<any>;

	export = location;
}

declare module "rest/interceptor/mime" {
	import rest = require("rest");

	var mime: rest.Interceptor<any>;

	export = mime;
}

declare module "rest/interceptor/pathPrefix" {
	import rest = require("rest");

	var pathPrefix: rest.Interceptor<any>;

	export = pathPrefix;
}

declare module "rest/interceptor/basicAuth" {
	import rest = require("rest");

	var basicAuth: rest.Interceptor<any>;

	export = basicAuth;
}

declare module "rest/interceptor/oAuth" {
	import rest = require("rest");

	var oAuth: rest.Interceptor<any>;

	export = oAuth;
}

declare module "rest/interceptor/csrf" {
	import rest = require("rest");

	var csrf: rest.Interceptor<any>;

	export = csrf;
}

declare module "rest/interceptor/errorCode" {
	import rest = require("rest");

	var errorCode: rest.Interceptor<any>;

	export = errorCode;
}

declare module "rest/interceptor/retry" {
	import rest = require("rest");

	var retry: rest.Interceptor<any>;

	export = retry;
}

declare module "rest/interceptor/timeout" {
	import rest = require("rest");

	var timeout: rest.Interceptor<any>;

	export = timeout;
}

declare module "rest/interceptor/jsonp" {
	import rest = require("rest");

	var jsonp: rest.Interceptor<any>;

	export = jsonp;
}

declare module "rest/interceptor/ie/xdomain" {
	import rest = require("rest");

	var xdomain: rest.Interceptor<any>;

	export = xdomain;
}

declare module "rest/interceptor/ie/xhr" {
	import rest = require("rest");

	var xhr: rest.Interceptor<any>;

	export = xhr;
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
