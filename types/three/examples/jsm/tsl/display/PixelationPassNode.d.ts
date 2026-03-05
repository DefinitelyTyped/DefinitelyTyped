import { Camera, Node, PassNode, Scene } from "three/webgpu";

declare class PixelationPassNode extends PassNode {
    pixelSize: Node<"float">;
    normalEdgeStrength: Node<"float">;
    depthEdgeStrength: Node<"float">;

    readonly isPixelationPassNode: true;

    constructor(
        scene: Scene,
        camera: Camera,
        pixelSize: Node,
        normalEdgeStrength: Node,
        depthEdgeStrength: Node,
    );
}

export const pixelationPass: (
    scene: Scene,
    camera: Camera,
    pixelSize: Node | number,
    normalEdgeStrength: Node | number,
    depthEdgeStrength: Node | number,
) => PixelationPassNode;

export default PixelationPassNode;
