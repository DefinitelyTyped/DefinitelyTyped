import { NodeRepresentation, ShaderNodeObject, TempNode, TextureNode } from "three/tsl";

declare class SMAANode extends TempNode {
    textureNode: TextureNode;

    constructor(textureNode: TextureNode);

    getTextureNode(): TextureNode;

    setSize(width: number, height: number): void;

    getAreaTexture(): string;

    getSearchTexture(): string;
}

export const smaa: (node: NodeRepresentation) => ShaderNodeObject<SMAANode>;
