import { CubeTexture } from "three";
import Node from "../core/Node.js";
import { NodeRepresentation, ShaderNodeObject } from "../shadernode/ShaderNode.js";
import TextureNode from "./TextureNode.js";

export default class CubeTextureNode extends TextureNode {
    isCubeTextureNode: boolean;
    uvNode: ShaderNodeObject<Node> | null;
    levelNode: ShaderNodeObject<Node> | null;

    constructor(value: CubeTexture, uvNode?: Node | null, levelNode?: Node | null);

    getDefaultUV(): Node;
}

export const cubeTexture: (
    value: CubeTexture,
    uvNode?: NodeRepresentation,
    levelNode?: NodeRepresentation,
) => ShaderNodeObject<CubeTextureNode>;

declare module "../shadernode/ShaderNode.js" {
    interface NodeElements {
        cubeTexture: typeof cubeTexture;
    }
}
