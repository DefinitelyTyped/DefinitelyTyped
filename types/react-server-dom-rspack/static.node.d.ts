import type { Readable } from "node:stream";
import type { Options as ServerOptions } from "./server.node";
import type { FilterStackFrame, ServerTemporaryReferenceSet, StaticResult } from "./shared";

export interface Options extends ServerOptions {
    signal?: AbortSignal | undefined;
}

export interface NodeStreamOptions {
    environmentName?: string | (() => string) | undefined;
    filterStackFrame?: FilterStackFrame | undefined;
    onError?: ((error: unknown) => string | void) | undefined;
    identifierPrefix?: string | undefined;
    temporaryReferences?: ServerTemporaryReferenceSet | undefined;
    signal?: AbortSignal | undefined;
}

export function prerender(
    model: unknown,
    options?: Options,
): Promise<StaticResult<ReadableStream<Uint8Array>>>;

export function prerenderToNodeStream(
    model: unknown,
    options?: NodeStreamOptions,
): Promise<StaticResult<Readable>>;
