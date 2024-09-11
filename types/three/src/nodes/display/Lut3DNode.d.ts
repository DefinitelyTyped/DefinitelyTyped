import { Data3DTexture } from "../../textures/Data3DTexture.js";
import Texture3DNode from "../accessors/Texture3DNode.js";
import Node from "../core/Node.js";
import TempNode from "../core/TempNode.js";
import UniformNode from "../core/UniformNode.js";
import { NodeRepresentation, ShaderNodeObject } from "../tsl/TSLCore.js";

declare class Lut3DNode extends TempNode {
    inputNode: Node;
    lutNode: Texture3DNode;
    size: ShaderNodeObject<UniformNode<number>>;
    intensityNode: UniformNode<number>;

    constructor(inputNode: Node, lutNode: UniformNode<Data3DTexture>, size: number, intensityNode: UniformNode<number>);
}

export default Lut3DNode;

export const lut3D: (
    node: NodeRepresentation,
    lut: NodeRepresentation,
    size: number,
    intensity: NodeRepresentation,
) => ShaderNodeObject<Lut3DNode>;
