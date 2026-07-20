import type busboy = require("busboy");
import type { Duplex, Readable, Writable } from "node:stream";
import type {
    BoundArgsEncryptionStrategy,
    ClientReference,
    DecodeFormStateResult,
    FilterStackFrame,
    ServerEntry,
    ServerReference,
    ServerTemporaryReferenceSet,
} from "./shared";

export type TemporaryReferenceSet = ServerTemporaryReferenceSet;
export type { BoundArgsEncryptionStrategy, ClientReference, ServerEntry, ServerReference };

export interface Options {
    debugChannel?: Readable | Writable | Duplex | WebSocket | undefined;
    environmentName?: string | (() => string) | undefined;
    filterStackFrame?: FilterStackFrame | undefined;
    onError?: ((error: unknown) => string | void) | undefined;
    identifierPrefix?: string | undefined;
    temporaryReferences?: TemporaryReferenceSet | undefined;
}

export interface ReadableStreamOptions extends Omit<Options, "debugChannel"> {
    debugChannel?: {
        readable?: ReadableStream<Uint8Array> | undefined;
        writable?: WritableStream<Uint8Array> | undefined;
    } | undefined;
    signal?: AbortSignal | undefined;
}

export interface PipeableStream {
    abort(reason?: unknown): void;
    pipe<Destination extends Writable>(destination: Destination): Destination;
}

export function renderToPipeableStream(model: unknown, options?: Options): PipeableStream;
export function renderToReadableStream(
    model: unknown,
    options?: ReadableStreamOptions,
): ReadableStream<Uint8Array>;

export function decodeReply<T>(
    body: string | FormData,
    options?: { temporaryReferences?: TemporaryReferenceSet | undefined },
): Promise<T>;

export function decodeReplyFromBusboy<T>(
    busboyStream: busboy.Busboy,
    options?: { temporaryReferences?: TemporaryReferenceSet | undefined },
): Promise<T>;

export function decodeReplyFromAsyncIterable<T>(
    iterable: AsyncIterable<[name: string, value: string | File]>,
    options?: { temporaryReferences?: TemporaryReferenceSet | undefined },
): Promise<T>;

export function decodeAction<T>(body: FormData): Promise<() => T> | null;
export function decodeFormState<State>(
    actionResult: State,
    body: FormData,
): Promise<DecodeFormStateResult | null>;

export function registerServerReference<T extends CallableFunction>(
    reference: T,
    id: string,
    exportName: string | null,
): ServerReference<T>;

export function registerClientReference<T extends object>(
    proxyImplementation: T,
    id: string,
    exportName: string,
): ClientReference<T>;

export function createTemporaryReferenceSet(): TemporaryReferenceSet;

export function setServerActionBoundArgsEncryption<Payload>(
    strategy: BoundArgsEncryptionStrategy<Payload>,
): void;
export function encryptServerActionBoundArgs<Payload = unknown>(
    actionId: string,
    ...args: unknown[]
): Promise<Payload>;
export function decryptServerActionBoundArgs<Payload>(
    actionId: string,
    encryptedPromise: Promise<Payload>,
): Promise<unknown[]>;

export function loadServerAction(actionId: string): CallableFunction;
export function createServerEntry<T>(value: T, resource: string): ServerEntry<T>;
export function ensureServerActions(actions: readonly CallableFunction[]): void;
