import TextureNode from "../../../nodes/accessors/TextureNode.js";
import UniformGroupNode from "../../../nodes/core/UniformGroupNode.js";
import { SampledTexture } from "../SampledTexture.js";

type GPUStorageTextureAccess = "read-only" | "read-write" | "write-only";

declare class NodeSampledTexture extends SampledTexture {
    textureNode: TextureNode | undefined;
    groupNode: UniformGroupNode;

    access: "read-write" | "read-only" | "write-only";

    constructor(
        name: string,
        textureNode: TextureNode | undefined,
        groupNode: UniformGroupNode,
        access?: GPUStorageTextureAccess | null,
    );
}

declare class NodeSampledCubeTexture extends NodeSampledTexture {
    readonly isSampledCubeTexture: true;
}

declare class NodeSampledTexture3D extends NodeSampledTexture {
    readonly isSampledTexture3D: true;
}

export { NodeSampledCubeTexture, NodeSampledTexture, NodeSampledTexture3D };
