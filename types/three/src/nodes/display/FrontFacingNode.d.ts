import Node from "../core/Node.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

declare class FrontFacingNode extends Node {
    isFrontFacingNode: true;
    constructor();
}

export default FrontFacingNode;

export const frontFacing: ShaderNodeObject<FrontFacingNode>;
export const faceDirection: ShaderNodeObject<Node>;
