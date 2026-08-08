import type {
    ClientTemporaryReferenceSet,
    EdgeClientOptions,
    EncodeFormActionCallback,
    EncodeReplyOptions,
    ReactCustomFormAction,
} from "./shared";

export type Options = EdgeClientOptions;
export type TemporaryReferenceSet = ClientTemporaryReferenceSet;
export type { EncodeFormActionCallback, ReactCustomFormAction };

export function createServerReference<Arguments extends unknown[] = unknown[], Return = unknown>(
    id: string,
): (...args: Arguments) => Promise<Return>;

export function registerServerReference<T extends CallableFunction>(
    reference: T,
    id: string,
    encodeFormAction?: EncodeFormActionCallback,
): T;

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
