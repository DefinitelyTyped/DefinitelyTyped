import { Color, SpriteMaterialParameters, Texture } from "three";
import Node from "../core/Node.js";
import { ShaderNodeObject } from "../shadernode/ShaderNode.js";
import NodeMaterial, { NodeMaterialParameters } from "./NodeMaterial.js";

export interface SpriteNodeMaterialParameters extends NodeMaterialParameters, SpriteMaterialParameters {
}

export default class SpriteNodeMaterial extends NodeMaterial {
    isSpriteNodeMaterial: true;

    rotationNode: ShaderNodeObject<Node> | null;
    scaleNode: ShaderNodeObject<Node> | null;

    // Properties from SpriteMaterial
    readonly isSpriteMaterial: true;
    color: Color;
    map: Texture | null;
    alphaMap: Texture | null;
    rotation: number;
    sizeAttenuation: boolean;

    constructor(parameters?: SpriteNodeMaterialParameters);
}
