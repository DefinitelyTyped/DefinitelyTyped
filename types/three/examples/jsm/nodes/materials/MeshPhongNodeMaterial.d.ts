import { Color, Combine, MeshPhongMaterialParameters, NormalMapTypes, Texture, Vector2 } from "three";
import Node from "../core/Node.js";
import { ShaderNodeObject } from "../shadernode/ShaderNode.js";
import NodeMaterial, { NodeMaterialParameters } from "./NodeMaterial.js";

export interface MeshPhongNodeMaterialParameters extends NodeMaterialParameters, MeshPhongMaterialParameters {
}

export default class MeshPhongNodeMaterial extends NodeMaterial {
    readonly isMeshPhongNodeMaterial: true;

    shininessNode: ShaderNodeObject<Node> | null;
    specularNode: ShaderNodeObject<Node> | null;

    // Properties from MeshPhongMaterial
    readonly isMeshPhongMaterial: true;
    color: Color;
    specular: Color;
    shininess: number;
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
    specularMap: Texture | null;
    alphaMap: Texture | null;
    envMap: Texture | null;
    combine: Combine;
    reflectivity: number;
    refractionRatio: number;
    wireframeLinecap: string;
    wireframeLinejoin: string;
    flatShading: boolean;
    metal: boolean;

    constructor(parameters?: MeshPhongNodeMaterialParameters);
}
