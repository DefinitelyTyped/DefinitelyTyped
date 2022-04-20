// Type definitions for heic-decode 1.1
// Project: https://github.com/catdad-experiments/heic-decode
// Definitions by: hieyou1 <https://github.com/hieyou1>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/*~ You can declare types that are available via importing the module */
interface HasBuffer {
    buffer: ArrayBufferLike;
}

interface DecodedImage {
    width: number;
    height: number;
    data: number[];
}

interface Decodable {
    decode(): Promise<DecodedImage>;
}

/*~ If this module has methods, declare them as functions like so.
 */

declare function decode(bufobj: HasBuffer): Promise<DecodedImage>;

declare namespace decode {
    function all(bufobj: HasBuffer): Promise<Decodable[]>;
}

export = decode;
