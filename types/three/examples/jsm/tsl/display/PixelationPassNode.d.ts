import { Camera, Node, PassNode, Scene } from "three/webgpu";

declare class PixelationPassNode extends PassNode {
    pixelSize: number;
    normalEdgeStrength: Node<"float">;
    depthEdgeStrength: Node<"float">;

    readonly isPixelationPassNode: true;

    constructor(
        scene: Scene,
        camera: Camera,
        pixelSize?: number,
        normalEdgeStrength?: Node<"float"> | number,
        depthEdgeStrength?: Node<"float"> | number,
    );
}

export const pixelationPass: (
    scene: Scene,
    camera: Camera,
    pixelSize?: number,
    normalEdgeStrength?: Node<"float"> | number,
    depthEdgeStrength?: Node<"float"> | number,
) => PixelationPassNode;

export default PixelationPassNode;
