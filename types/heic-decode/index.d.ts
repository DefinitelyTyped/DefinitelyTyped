declare module 'heic-decode';

export interface HasBuffer {
    buffer: ArrayBufferLike;
}

export interface DecodedImage {
    width: number;
    height: number;
    data: number[];
}

export interface Decodable {
    decode(): Promise<DecodedImage>;
}

export default function decode(bufobj: HasBuffer): Promise<DecodedImage>;

export function all(bufobj: HasBuffer): Promise<Decodable[]>;
