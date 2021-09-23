// Type definitions for simple-sha1 3.0
// Project: https://github.com/michaelrhodes/simple-sha1
// Definitions by: Emily M Klassen <https://github.com/forivall>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = sha1;

declare function sha1(buf: string | sha1.ArrayBufferView, cb: (data: string) => void): void;

declare namespace sha1 {
    type TypedArray = Uint8Array | Uint8ClampedArray | Uint16Array | Uint32Array | Int8Array | Int16Array | Int32Array | Float32Array | Float64Array;
    type ArrayBufferView = TypedArray | DataView;
    function sync(buf: string | ArrayBufferView): string;
}
