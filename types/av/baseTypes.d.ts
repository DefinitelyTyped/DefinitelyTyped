/// <reference path="./buffer.d.ts" />
/// <reference path="./bufferList.d.ts" />

declare namespace AV {
    interface Format {
        formatID: string;
        sampleRate: number;
        channelsPerFrame: number;
        bitsPerChannel: number;
    }

    type TypedArray =
        | Int8Array
        | Uint8Array
        | Uint8ClampedArray
        | Int16Array
        | Uint16Array
        | Int32Array
        | Uint32Array
        | Float32Array
        | Float64Array;

    interface Metadata {
        [key: string]: any;
    }

    type BufferFormats = Buffer | TypedArray | ArrayBuffer | BufferList;

    type Encoding = "ascii" | "utf8" | "utf16-be" | "utf16-le" | "utf16-bom";

    class UnderflowError extends Error {
    }
}
