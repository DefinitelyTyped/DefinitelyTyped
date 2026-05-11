/// <reference types="node" />

import { PassThrough } from "stream";

export function Extract(options: {
    path: string;
    /* used to decode non-utf8 file names in the archive. If not specified a fallback will be used. */
    decodeString?: ((buffer: Buffer) => string) | undefined;
}): NodeJS.WritableStream;

export function Parse(options?: {
    /* used to decode non-utf8 file names in the archive. If not specified a fallback will be used. */
    decodeString?: ((buffer: Buffer) => string) | undefined;
}): NodeJS.WritableStream & NodeJS.ReadableStream;

export interface Entry extends PassThrough {
    path: string;
    type: "Directory" | "File";
    size: number;
    autodrain: () => void;
}
