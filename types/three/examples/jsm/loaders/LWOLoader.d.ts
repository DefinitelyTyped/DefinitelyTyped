import { Loader, LoadingManager, Material, Object3D } from "three";

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

/**
 * @deprecated The loader has been deprecated and will be removed with r195. Export your LWO files to glTF before using them on the web.
 */
export class LWOLoader extends Loader<LWO> {
    /**
     * @deprecated The loader has been deprecated and will be removed with r195. Export your LWO files to glTF before using them on the web.
     */
    constructor(manager?: LoadingManager, parameters?: LWOLoaderParameters);

    parse(data: ArrayBuffer, path: string, modelName: string): LWO;
}
