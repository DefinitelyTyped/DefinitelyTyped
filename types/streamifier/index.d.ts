// Type definitions for streamifier 0.1
// Project: https://github.com/gagle/node-streamifier
// Definitions by: Idan Attias <https://github.com/idan-at>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Readable, ReadableOptions } from "stream";

export function createReadStream(object: string | Buffer | Uint8Array, options?: ReadableOptions): Readable;
