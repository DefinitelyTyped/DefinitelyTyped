import { NormalMapTypes } from "../../constants.js";
import { Vector2 } from "../../math/Vector2.js";
import { Texture } from "../../textures/Texture.js";
import { MeshNormalMaterialParameters } from "../MeshNormalMaterial.js";
import NodeMaterial, { NodeMaterialParameters } from "./NodeMaterial.js";

export interface MeshNormalNodeMaterialParameters extends NodeMaterialParameters, MeshNormalMaterialParameters {
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

    constructor(parameters?: MeshNormalNodeMaterialParameters);
}
