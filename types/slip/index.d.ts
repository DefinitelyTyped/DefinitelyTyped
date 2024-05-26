export default slip;
declare namespace slip {
    const END: number;
    const ESC: number;
    const ESC_END: number;
    const ESC_ESC: number;

    interface EncodeOptions {
        bufferPadding?: number;
        offset?: number;
        byteLength?: number;
    }

    interface DecodeOptions {
        bufferSize?: number;
        maxMessageSize?: number;
        onMessage?: (msg: Uint8Array) => void;
        onError?: (msgBuffer: Uint8Array, errorMsg: string) => void;
    }

    function encode(
        data: ArrayLike<number> | ArrayBuffer,
        o?: EncodeOptions,
    ): Uint8Array;

    class Decoder {
        constructor(o?: DecodeOptions);
        decode(data: ArrayLike<number> | ArrayBuffer): void;
    }
}
