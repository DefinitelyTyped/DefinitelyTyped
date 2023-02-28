export class AtlasTextureAsset extends Asset {
    constructor(name: string, imageUrl: string, dataUrl: string);
    private mImageUrl;
    private mDataUrl;
    private mScale;
    private mImageLoader;
    private mXHR;
    onLoaderRequested(factory: any): void;
}
import { Asset } from './Asset';
