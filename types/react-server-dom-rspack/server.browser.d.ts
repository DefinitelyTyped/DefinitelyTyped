import type {
    BoundArgsEncryptionStrategy,
    ClientReference,
    DecodeFormStateResult,
    ServerEntry,
    ServerReference,
    ServerTemporaryReferenceSet,
    WebServerOptions,
} from "./shared";

export type Options = WebServerOptions;
export type TemporaryReferenceSet = ServerTemporaryReferenceSet;
export type { BoundArgsEncryptionStrategy, ClientReference, ServerEntry, ServerReference };

export function renderToReadableStream(
    model: unknown,
    options?: Options,
): ReadableStream<Uint8Array>;

export function decodeReply<T>(
    body: string | FormData,
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
