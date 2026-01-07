import { CubeTexture } from "../../textures/CubeTexture.js";
import Node from "../core/Node.js";
import TextureNode from "./TextureNode.js";

declare class CubeTextureNode extends TextureNode {
    isCubeTextureNode: boolean;
    uvNode: Node | null;
    levelNode: Node | null;

    constructor(
        value: CubeTexture,
        uvNode?: Node | null,
        levelNode?: Node | null,
        biasNode?: Node | null,
    );

    getDefaultUV(): Node;
}

export default CubeTextureNode;

export const cubeTextureBase: (
    value: CubeTexture,
    uvNode?: Node,
    levelNode?: Node,
    biasNode?: Node,
) => CubeTextureNode;

export const cubeTexture: (
    value?: CubeTexture,
    uvNode?: Node | null,
    levelNode?: Node | null,
    biasNode?: Node | null,
) => CubeTextureNode;

export const uniformCubeTexture: (
    value?: CubeTexture,
) => CubeTextureNode;
