import { Texture } from "../../textures/Texture.js";
import Node from "../core/Node.js";
import UniformNode from "../core/UniformNode.js";
import { NodeRepresentation, ShaderNodeObject } from "../tsl/TSLCore.js";

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
        value: Texture,
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
    uv(uvNode: NodeRepresentation): ShaderNodeObject<Node>;

    sample(uvNode: NodeRepresentation): ShaderNodeObject<Node>;

    blur(amountNode: NodeRepresentation): ShaderNodeObject<Node>;

    level(levelNode: NodeRepresentation): ShaderNodeObject<Node>;

    size(levelNode: NodeRepresentation): ShaderNodeObject<Node>;

    bias(biasNode: NodeRepresentation): ShaderNodeObject<Node>;

    compare(compareNode: NodeRepresentation): ShaderNodeObject<Node>;

    grad(gradeNodeX: NodeRepresentation, gradeNodeY: NodeRepresentation): ShaderNodeObject<Node>;

    depth(depthNode: NodeRepresentation): ShaderNodeObject<Node>;

    clone(): this;
}

export const texture: (
    value: Texture,
    uvNode?: NodeRepresentation,
    levelNode?: NodeRepresentation,
    biasNode?: NodeRepresentation,
) => ShaderNodeObject<TextureNode>;
export const textureLoad: (
    value: Texture,
    uvNode?: NodeRepresentation,
    levelNode?: NodeRepresentation,
    biasNode?: NodeRepresentation,
) => ShaderNodeObject<TextureNode>;

export const sampler: (value: Texture | TextureNode) => ShaderNodeObject<Node>;

export const samplerComparison: (value: Texture | TextureNode) => ShaderNodeObject<Node>;
