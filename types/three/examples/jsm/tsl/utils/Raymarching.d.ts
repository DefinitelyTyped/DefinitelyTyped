import { FunctionNode, Node } from "three/webgpu";

export const RaymarchingBox: (
    steps: number | Node,
    callback:
        | ((params: { positionRay: Node<"vec3">; stepSize: Node<"float"> }) => void)
        | FunctionNode<{ positionRay: Node<"vec3">; stepSize: Node<"float"> }>,
) => void;
