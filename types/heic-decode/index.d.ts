interface HasBuffer {
    buffer: ArrayBufferLike;
}

interface DecodedImage {
    width: number;
    height: number;
    data: ArrayBuffer;
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
