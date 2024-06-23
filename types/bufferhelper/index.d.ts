/// <reference types="node" />

declare namespace BufferHelper {
    type encoding = "ascii" | "utf8" | "utf16le" | "ucs2" | "base64" | "binary" | "hex";
}

declare class BufferHelper {
    constructor();

    concat(buffer: any): BufferHelper;
    empty(): BufferHelper;
    load(stream: any, callback: (arg: any) => any): void;
    toBuffer(): Buffer;
    toString(encoding: BufferHelper.encoding): string;
}

export = BufferHelper;
