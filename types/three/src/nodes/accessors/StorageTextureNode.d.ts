import { Texture } from "../../textures/Texture.js";
import { NodeAccess } from "../core/constants.js";
import Node from "../core/Node.js";
import NodeBuilder from "../core/NodeBuilder.js";
import { NodeRepresentation, ShaderNodeObject } from "../tsl/TSLCore.js";
import TextureNode from "./TextureNode.js";

export default class StorageTextureNode extends TextureNode {
    storeNode: Node | null;

    readonly isStorageTextureNode: true;

    access: NodeAccess;

    constructor(
        value: Texture,
        uvNode?: ShaderNodeObject<Node> | null,
        storeNode?: Node | null,
    );

    setAccess(value: NodeAccess): this;

    toReadWrite(): this;

    toReadOnly(): this;

    toWriteOnly(): this;

    generateStore(builder: NodeBuilder): void;
}

export const storageTexture: (
    value: Texture,
    uvNode?: NodeRepresentation | null,
    storeNode?: NodeRepresentation,
) => ShaderNodeObject<StorageTextureNode>;

export const textureStore: (
    value: Texture,
    uvNode?: NodeRepresentation | null,
    storeNode?: NodeRepresentation,
) => ShaderNodeObject<StorageTextureNode>;
