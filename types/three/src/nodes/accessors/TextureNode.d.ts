import { Texture } from "../../textures/Texture.js";
import Node from "../core/Node.js";
import UniformNode from "../core/UniformNode.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

export default class TextureNode extends UniformNode<Texture> {
    readonly isTextureNode: true;

    uvNode: ShaderNodeObject<Node> | null;
    levelNode: ShaderNodeObject<Node> | null;
    biasNode: ShaderNodeObject<Node> | null;
    compareNode: Node | null;
    depthNode: Node | null;
    gradNode: Node | null;

    sampler: boolean;
    updateMatrix: boolean;

    referenceNode: Node | null;

    constructor(
        value?: Texture,
        uvNode?: ShaderNodeObject<Node> | null,
        levelNode?: ShaderNodeObject<Node> | null,
        biasNode?: ShaderNodeObject<Node> | null,
    );

    getDefaultUV(): Node;

    setSampler(value: boolean): this;

    getSampler(): boolean;

    /**
     * @deprecated
     */
    uv(uvNode: Node): ShaderNodeObject<Node>;

    sample(uvNode: Node): ShaderNodeObject<Node>;

    load(uvNode: Node): ShaderNodeObject<Node>;

    blur(amountNode: Node): ShaderNodeObject<Node>;

    level(levelNode: Node): ShaderNodeObject<Node>;

    size(levelNode: Node): ShaderNodeObject<Node>;

    bias(biasNode: Node): ShaderNodeObject<Node>;

    getBase(): TextureNode;

    compare(compareNode: Node): ShaderNodeObject<Node>;

    grad(gradeNodeX: Node, gradeNodeY: Node): ShaderNodeObject<Node>;

    depth(depthNode: Node): ShaderNodeObject<Node>;

    clone(): this;
}

export const texture: (
    value?: Texture,
    uvNode?: Node | null,
    levelNode?: Node | number | null,
    biasNode?: Node | null,
) => ShaderNodeObject<TextureNode>;

export const uniformTexture: (
    value?: Texture,
) => ShaderNodeObject<TextureNode>;

export const textureLoad: (
    value?: Texture,
    uvNode?: Node,
    levelNode?: Node | number,
    biasNode?: Node,
) => ShaderNodeObject<TextureNode>;

export const sampler: (value: Texture | TextureNode) => ShaderNodeObject<Node>;

export const samplerComparison: (value: Texture | TextureNode) => ShaderNodeObject<Node>;
