import TextureNode from "../../../nodes/accessors/TextureNode.js";
import UniformGroupNode from "../../../nodes/core/UniformGroupNode.js";
import Sampler from "../Sampler.js";

declare class NodeSampler extends Sampler {
    textureNode: TextureNode | undefined;
    groupNode: UniformGroupNode;
    constructor(name: string, textureNode: TextureNode | undefined, groupNode: UniformGroupNode);
    update(): void;
}

export default NodeSampler;
