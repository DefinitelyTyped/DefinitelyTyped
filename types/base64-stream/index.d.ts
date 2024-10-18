/// <reference types="node" />

import { Transform, TransformOptions } from "stream";
export class Base64Decode extends Transform {}
export class Base64Encode extends Transform {
    constructor(
        options?: TransformOptions & {
            outputEncoding?: string | null | undefined;
            inputEncoding?: string | undefined;
            lineLength?: number | undefined;
            prefix?: string | undefined;
        },
    );
}
