export const END: number;
export const ESC: number;
export const ESC_END: number;
export const ESC_ESC: number;

export interface EncodeOptions {
    bufferPadding?: number;
    offset?: number;
    byteLength?: number;
}

export interface DecodeOptions {
    bufferSize?: number;
    maxMessageSize?: number;
    onMessage?: (msg: Uint8Array) => void;
    onError?: (msgBuffer: Uint8Array, errorMsg: string) => void;
}

export function encode(
    data: ArrayLike<number> | ArrayBuffer,
    o?: EncodeOptions,
): Uint8Array;

export class Decoder {
    constructor(o?: DecodeOptions);
    decode(data: ArrayLike<number> | ArrayBuffer): void;
}
