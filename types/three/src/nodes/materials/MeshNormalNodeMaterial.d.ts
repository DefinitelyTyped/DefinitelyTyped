import { NormalMapTypes } from "../../constants.js";
import { MeshNormalMaterialParameters } from "../../materials/MeshNormalMaterial.js";
import { Vector2 } from "../../math/Vector2.js";
import { Texture } from "../../textures/Texture.js";
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
    wireframe: boolean;
    wireframeLinewidth: number;
    flatShading: boolean;

    constructor(parameters?: MeshBasicNodeMaterialParameters);
}
