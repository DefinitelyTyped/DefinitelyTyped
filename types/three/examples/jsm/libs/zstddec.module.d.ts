export class ZSTDDecoder {
    init(): Promise<void>;

    decode(array: Uint8Array, uncompressedSize?: number): Uint8Array;
}
