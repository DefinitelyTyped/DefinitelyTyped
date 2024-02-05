import { DataTextureLoader, LoadingManager, TextureFilter } from "three";

export interface TIFFResult {
    width: number;
    height: number;
    data: Uint8Array;
    flipY: true;
    magFilter: TextureFilter;
    minFilter: TextureFilter;
}

export class TIFFLoader extends DataTextureLoader {
    constructor(manager?: LoadingManager);

    parse(buffer: Iterable<number>): TIFFResult;
}
