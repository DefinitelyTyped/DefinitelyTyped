interface HasBuffer {
    buffer: Uint8Array;
}

interface DecodedImage {
    width: number;
    height: number;
    data: Uint8ClampedArray;
}

interface Decodable {
    width: number;
    height: number;
    decode(): Promise<DecodedImage>;
}

interface DecodableImages extends Array<Decodable> {
    /** Frees the memory of the decoded images. Call it when done with them. */
    dispose(): void;
}

/**
 * @async
 */
declare function decode(bufobj: HasBuffer): Promise<DecodedImage>;

declare namespace decode {
    /**
     * @async
     */
    function all(bufobj: HasBuffer): Promise<DecodableImages>;
}

export = decode;
