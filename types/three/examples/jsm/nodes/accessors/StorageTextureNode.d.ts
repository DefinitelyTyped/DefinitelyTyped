import { Texture } from "three";
import { GPUStorageTextureAccess } from "../../renderers/webgpu/utils/WebGPUConstants.js";
import Node from "../core/Node.js";
import NodeBuilder from "../core/NodeBuilder.js";
import { NodeRepresentation, ShaderNodeObject } from "../shadernode/ShaderNode.js";
import TextureNode from "./TextureNode.js";

export default class StorageTextureNode extends TextureNode {
    storeNode: Node | null;

    readonly isStorageTextureNode: true;

    access: GPUStorageTextureAccess;

    constructor(
        value: Texture,
        uvNode?: ShaderNodeObject<Node> | null,
        storeNode?: Node | null,
    );

    setAccess(value: GPUStorageTextureAccess): this;

    toReadOnly(): this;

    toWriteOnly(): this;

    generateStore(builder: NodeBuilder): void;
}

export const storageTexture: (
    value: Texture,
    uvNode?: NodeRepresentation,
    storeNode?: NodeRepresentation,
) => ShaderNodeObject<StorageTextureNode>;

export const textureStore: (
    value: Texture,
    uvNode?: NodeRepresentation,
    storeNode?: NodeRepresentation,
) => ShaderNodeObject<StorageTextureNode>;
