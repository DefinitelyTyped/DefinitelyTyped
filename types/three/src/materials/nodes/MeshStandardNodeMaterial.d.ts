import { NormalMapTypes } from "../../constants.js";
import { Color } from "../../math/Color.js";
import { Euler } from "../../math/Euler.js";
import { Vector2 } from "../../math/Vector2.js";
import Node from "../../nodes/core/Node.js";
import { Texture } from "../../textures/Texture.js";
import { MeshStandardMaterialParameters } from "../MeshStandardMaterial.js";
import NodeMaterial, { NodeMaterialParameters } from "./NodeMaterial.js";

export interface MeshStandardNodeMaterialParameters extends NodeMaterialParameters, MeshStandardMaterialParameters {
}

export default class MeshStandardNodeMaterial extends NodeMaterial {
    readonly isMeshStandardNodeMaterial: true;

    emissiveNode: Node | null;

    metalnessNode: Node | null;
    roughnessNode: Node | null;

    // Properties from MeshStandardMaterial
    readonly isMeshStandardMaterial: true;
    color: Color;
    roughness: number;
    metalness: number;
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
    roughnessMap: Texture | null;
    metalnessMap: Texture | null;
    alphaMap: Texture | null;
    envMap: Texture | null;
    envMapRotation: Euler;
    envMapIntensity: number;
    wireframe: boolean;
    wireframeLinewidth: number;
    wireframeLinecap: string;
    wireframeLinejoin: string;
    flatShading: boolean;
    fog: boolean;

    constructor(parameters?: MeshStandardNodeMaterialParameters);
}
