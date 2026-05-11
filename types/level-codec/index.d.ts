export interface CodecEncoder {
    encode: (val: any) => any;
    decode: (val: any) => any;
    buffer: boolean;
    type: string;
}
export interface CodecOptions {
    keyEncoding?: string | CodecEncoder | undefined;
    valueEncoding?: string | CodecEncoder | undefined;
}
export interface Codec {
    encodeKey(key: any, opts?: CodecOptions, batchOpts?: CodecOptions): any;
    encodeValue(value: any, opts?: CodecOptions, batchOpts?: CodecOptions): any;
    decodeKey(key: any, opts?: CodecOptions): any;
    decodeValue(value: any, opts?: CodecOptions): any;
    encodeBatch(ops: any, opts?: CodecOptions): any;
    encodeLtgt(ltgt: any): any;
    createStreamDecoder(opts: CodecOptions): any;
    keyAsBuffer(opts?: CodecOptions): any;
    valueAsBuffer(opts?: CodecOptions): any;
}
export interface CodecConstructor {
    new(options?: CodecOptions): Codec;
    (options?: CodecOptions): Codec;
}

export const Codec: CodecConstructor;
