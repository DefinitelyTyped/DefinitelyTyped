export class FetchRequest {
    constructor(method: string, url: string | URL, options?: Options);
    perform(): Promise<FetchResponse>;
    addHeader(key: string, value: string): void;
    sameHostname(): boolean;
    get fetchOptions(): RequestInit & { method: string; headers: HeadersInit };
    get headers(): HeadersInit;
    get csrfToken(): string | undefined;
    get contentType(): string | undefined;
    get accept(): string;
    get body(): BodyInit | Record<string, unknown> | null | undefined;
    get query(): string;
    get url(): string;
    get responseKind(): ResponseKind;
    get signal(): AbortSignal | null | undefined;
    get redirect(): RequestRedirect;
    get credentials(): RequestCredentials;
    get keepalive(): boolean;
    get additionalHeaders(): HeadersInit;
    get formattedBody(): string;
}

export type ResponseKind = "html" | "turbo-stream" | "json" | "script";

export interface Options {
    body?: BodyInit | Record<string, unknown> | null;
    contentType?: string;
    headers?: HeadersInit;
    credentials?: RequestCredentials;
    query?: Record<string, unknown> | FormData | URLSearchParams;
    responseKind?: ResponseKind;
    signal?: AbortSignal | null;
    redirect?: RequestRedirect;
    keepalive?: boolean;
}

export class FetchResponse {
    get statusCode(): number;
    get redirected(): boolean;
    get ok(): boolean;
    get unauthenticated(): boolean;
    get unprocessableEntity(): boolean;
    get authenticationURL(): string | null;
    get contentType(): string;
    get headers(): Headers;
    get html(): Promise<string>;
    get json(): Promise<any>;
    get text(): Promise<string>;
    get isTurboStream(): boolean;
    get isScript(): boolean;
    renderTurboStream(): Promise<void>;
    activeScript(): Promise<void>;
}

export class RequestInterceptor {
    static register(interceptor: (request: FetchRequest) => void | Promise<void>): void;
    static get(): (request: FetchRequest) => void | Promise<void>;
    static reset(): void;
}

export function get(url: string | URL, options?: Options): Promise<FetchResponse>;
export function post(url: string | URL, options?: Options): Promise<FetchResponse>;
export function put(url: string | URL, options?: Options): Promise<FetchResponse>;
export function patch(url: string | URL, options?: Options): Promise<FetchResponse>;
export function destroy(url: string | URL, options?: Options): Promise<FetchResponse>;
