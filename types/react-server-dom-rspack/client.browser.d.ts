import type {
    BrowserClientOptions,
    CallServerCallback,
    ClientTemporaryReferenceSet,
    EncodeReplyOptions,
    FindSourceMapURLCallback,
} from "./shared";

export type Options = BrowserClientOptions;
export type TemporaryReferenceSet = ClientTemporaryReferenceSet;
export type { CallServerCallback, FindSourceMapURLCallback };

export function setServerCallback(callback: CallServerCallback): void;
export function setFindSourceMapURLCallback(callback: FindSourceMapURLCallback): void;

export function createServerReference<Arguments extends unknown[] = unknown[], Return = unknown>(
    id: string,
    exportName?: string,
): (...args: Arguments) => Promise<Return>;

export function registerServerReference<T extends CallableFunction>(reference: T, id: string): T;
export function createTemporaryReferenceSet(): TemporaryReferenceSet;

export function createFromFetch<T>(
    promiseForResponse: Promise<Response>,
    options?: Options,
): Promise<T>;

export function createFromReadableStream<T>(
    stream: ReadableStream<Uint8Array>,
    options?: Options,
): Promise<T>;

export function encodeReply(value: unknown, options?: EncodeReplyOptions): Promise<string | FormData>;
