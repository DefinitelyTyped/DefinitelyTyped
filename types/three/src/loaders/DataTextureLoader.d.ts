import { DataTexture } from "../textures/DataTexture.js";
import { Loader } from "./Loader.js";
import { LoadingManager } from "./LoadingManager.js";

export class DataTextureLoader extends Loader<DataTexture> {
    constructor(manager?: LoadingManager);

    load(
        url: string,
        onLoad?: (data: DataTexture, texData: object) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (err: unknown) => void,
    ): DataTexture;
}
