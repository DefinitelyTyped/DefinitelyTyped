// https://github.com/mrdoob/three.js/blob/master/examples/js/loaders/TGALoader.js

import { LoadingManager, Texture } from "./three-core";

export class TGALoader {
    constructor(manager?: LoadingManager);

    manager: LoadingManager;

    load(url: string, onLoad?: (texture: Texture) => void, onProgress?: (event: ProgressEvent) => void, onError?: (event: ErrorEvent) => void): Texture;
}
