import { FunctionNode, Node } from "three/webgpu";

export const RaymarchingBox: (
    steps: number | Node,
    callback:
        | ((params: { positionRay: Node }) => void)
        | FunctionNode<{ positionRay: Node }>,
) => void;
