import { Node, TextureNode } from "three/webgpu";

declare class DepthOfFieldNode extends Node {
    textureNode: TextureNode;
    viewZNode: Node;

    focusDistanceNode: Node;
    focalLengthNode: Node;
    bokehScaleNode: Node;

    constructor(
        textureNode: TextureNode,
        viewZNode: Node,
        focusDistanceNode: Node,
        focalLengthNode: Node,
        bokehScaleNode: Node,
    );
}

export default DepthOfFieldNode;

export const dof: (
    node: Node,
    viewZNode: Node,
    focusDistance?: Node | number,
    focalLength?: Node | number,
    bokehScale?: Node | number,
) => DepthOfFieldNode;
