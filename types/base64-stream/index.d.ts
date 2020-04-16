// Type definitions for base64-stream 1.0
// Project: https://github.com/mazira/base64-stream
// Definitions by: Sean O'Brien <https://github.com/s73obrien>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />

import { Transform, TransformOptions } from "stream";
export class Base64Decode extends Transform {}
export class Base64Encode extends Transform {
    constructor(options?: TransformOptions & {
        lineLength?: number,
        prefix?: string
    });
}
