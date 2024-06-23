export interface CustomSource {
    source: string;
}

export interface LibratoRequestOptions {
    method?: string | undefined;
    uri?: string | undefined;
    headers?: { [index: string]: string } | undefined;
    maxAttempts?: number | undefined;
    retryDelay?: number | undefined;
    delayStrategy?: (() => number) | undefined;
    authorization?: string | undefined;
    "user-agent"?: string | undefined;
}

export interface LibratoConfig {
    email: string;
    token: string;
    prefix?: string | undefined;
    source?: string | undefined;
    requestOptions?: LibratoRequestOptions | undefined;
    period?: number | undefined;
    simulate?: false | undefined;
}

export interface LibratoSimulate {
    simulate: true;
}

export function configure(config: LibratoConfig | LibratoSimulate): void;
export function increment(name: string, value?: number, opts?: CustomSource): void;
export function measure(name: string, value: number, opts?: CustomSource): void;
export function timing(name: string, fn: (done: () => void) => void, cb: (err?: Error | null) => void): void;
export function timing(
    name: string,
    fn: (done: () => void) => void,
    opts?: CustomSource,
    cb?: (err?: Error | null) => void,
): void;
export function timing<T>(
    name: string,
    fn: (done: (err: Error | null | undefined, result: T) => T) => void,
    cb: (err?: Error | null) => void,
): T;
export function timing<T>(
    name: string,
    fn: (done: (err: Error | null | undefined, result: T) => T) => void,
    opts?: CustomSource,
    cb?: (err?: Error | null) => void,
): T;
export function start(): void;
export function stop(cb?: (err?: Error) => void): void;
export function flush(cb?: (err?: Error) => void): void;
export function middleware(config?: {
    requestCountKey?: string | undefined;
    responseTimeKey?: string | undefined;
    statusCodeKey?: string | undefined;
}): (req: object, res: object, next: () => void | Promise<void>) => void;

export function on(event: "error", handler: (err: Error) => void): void;
export function on(event: "SIGINT", handler: () => void): void;
