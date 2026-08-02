import { Texture } from "../../textures/Texture.js";
import Node from "../core/Node.js";
import UniformNode from "../core/UniformNode.js";

interface TextureNodeInterface {
    readonly isTextureNode: true;

    uvNode: Node<"vec2"> | Node<"vec3"> | null;
    levelNode: Node | null;
    biasNode: Node | null;
    compareNode: Node | null;
    depthNode: Node | null;
    gradNode: Node | null;
    gatherNode: Node<"int"> | null;

    sampler: boolean;
    updateMatrix: boolean;

    referenceNode: Node | null;

    getDefaultUV(): Node;

    setSampler(value: boolean): this;

    getSampler(): boolean;

    sample(uvNode: Node): this;

    load(uvNode: Node): this;

    blur(amountNode: Node): this;

    level(levelNode: Node): this;

    size(levelNode: Node): Node;

    bias(biasNode: Node): this;

    getBase(): TextureNode;

    compare(compareNode: Node<"float"> | number): this;

    grad(gradeNodeX: Node, gradeNodeY: Node): this;

    gather(gatherNode?: Node<"int"> | number): this;

    depth(depthNode: Node): this;

    offset(offsetNode: Node<"ivec2">): this;

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

type TextureNode<TNodeType = "vec4"> = TextureNodeInterface & UniformNode<TNodeType, Texture>;

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
