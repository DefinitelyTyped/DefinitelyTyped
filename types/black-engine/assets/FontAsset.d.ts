export class FontAsset extends Asset {
    constructor(name: string, url: string, isLocal: boolean);
    private mUrl;
    private mIsLocal;
    onLoaderRequested(factory: any): void;
}
import { Asset } from './Asset';
