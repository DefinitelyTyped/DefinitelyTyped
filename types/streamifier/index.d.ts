/// <reference types="node" />

import { Readable, ReadableOptions } from "stream";

export function createReadStream(object: string | Buffer | Uint8Array, options?: ReadableOptions): Readable;
