export class AtlasTexture extends Texture {
    static naturalSort(dataset: any[], field?: string | null): void;
    private static __naturalComparer;
    constructor(nativeElement: any, jsonObject: any, scale?: number);
    private mSubTextures;
    private __parseAtlasData;
    getTexture(name: string): Texture;
    getTextures(nameMask?: string | null, outTextures?: Texture[] | null): Texture[];
    get subTextures(): any;
}
import { Texture } from './Texture';
