import { Color, Combine, MeshBasicMaterialParameters, Texture } from "three";
import NodeMaterial, { NodeMaterialParameters } from "./NodeMaterial.js";

export interface MeshBasicNodeMaterialParameters extends NodeMaterialParameters, MeshBasicMaterialParameters {
}

export default class MeshBasicNodeMaterial extends NodeMaterial {
    readonly isMeshBasicNodeMaterial: true;

    // Properties from MeshBasicMaterial
    readonly isMeshBasicMaterial: true;
    color: Color;
    map: Texture | null;
    lightMap: Texture | null;
    lightMapIntensity: number;
    aoMap: Texture | null;
    aoMapIntensity: number;
    specularMap: Texture | null;
    alphaMap: Texture | null;
    envMap: Texture | null;
    combine: Combine;
    reflectivity: number;
    refractionRatio: number;
    wireframeLinecap: string;
    wireframeLinejoin: string;

    constructor(parameters?: MeshBasicNodeMaterialParameters);
}
