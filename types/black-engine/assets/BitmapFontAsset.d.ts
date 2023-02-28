export class BitmapFontAsset extends Asset {
    static parse(xml: Document, texture: Texture): BitmapFontData;
    constructor(name: string, imageUrl: string, xmlUrl: string);
    private mImageUrl;
    private mXmlUrl;
    mScale: number;
    private mImageLoader;
    private mXHR;
    onLoaderRequested(factory: any): void;
}
export class BitmapFontData {
    texture: Texture;
    xml: Document;
    name: string;
    size: number;
    lineHeight: number;
    chars: {
        [x: number]: BitmapFontCharData;
    };
    baseline: number;
}
export class BitmapFontCharData {
    texture: Texture;
    xOffset: number;
    yOffset: number;
    width: number;
    height: number;
    xAdvance: number;
    kerning: {
        [x: number]: number;
    };
}
import { Asset } from './Asset';
import { Texture } from '../textures/Texture';
