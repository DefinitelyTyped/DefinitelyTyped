import { Texture } from "../../textures/Texture.js";
import Node from "../core/Node.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";
import TextureNode from "./TextureNode.js";

export default class Texture3DNode extends TextureNode {
    readonly isTexture3DNode: true;

    constructor(value: Texture, uvNode?: ShaderNodeObject<Node> | null, levelNode?: ShaderNodeObject<Node> | null);

    normal(uvNode: Node): ShaderNodeObject<Node>;
}

export const texture3D: (
    value: Texture,
    uvNode?: Node | null,
    levelNode?: Node | number | null,
) => ShaderNodeObject<Texture3DNode>;
