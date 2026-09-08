import { Camera, Node } from "three/webgpu";

export const depthAwareBlur: (
    inputNode: Node,
    depthNode: Node,
    directionNode: Node<"vec2">,
    camera: Camera,
    sharpness?: Node<"float"> | number,
    radius?: Node<"float"> | number,
) => Node<"float">;
