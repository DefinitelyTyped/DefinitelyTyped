export class LoaderFactory {
    constructor(assetManager: AssetManager);
    mAssetManager: AssetManager;
    get(type: string, url: string | LoaderType, ...args: any[]): AssetLoader;
}
import { AssetManager } from "./AssetManager";
import { AssetLoader } from "./loaders/AssetLoader";
import { LoaderType } from "./LoaderType";
