import { Texture } from "../../textures/Texture.js";
import Node from "../core/Node.js";
import UniformNode from "../core/UniformNode.js";

interface TextureNodeInterface<TNodeType> {
    readonly isTextureNode: true;

    uvNode: Node<"vec2"> | Node<"vec3"> | null;
    levelNode: Node | null;
    biasNode: Node | null;
    compareNode: Node | null;
    depthNode: Node | null;
    gradNode: Node | null;

    sampler: boolean;
    updateMatrix: boolean;

    referenceNode: Node | null;

    getDefaultUV(): Node;

    setSampler(value: boolean): this;

    getSampler(): boolean;

    sample(uvNode: Node): Node<TNodeType>;

    load(uvNode: Node): Node<TNodeType>;

    blur(amountNode: Node): Node;

    level(levelNode: Node): Node;

    size(levelNode: Node): Node;

    bias(biasNode: Node): Node;

    getBase(): TextureNode;

    compare(compareNode: Node): Node;

    grad(gradeNodeX: Node, gradeNodeY: Node): TextureNode;

    depth(depthNode: Node): TextureNode;

    clone(): this;
}

declare const TextureNode: {
    new(
        value?: Texture,
        uvNode?: Node | null,
        levelNode?: Node | null,
        biasNode?: Node | null,
    ): TextureNode;
};

type TextureNode<TNodeType = "vec4"> = TextureNodeInterface<TNodeType> & UniformNode<TNodeType, Texture>;

export default TextureNode;

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
