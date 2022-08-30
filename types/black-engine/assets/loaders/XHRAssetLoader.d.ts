export class XHRAssetLoader extends AssetLoader {
    constructor(url: any);
    protected mRequest: XMLHttpRequest;
    mimeType: string;
    responseType: string;
}
import { AssetLoader } from './AssetLoader';
