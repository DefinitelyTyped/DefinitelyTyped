import { StreamSource } from "./types/StreamSource";

export function concatenate(sourcePromises: Array<Promise<StreamSource>>): ConcatenateReturn;

export interface ConcatenateReturn {
    done: Promise<void>;
    stream: ReadableStream;
}
