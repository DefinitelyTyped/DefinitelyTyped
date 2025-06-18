import { NormalMapTypes } from "../../constants.js";
import { Color } from "../../math/Color.js";
import { Vector2 } from "../../math/Vector2.js";
import { Texture } from "../../textures/Texture.js";
import { MeshMatcapMaterialParameters } from "../MeshMatcapMaterial.js";
import NodeMaterial, { NodeMaterialParameters } from "./NodeMaterial.js";

export interface MeshMatcapNodeMaterialParameters extends NodeMaterialParameters, MeshMatcapMaterialParameters {
}

export default class MeshMatcapNodeMaterial extends NodeMaterial {
    readonly isMeshMatcapNodeMaterial: true;

    // Properties from MeshMatcapMaterial
    readonly isMeshMatcapMaterial: true;
    color: Color;
    matcap: Texture | null;
    map: Texture | null;
    bumpMap: Texture | null;
    bumpScale: number;
    normalMap: Texture | null;
    normalMapType: NormalMapTypes;
    normalScale: Vector2;
    displacementMap: Texture | null;
    displacementScale: number;
    displacementBias: number;
    alphaMap: Texture | null;
    flatShading: boolean;
    fog: boolean;

    constructor(parameters?: MeshMatcapNodeMaterialParameters);
}
