import { NormalMapTypes } from "../../constants.js";
import { Color } from "../../math/Color.js";
import { Vector2 } from "../../math/Vector2.js";
import { Texture } from "../../textures/Texture.js";
import { MeshToonMaterialParameters } from "../MeshToonMaterial.js";
import NodeMaterial, { NodeMaterialParameters } from "./NodeMaterial.js";

export interface MeshToonNodeMaterialParameters extends NodeMaterialParameters, MeshToonMaterialParameters {
}

export default class MeshToonNodeMaterial extends NodeMaterial {
    readonly isMeshToonNodeMaterial: true;

    // Properties from MeshToonMaterial
    readonly isMeshToonMaterial: true;
    color: Color;
    gradientMap: Texture | null;
    map: Texture | null;
    lightMap: Texture | null;
    lightMapIntensity: number;
    aoMap: Texture | null;
    aoMapIntensity: number;
    emissive: Color;
    emissiveIntensity: number;
    emissiveMap: Texture | null;
    bumpMap: Texture | null;
    bumpScale: number;
    normalMap: Texture | null;
    normalMapType: NormalMapTypes;
    normalScale: Vector2;
    displacementMap: Texture | null;
    displacementScale: number;
    displacementBias: number;
    alphaMap: Texture | null;
    wireframe: boolean;
    wireframeLinewidth: number;
    wireframeLinecap: string;
    wireframeLinejoin: string;
    fog: boolean;

    constructor(parameters?: MeshToonNodeMaterialParameters);
}
