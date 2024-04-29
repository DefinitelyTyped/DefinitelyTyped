interface Base64 {
    encode: (input: string) => string;
    decode: (input: string) => string;
    encodeFromByteArray: (byteArray: Uint8Array) => string;
}

declare const base64: Base64;
export = base64;
