import { FunctionNode, Node } from "three/webgpu";

export const RaymarchingBox: (
    steps: number | Node,
    callback:
        | ((params: { positionRay: Node<"vec3"> }) => void)
        | FunctionNode<{ positionRay: Node<"vec3"> }>,
) => void;
