// Type definitions for node-fetch v1.6
// Project: https://github.com/bitinn/node-fetch
// Definitions by: Torsten Werner <https://github.com/torstenwerner>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///<reference types="node" />

import { Agent } from "http";

export class Request extends Body {
	constructor(input: string | Request, init?: RequestInit);
	method: string;
	url: string;
	headers: Headers;
	context: RequestContext;
	referrer: string;
	redirect: RequestRedirect;

	//node-fetch extensions to the whatwg/fetch spec
	compress: boolean;
	agent?: Agent;
	counter: number;
	follow: number;
	hostname: string;
	protocol: string;
	port?: number;
	timeout: number;
	size: number;
}

interface RequestInit {
	//whatwg/fetch standard options
	method?: string;
	headers?: HeaderInit | { [index: string]: string };
	body?: BodyInit;
	redirect?: RequestRedirect;

	//node-fetch extensions
	timeout?: number; //=0 req/res timeout in ms, it resets on redirect. 0 to disable (OS limit applies)
	compress?: boolean; //=true support gzip/deflate content encoding. false to disable
	size?: number; //=0 maximum response body size in bytes. 0 to disable
	agent?: Agent; //=null http.Agent instance, allows custom proxy, certificate etc.
	follow?: number; //=20 maximum redirect count. 0 to not follow redirect

	//node-fetch does not support mode, cache or credentials options
}

type RequestContext =
	"audio" | "beacon" | "cspreport" | "download" | "embed" |
	"eventsource" | "favicon" | "fetch" | "font" | "form" | "frame" |
	"hyperlink" | "iframe" | "image" | "imageset" | "import" |
	"internal" | "location" | "manifest" | "object" | "ping" | "plugin" |
	"prefetch" | "script" | "serviceworker" | "sharedworker" |
	"subresource" | "style" | "track" | "video" | "worker" |
	"xmlhttprequest" | "xslt";
type RequestMode = "same-origin" | "no-cors" | "cors";
type RequestRedirect = "follow" | "error" | "manual";
type RequestCredentials = "omit" | "same-origin" | "include";
type RequestCache =
	"default" | "no-store" | "reload" | "no-cache" |
	"force-cache" | "only-if-cached";

export class Headers {
	append(name: string, value: string): void;
	delete(name: string): void;
	get(name: string): string;
	getAll(name: string): Array<string>;
	has(name: string): boolean;
	set(name: string, value: string): void;
	forEach(callback: (value: string, name: string) => void): void;
}

export class Body {
	bodyUsed: boolean;
	body: NodeJS.ReadableStream;
	json(): Promise<any>;
	json<T>(): Promise<T>;
	text(): Promise<string>;
	buffer(): Promise<Buffer>;
}

export class Response extends Body {
	constructor(body?: BodyInit, init?: ResponseInit);
	static error(): Response;
	static redirect(url: string, status: number): Response;
	type: ResponseType;
	url: string;
	status: number;
	ok: boolean;
	size: number;
	statusText: string;
	timeout: number;
	headers: Headers;
	clone(): Response;
}

type ResponseType = "basic" | "cors" | "default" | "error" | "opaque" | "opaqueredirect";

interface ResponseInit {
	status: number;
	statusText?: string;
	headers?: HeaderInit;
}

type HeaderInit = Headers | Array<string>;
type BodyInit = ArrayBuffer | ArrayBufferView | string | NodeJS.ReadableStream;
type RequestInfo = Request | string;

export default function fetch(url: string | Request, init?: RequestInit): Promise<Response>;
