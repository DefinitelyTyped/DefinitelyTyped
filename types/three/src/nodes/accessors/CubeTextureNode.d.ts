import { CubeTexture } from "../../textures/CubeTexture.js";
import Node from "../core/Node.js";
import { NodeRepresentation, ShaderNodeObject } from "../shadernode/ShaderNode.js";
import TextureNode from "./TextureNode.js";

declare class CubeTextureNode extends TextureNode {
    isCubeTextureNode: boolean;
    uvNode: ShaderNodeObject<Node> | null;
    levelNode: ShaderNodeObject<Node> | null;

    constructor(
        value: CubeTexture,
        uvNode?: ShaderNodeObject<Node> | null,
        levelNode?: ShaderNodeObject<Node> | null,
        biasNode?: ShaderNodeObject<Node> | null,
    );

    getDefaultUV(): Node;
}

export default CubeTextureNode;

export const cubeTexture: (
    value: CubeTexture,
    uvNode?: NodeRepresentation,
    levelNode?: NodeRepresentation,
    biasNode?: NodeRepresentation,
) => ShaderNodeObject<CubeTextureNode>;

declare module "../shadernode/ShaderNode.js" {
    interface NodeElements {
        cubeTexture: typeof cubeTexture;
    }
}
