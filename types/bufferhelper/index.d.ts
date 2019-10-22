// Type definitions for bufferhelper 0.2
// Project: https://github.com/JacksonTian/bufferhelper
// Definitions by: Vladimir Grenaderov <https://github.com/VladimirGrenaderov>,
//                 Max Boguslavskiy <https://github.com/maxbogus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7

/// <reference types="node" />

declare namespace BufferHelper {
    type encoding = 'ascii'|'utf8'|'utf16le'|'ucs2'|'base64'|'binary'|'hex';
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
