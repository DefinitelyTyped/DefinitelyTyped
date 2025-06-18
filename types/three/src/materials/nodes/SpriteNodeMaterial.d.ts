import { Color } from "../../math/Color.js";
import Node from "../../nodes/core/Node.js";
import { Texture } from "../../textures/Texture.js";
import { SpriteMaterialParameters } from "../SpriteMaterial.js";
import NodeMaterial, { NodeMaterialParameters } from "./NodeMaterial.js";

export interface SpriteNodeMaterialParameters extends NodeMaterialParameters, SpriteMaterialParameters {
    rotationNode?: Node | null | undefined;
    scaleNode?: Node | null | undefined;
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
