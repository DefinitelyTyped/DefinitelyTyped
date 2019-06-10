export declare const LiteBuffer: any;
export declare function Buffer(arg: any, encodingOrOffset?: number, length?: number): any;
export declare namespace Buffer {
    var from: (value: any, encodingOrOffset?: any, length?: any) => any;
    var __proto__: Uint8ArrayConstructor;
    var alloc: (size: any, fill: any, encoding: any) => any;
    var isBuffer: (b: any) => boolean;
    var isEncoding: (encoding: any) => boolean;
    var byteLength: ByteLength
}

declare function byteLength(string: any, encoding: any): number;
type ByteLength = typeof byteLength;
