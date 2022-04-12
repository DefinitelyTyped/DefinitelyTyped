export class XMLAsset extends Asset {
    constructor(name: string, url: string);
    private mUrl;
    private mXHR;
    onLoaderRequested(factory: any): void;
}
import { Asset } from './Asset';
