interface HasBuffer {
    buffer: Uint8Array;
}

interface DecodedImage {
    width: number;
    height: number;
    data: Uint8ClampedArray;
}

interface Decodable {
    decode(): Promise<DecodedImage>;
}

/**
 * @async
 */
declare function decode(bufobj: HasBuffer): Promise<DecodedImage>;

declare namespace decode {
    /**
     * @async
     */
    function all(bufobj: HasBuffer): Promise<Decodable[]>;
}

export = decode;
