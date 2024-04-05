import { MeshNormalMaterialParameters, NormalMapTypes, Texture, Vector2 } from "three";
import NodeMaterial, { NodeMaterialParameters } from "./NodeMaterial.js";

export interface MeshBasicNodeMaterialParameters extends NodeMaterialParameters, MeshNormalMaterialParameters {
}

export default class MeshNormalNodeMaterial extends NodeMaterial {
    readonly isMeshNormalNodeMaterial: true;

    // Properties from MeshNormalMaterial
    readonly isMeshNormalMaterial: true;
    bumpMap: Texture | null;
    bumpScale: number;
    normalMap: Texture | null;
    normalMapType: NormalMapTypes;
    normalScale: Vector2;
    displacementMap: Texture | null;
    displacementScale: number;
    displacementBias: number;
    flatShading: boolean;

    constructor(parameters?: MeshBasicNodeMaterialParameters);
}
