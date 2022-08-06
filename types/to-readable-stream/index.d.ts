// Type definitions for url-parse-lax 5.0
// Project: https://github.com/sindresorhus/url-parse-lax
// Definitions by: Woo Yong Seok <https://github.com/woo-yong0405>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Readable } from "stream";

export default function toReadableStream(input: string | Buffer | Uint8Array): Readable;
