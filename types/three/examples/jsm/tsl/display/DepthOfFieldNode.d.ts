import { Node, TempNode, TextureNode } from "three/webgpu";

declare class DepthOfFieldNode extends TempNode {
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
