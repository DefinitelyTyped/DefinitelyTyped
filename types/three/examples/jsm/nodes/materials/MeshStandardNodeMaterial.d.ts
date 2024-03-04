import { Color, MeshStandardMaterialParameters, NormalMapTypes, Texture, Vector2 } from "three";
import Node from "../core/Node.js";
import { ShaderNodeObject } from "../shadernode/ShaderNode.js";
import NodeMaterial, { NodeMaterialParameters } from "./NodeMaterial.js";

export interface MeshStandardNodeMaterialParameters extends NodeMaterialParameters, MeshStandardMaterialParameters {
}

export default class MeshStandardNodeMaterial extends NodeMaterial {
    readonly isMeshStandardNodeMaterial: true;

    emissiveNode: ShaderNodeObject<Node> | null;

    metalnessNode: ShaderNodeObject<Node> | null;
    roughnessNode: ShaderNodeObject<Node> | null;

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
    envMapIntensity: number;
    wireframeLinecap: string;
    wireframeLinejoin: string;
    flatShading: boolean;

    constructor(paramters?: MeshStandardNodeMaterialParameters);
}
