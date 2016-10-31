// Type definitions for node-fetch based on whatwg-fetch
// Project: https://github.com/bitinn/node-fetch
// Definitions by: Torsten Werner <https://github.com/torstenwerner>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module _fetch {

	class Request extends Body {
		constructor(input: string | Request, init?: RequestInit);
		method: string;
		url: string;
		headers: Headers;
		context: RequestContext;
		referrer: string;
		mode: RequestMode;
		redirect: RequestRedirect;
		credentials: RequestCredentials;
		cache: RequestCache;
	}

	interface RequestInit {
		method?: string;
		headers?: HeaderInit | { [index: string]: string };
		body?: BodyInit;
		mode?: RequestMode;
		redirect?: RequestRedirect;
		credentials?: RequestCredentials;
		cache?: RequestCache;
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

	class Headers {
		append(name: string, value: string): void;
		delete(name: string): void;
		get(name: string): string;
		getAll(name: string): Array<string>;
		has(name: string): boolean;
		set(name: string, value: string): void;
		forEach(callback: (value: string, name: string) => void): void;
	}

	class Body {
		bodyUsed: boolean;
		arrayBuffer(): Promise<ArrayBuffer>;
		blob(): Promise<Blob>;
		formData(): Promise<FormData>;
		json(): Promise<any>;
		json<T>(): Promise<T>;
		text(): Promise<string>;
	}
	class Response extends Body {
		constructor(body?: BodyInit, init?: ResponseInit);
		static error(): Response;
		static redirect(url: string, status: number): Response;
		type: ResponseType;
		url: string;
		status: number;
		ok: boolean;
		statusText: string;
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
	type BodyInit = ArrayBuffer | ArrayBufferView | Blob | FormData | string;
	type RequestInfo = Request | string;

	interface FetchStatic {
		(url: string | Request, init?: RequestInit): Promise<Response>;
	}

}

declare module "node-fetch" {
	var fetch: _fetch.FetchStatic;
	namespace fetch {}
	export = fetch;
}
