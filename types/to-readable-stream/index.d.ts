// Type definitions for to-readable-stream 3.0
// Project: https://github.com/sindresorhus/to-readable-stream
// Definitions by: Woo Yong Seok <https://github.com/woo-yong0405>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Readable } from "stream";

export default function toReadableStream(input: string | Uint8Array): Readable;
