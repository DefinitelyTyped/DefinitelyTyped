import { Combine, NormalMapTypes } from "../../constants.js";
import { Color } from "../../math/Color.js";
import { Euler } from "../../math/Euler.js";
import { Vector2 } from "../../math/Vector2.js";
import { Texture } from "../../textures/Texture.js";
import { MeshLambertMaterialParameters } from "../MeshLambertMaterial.js";
import NodeMaterial, { NodeMaterialParameters } from "./NodeMaterial.js";

export interface MeshLambertNodeMaterialParameters extends NodeMaterialParameters, MeshLambertMaterialParameters {}

declare class MeshLambertNodeMaterial extends NodeMaterial {
    readonly isMeshLambertNodeMaterial: true;

    // Properties from MeshLambertMaterial
    readonly isMeshLambertMaterial: true;
    color: Color;
    bumpMap: Texture | null;
    bumpScale: number;
    displacementMap: Texture | null;
    displacementScale: number;
    displacementBias: number;
    emissive: Color;
    emissiveIntensity: number;
    emissiveMap: Texture | null;
    flatShading: boolean;
    map: Texture | null;
    lightMap: Texture | null;
    lightMapIntensity: number;
    normalMap: Texture | null;
    normalMapType: NormalMapTypes;
    normalScale: Vector2;
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

    constructor(parameters?: MeshLambertNodeMaterialParameters);
}

export default MeshLambertNodeMaterial;
