import { Loader, LoadingManager, Material, Object3D } from "../../../src/Three.js";

export interface LWO {
    materials: Material[];
    meshes: Object3D[];
}

export interface LWOLoaderParameters {
    /**
     * Base content delivery folder path, use when it differs from Lightwave default structure
     */
    resourcePath?: string;
}

export class LWOLoader extends Loader<LWO> {
    constructor(manager?: LoadingManager, parameters?: LWOLoaderParameters);

    parse(data: ArrayBuffer, path: string, modelName: string): LWO;
}
