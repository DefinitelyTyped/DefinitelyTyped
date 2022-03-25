export class TextureAsset extends Asset {
    constructor(name: string, url: string);
    private mUrl;
    mScale: number;
    private mImageLoader;
    onLoaderRequested(factory: any): void;
}
import { Asset } from './Asset';
