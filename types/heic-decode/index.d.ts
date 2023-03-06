// Type definitions for heic-decode 1.1
// Project: https://github.com/catdad-experiments/heic-decode
// Definitions by: hieyou1 <https://github.com/hieyou1>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
