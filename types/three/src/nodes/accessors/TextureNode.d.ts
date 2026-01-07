import { Texture } from "../../textures/Texture.js";
import Node from "../core/Node.js";
import UniformNode from "../core/UniformNode.js";

export default class TextureNode extends UniformNode<Texture> {
    readonly isTextureNode: true;

    uvNode: Node | null;
    levelNode: Node | null;
    biasNode: Node | null;
    compareNode: Node | null;
    depthNode: Node | null;
    gradNode: Node | null;

    sampler: boolean;
    updateMatrix: boolean;

    referenceNode: Node | null;

    constructor(
        value?: Texture,
        uvNode?: Node | null,
        levelNode?: Node | null,
        biasNode?: Node | null,
    );

    getDefaultUV(): Node;

    setSampler(value: boolean): this;

    getSampler(): boolean;

    /**
     * @deprecated
     */
    uv(uvNode: Node): Node;

    sample(uvNode: Node): Node;

    load(uvNode: Node): Node;

    blur(amountNode: Node): Node;

    level(levelNode: Node): Node;

    size(levelNode: Node): Node;

    bias(biasNode: Node): Node;

    getBase(): TextureNode;

    compare(compareNode: Node): Node;

    grad(gradeNodeX: Node, gradeNodeY: Node): Node;

    depth(depthNode: Node): Node;

    clone(): this;
}

export const texture: (
    value?: Texture | TextureNode,
    uvNode?: Node | null,
    levelNode?: Node | number | null,
    biasNode?: Node | null,
) => TextureNode;

export const uniformTexture: (
    value?: Texture,
) => TextureNode;

export const textureLoad: (
    value?: Texture | TextureNode,
    uvNode?: Node,
    levelNode?: Node | number,
    biasNode?: Node,
) => TextureNode;

export const textureLevel: (
    value: Texture | TextureNode,
    uv: Node,
    level: Node,
) => TextureNode;

export const sampler: (value: Texture | TextureNode) => Node;

export const samplerComparison: (value: Texture | TextureNode) => Node;
