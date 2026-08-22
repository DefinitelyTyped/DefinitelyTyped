import type { ReactFormState } from "react-dom/client";

declare const clientTemporaryReferenceSet: unique symbol;
declare const serverTemporaryReferenceSet: unique symbol;

export interface ClientTemporaryReferenceSet {
    readonly [clientTemporaryReferenceSet]: never;
}

export interface ServerTemporaryReferenceSet {
    readonly [serverTemporaryReferenceSet]: never;
}

export interface ReactCustomFormAction {
    name?: string | undefined;
    action?: string | undefined;
    encType?: string | undefined;
    method?: string | undefined;
    target?: string | undefined;
    data?: FormData | null | undefined;
}

export type CallServerCallback = (id: string, args: unknown[]) => Promise<unknown>;

export type EncodeFormActionCallback = (
    id: unknown,
    args: Promise<unknown>,
) => ReactCustomFormAction;

export type FindSourceMapURLCallback = (
    fileName: string,
    environmentName: string,
) => string | null;

export interface EncodeReplyOptions {
    temporaryReferences?: ClientTemporaryReferenceSet | undefined;
    signal?: AbortSignal | undefined;
}

export interface BrowserClientOptions {
    debugChannel?: {
        writable?: WritableStream<Uint8Array> | undefined;
        readable?: ReadableStream<Uint8Array> | undefined;
    } | undefined;
    temporaryReferences?: ClientTemporaryReferenceSet | undefined;
    replayConsoleLogs?: boolean | undefined;
    environmentName?: string | undefined;
    startTime?: number | undefined;
    endTime?: number | undefined;
}

export interface EdgeClientOptions {
    nonce?: string | undefined;
    encodeFormAction?: EncodeFormActionCallback | undefined;
    temporaryReferences?: ClientTemporaryReferenceSet | undefined;
    findSourceMapURL?: FindSourceMapURLCallback | undefined;
    replayConsoleLogs?: boolean | undefined;
    environmentName?: string | undefined;
    startTime?: number | undefined;
    endTime?: number | undefined;
    debugChannel?: {
        readable?: ReadableStream<Uint8Array> | undefined;
    } | undefined;
}

export type FilterStackFrame = (
    url: string,
    functionName: string,
    lineNumber: number,
    columnNumber: number,
) => boolean;

export interface WebServerOptions {
    debugChannel?: {
        readable?: ReadableStream<Uint8Array> | undefined;
        writable?: WritableStream<Uint8Array> | undefined;
    } | undefined;
    environmentName?: string | (() => string) | undefined;
    filterStackFrame?: FilterStackFrame | undefined;
    identifierPrefix?: string | undefined;
    signal?: AbortSignal | undefined;
    temporaryReferences?: ServerTemporaryReferenceSet | undefined;
    onError?: ((error: unknown) => string | void) | undefined;
}

export interface StaticResult<Stream> {
    prelude: Stream;
}

export type ClientReference<T> = T & {
    readonly $$typeof: symbol;
    readonly $$id: string;
    readonly $$async: boolean;
};

export type ServerReference<T extends CallableFunction> = T & {
    readonly $$typeof: symbol;
    readonly $$id: string;
    readonly $$bound: unknown[] | null;
    readonly $$location?: Error | undefined;
};

export interface BoundArgsEncryptionStrategy<Payload> {
    encrypt(actionId: string, ...args: unknown[]): Promise<Payload>;
    decrypt(actionId: string, payloadPromise: Promise<Payload>): Promise<unknown[]>;
}

export type ServerEntry<T> = T & {
    resource: string;
    entryJsFiles: string[];
    entryCssFiles: string[];
};

export type DecodeFormStateResult = ReactFormState;
