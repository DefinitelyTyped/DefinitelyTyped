export class VectorTextureAsset extends Asset {
    constructor(name: string, url: string, bakeSelf: boolean, bakeChildren: boolean, namesToBake: string[]);
    private mUrl;
    private mBakeSelf;
    private mBakeChildren;
    private mNamesToBake;
    private mGraphicsData;
    private mXHR;
    onLoaderRequested(factory: any): void;
    bakeTextures(): {
        [x: string]: CanvasRenderTexture;
    };
}
import { Asset } from './Asset';
import { CanvasRenderTexture } from '../textures/CanvasRenderTexture';
