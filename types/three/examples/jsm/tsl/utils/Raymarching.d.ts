import { ShaderNodeObject } from "three/tsl";
import { FunctionNode, Node } from "three/webgpu";

export const RaymarchingBox: (
    steps: number | Node,
    callback:
        | ((params: { positionRay: ShaderNodeObject<Node> }) => void)
        | FunctionNode<{ positionRay: ShaderNodeObject<Node> }>,
) => void;
