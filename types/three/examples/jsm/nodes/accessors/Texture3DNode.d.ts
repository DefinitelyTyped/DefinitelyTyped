import { CubeTexture, Texture } from "three";
import Node from "../core/Node.js";
import { NodeRepresentation, ShaderNodeObject } from "../shadernode/ShaderNode.js";
import TextureNode from "./TextureNode.js";

export default class Texture3DNode extends TextureNode {
    readonly isTexture3DNode: true;

    constructor(value: Texture, uvNode?: ShaderNodeObject<Node> | null, levelNode?: ShaderNodeObject<Node> | null);
}

export const texture3D: (
    value: CubeTexture,
    uvNode?: NodeRepresentation,
    levelNode?: NodeRepresentation,
) => ShaderNodeObject<Texture3DNode>;
