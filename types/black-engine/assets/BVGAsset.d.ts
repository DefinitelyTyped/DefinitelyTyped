export class BVGAsset extends Asset {
    constructor(name: string, url: string);
    private mUrl;
    private mGraphicsData;
    private mXHR;
    onLoaderRequested(factory: any): void;
}
import { Asset } from './Asset';
