import { Color, MeshToonMaterialParameters, NormalMapTypes, Texture, Vector2 } from "three";
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

    constructor(paramters: MeshToonNodeMaterialParameters);
}
