// Type definitions for fetch API
// Project: https://github.com/github/fetch
// Definitions by: Ryan Graham <https://github.com/ryan-codingintrigue>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../es6-promise/es6-promise.d.ts" />

declare class Request extends Body {
	constructor(input: string|Request, init?:RequestInit);
	method: string;
	url: string;
	headers: Headers;
	context: string|RequestContext;
	referrer: string;
	mode: string|RequestMode;
	credentials: string|RequestCredentials;
	cache: string|RequestCache;
}

interface RequestInit {
	method?: string;
	headers?: HeaderInit|{ [index: string]: string };
	body?: BodyInit;
	mode?: string|RequestMode;
	credentials?: string|RequestCredentials;
	cache?: string|RequestCache;
}

declare enum RequestContext {
	"audio", "beacon", "cspreport", "download", "embed", "eventsource", "favicon", "fetch",
	"font", "form", "frame", "hyperlink", "iframe", "image", "imageset", "import",
	"internal", "location", "manifest", "object", "ping", "plugin", "prefetch", "script",
	"serviceworker", "sharedworker", "subresource", "style", "track", "video", "worker",
	"xmlhttprequest", "xslt"
}
declare enum RequestMode { "same-origin", "no-cors", "cors" }
declare enum RequestCredentials { "omit", "same-origin", "include" }
declare enum RequestCache { "default", "no-store", "reload", "no-cache", "force-cache", "only-if-cached" }

declare class Headers {
	append(name: string, value: string): void;
	delete(name: string):void;
	get(name: string): string;
	getAll(name: string): Array<string>;
	has(name: string): boolean;
	set(name: string, value: string): void;
}

declare class Body {
	bodyUsed: boolean;
	arrayBuffer(): Promise<ArrayBuffer>;
	blob(): Promise<Blob>;
	formData(): Promise<FormData>;
	json(): Promise<any>;
	json<T>(): Promise<T>;
	text(): Promise<string>;
}
declare class Response extends Body {
	constructor(body?: BodyInit, init?: ResponseInit);
	error(): Response;
	redirect(url: string, status: number): Response;
	type: string|ResponseType;
	url: string;
	status: number;
	ok: boolean;
	statusText: string;
	headers: Headers;
	clone(): Response;
}

declare enum ResponseType { "basic", "cors", "default", "error", "opaque" }

interface ResponseInit {
	status: number;
	statusText?: string;
	headers?: HeaderInit;
}

declare type HeaderInit = Headers|Array<string>;
declare type BodyInit = Blob|FormData|string;
declare type RequestInfo = Request|string;

interface Window {
	fetch(url: string|Request, init?: RequestInit): Promise<Response>;
}
