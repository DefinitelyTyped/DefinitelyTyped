import { Texture } from "../../textures/Texture.js";
import Node from "../core/Node.js";
import TextureNode from "./TextureNode.js";

export default class Texture3DNode extends TextureNode {
    readonly isTexture3DNode: true;

    constructor(value: Texture, uvNode?: Node | null, levelNode?: Node | null);

    normal(uvNode: Node): Node;
}

export const texture3D: (
    value: Texture,
    uvNode?: Node | null,
    levelNode?: Node | number | null,
) => Texture3DNode;
