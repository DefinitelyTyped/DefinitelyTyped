export class Bitstring {
    constructor(options?: {
        /** The length of the bitstring in bits either this or `buffer` must be given, but not both. */
        length?: number;
        /** The bitstring as a buffer of bytes where the bytes are always in big endian order (left most byte or most significant byte in the buffer will be the least significant and lowest index byte in the bitstring) and where the bit order is also little endian by default but may be specified as big endian by passing `leftToRightIndexing: false`; either this parameter or `length` must be given but not both. */
        buffer?: Uint8Array;
        /** Whether the bit order (NOT the byte order, which is *always* first byte in the buffer is the first byte-index into the bitstring, i.e., left to right) is left to right or not; the default is left to right, which matches what the byte order always is and, specifically, means that `0x80` or `0b1000000` means the first bit index is set in a given byte. */
        leftToRightIndexing?: boolean;
        /** @deprecated use `leftToRightIndexing` instead. */
        littleEndianBits?: boolean;
    });

    /** Decodes and uncompresses a given base64url encoded string to a Uint8Array. */
    static decodeBits(options: { encoded: string }): Promise<Uint8Array>;
    /** Uncompresses compressed bits. */
    static uncompressBits(options: { compressed: Uint8Array }): Promise<Uint8Array>;

    /** Sets the value of a bit for the given position to the given boolean. */
    set(position: number, on: boolean): void;
    /** Gets the value of a bit for the given position. */
    get(position: number): boolean;
    /** Compresses and encodes bits to a base64url encoded string. */
    encodeBits(): Promise<string>;
    /** Compresses bits to a Uint8Array. */
    compressBits(): Promise<Uint8Array>;
}
