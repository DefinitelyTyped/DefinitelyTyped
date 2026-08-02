import Storage3DTexture from "../../renderers/common/Storage3DTexture.js";
import Node from "../core/Node.js";
import StorageTextureNode from "./StorageTextureNode.js";

declare class StorageTexture3DNode extends StorageTextureNode {
    readonly isStorageTexture3DNode: boolean;

    constructor(value: Storage3DTexture, uvNode?: Node<"vec3"> | null, storeNode?: Node | null);
}

export default StorageTexture3DNode;

export const storageTexture3D: (
    value: Storage3DTexture,
    uvNode?: Node<"vec3"> | null,
    storeNode?: Node | null,
) => StorageTexture3DNode;
