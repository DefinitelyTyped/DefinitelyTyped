import { Texture } from "../../textures/Texture.js";
import Node from "../core/Node.js";
import TextureNode from "./TextureNode.js";

export default class Texture3DNode extends TextureNode {
    readonly isTexture3DNode: true;

    constructor(value: Texture, uvNode?: Node | null, levelNode?: Node | null);

    normal(uvNode: Node): Node<"vec3">;
}

export const texture3D: (
    value: Texture,
    uvNode?: Node | null,
    levelNode?: Node | number | null,
) => Texture3DNode;

export const texture3DLoad: (
    value: Texture,
    uvNode?: Node | null,
    levelNode?: Node | number | null,
) => Texture3DNode;

export const texture3DLevel: (
    value: Texture,
    uvNode?: Node | null,
    levelNode?: Node | number | null,
) => Texture3DNode;
