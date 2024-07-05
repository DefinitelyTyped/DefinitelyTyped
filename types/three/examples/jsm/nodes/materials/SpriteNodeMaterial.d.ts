import { Color, SpriteMaterialParameters, Texture } from "three";
import Node from "../core/Node.js";
import NodeMaterial, { NodeMaterialParameters } from "./NodeMaterial.js";

export interface SpriteNodeMaterialParameters extends NodeMaterialParameters, SpriteMaterialParameters {
}

export default class SpriteNodeMaterial extends NodeMaterial {
    isSpriteNodeMaterial: true;

    rotationNode: Node | null;
    scaleNode: Node | null;

    // Properties from SpriteMaterial
    readonly isSpriteMaterial: true;
    color: Color;
    map: Texture | null;
    alphaMap: Texture | null;
    rotation: number;
    sizeAttenuation: boolean;
    fog: boolean;

    constructor(parameters?: SpriteNodeMaterialParameters);
}
