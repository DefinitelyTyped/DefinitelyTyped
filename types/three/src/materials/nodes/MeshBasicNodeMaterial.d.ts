import { Combine } from "../../constants.js";
import { Color } from "../../math/Color.js";
import { Euler } from "../../math/Euler.js";
import { Texture } from "../../textures/Texture.js";
import { MeshBasicMaterialParameters } from "../MeshBasicMaterial.js";
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
    envMapRotation: Euler;
    combine: Combine;
    reflectivity: number;
    refractionRatio: number;
    wireframe: boolean;
    wireframeLinewidth: number;
    wireframeLinecap: string;
    wireframeLinejoin: string;
    fog: boolean;

    constructor(parameters?: MeshBasicNodeMaterialParameters);
}
