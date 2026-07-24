import type { Readable } from "node:stream";
import type { EncodeFormActionCallback, FindSourceMapURLCallback } from "./shared";

export {
    createFromFetch,
    createFromReadableStream,
    createServerReference,
    createTemporaryReferenceSet,
    encodeReply,
    registerServerReference,
} from "./client.edge";
export type { EncodeFormActionCallback, ReactCustomFormAction, TemporaryReferenceSet } from "./client.edge";

export interface Options {
    nonce?: string | undefined;
    encodeFormAction?: EncodeFormActionCallback | undefined;
    findSourceMapURL?: FindSourceMapURLCallback | undefined;
    replayConsoleLogs?: boolean | undefined;
    environmentName?: string | undefined;
    startTime?: number | undefined;
    endTime?: number | undefined;
    debugChannel?: Readable | undefined;
}

export function createFromNodeStream<T>(stream: Readable, options?: Options): Promise<T>;
