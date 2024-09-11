import { CubeTexture } from "../../textures/CubeTexture.js";
import { Texture } from "../../textures/Texture.js";
import Node from "../core/Node.js";
import { NodeRepresentation, ShaderNodeObject } from "../tsl/TSLCore.js";
import TextureNode from "./TextureNode.js";

export default class Texture3DNode extends TextureNode {
    readonly isTexture3DNode: true;

    constructor(value: Texture, uvNode?: ShaderNodeObject<Node> | null, levelNode?: ShaderNodeObject<Node> | null);
}

export const texture3D: (
    value: Texture,
    uvNode?: NodeRepresentation,
    levelNode?: NodeRepresentation,
) => ShaderNodeObject<Texture3DNode>;
