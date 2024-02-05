import { MeshPhysicalMaterial, MeshPhysicalMaterialParameters, Texture } from "../../../src/Three.js";

export interface MeshPostProcessingMaterialParameters extends MeshPhysicalMaterialParameters {
    aoPassMap?: Texture | null | undefined;
    aoPassMapScale?: number | undefined;
}

export class MeshPostProcessingMaterial extends MeshPhysicalMaterial {
    constructor(parameters: MeshPostProcessingMaterialParameters);

    get aoPassMap(): Texture | null | undefined;
    set aoPassMap(aoPassMap: Texture | null | undefined);
}
