export class FetchRequest {
    constructor(method: string, url: string, options?: Options);
    addHeader(key: string, value: string): void;
    perform(): Promise<FetchResponse>;
}

export interface Options {
    body?: BodyInit | Record<any, any>;
    contentType?: string;
    headers?: HeadersInit;
    credentials?: RequestCredentials;
    query?: Record<any, any> | FormData | URLSearchParams;
    responseKind?: "html" | "turbo-stream" | "json";
}

export class FetchResponse {
    get statusCode(): number;
    get redirected(): boolean;
    get ok(): boolean;
    get contentType(): string;
    get headers(): Headers;
    get html(): Promise<string>;
    get json(): Promise<any>;
    get text(): Promise<string>;
}

export class RequestInterceptor {
    static register(interceptor: (request: FetchRequest) => void | Promise<void>): void;
    static reset(): void;
}

export function get(url: string, options?: Options): Promise<FetchResponse>;
export function post(url: string, options?: Options): Promise<FetchResponse>;
export function put(url: string, options?: Options): Promise<FetchResponse>;
export function patch(url: string, options?: Options): Promise<FetchResponse>;
export function destroy(url: string, options?: Options): Promise<FetchResponse>;
