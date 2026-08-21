/// <reference types="node" />

import { ReadStream } from "fs";

export = imageFunction;

declare function imageFunction(
    src: { uri: string } | string | Buffer | ReadStream,
    options?: { responseType: "buffer" } & imageFunction.Options,
): Promise<Buffer>;
declare function imageFunction(
    src: { uri: string } | string | Buffer | ReadStream,
    options?: { responseType: "base64" } & imageFunction.Options,
): Promise<string>;

declare namespace imageFunction {
    interface Options {
        percentage?: number | undefined;
        width?: number | undefined;
        height?: number | undefined;
        responseType?: string | undefined;
    }
}
