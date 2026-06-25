import StorageTexture from "../../renderers/common/StorageTexture.js";
import { NodeAccess } from "../core/constants.js";
import Node from "../core/Node.js";
import NodeBuilder from "../core/NodeBuilder.js";
import TextureNode from "./TextureNode.js";

export default class StorageTextureNode extends TextureNode {
    storeNode: Node | null;

    mipLevel: number;

    readonly isStorageTextureNode: true;

    access: NodeAccess;

    constructor(
        value: StorageTexture,
        uvNode?: Node | null,
        storeNode?: Node | null,
    );

    setAccess(value: NodeAccess): this;

    setMipLevel(level: number): this;

    toReadWrite(): this;

    toReadOnly(): this;

    toWriteOnly(): this;

    store(uvNode: Node, storeNode?: Node | null): StorageTextureNode;

    generateStore(builder: NodeBuilder): void;
}

export const storageTexture: (
    value: StorageTexture,
    uvNode?: Node | null,
    storeNode?: Node,
) => StorageTextureNode;

export const textureStore: (
    value: StorageTexture | StorageTextureNode,
    uvNode?: Node | null,
    storeNode?: Node,
) => StorageTextureNode;
