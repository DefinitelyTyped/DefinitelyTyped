declare module 'heic-decode';

type HasBuffer = {
    "buffer": ArrayBufferLike;
};

export type DecodedImage = {
    "width": number,
    "height": number,
    "data": Array<number>
};

export interface Decodable {
    decode(): Promise<DecodedImage>
}

export default function decode(bufobj: HasBuffer): Promise<DecodedImage>;
export function all(bufobj: HasBuffer): Promise<Array<Decodable>>;
