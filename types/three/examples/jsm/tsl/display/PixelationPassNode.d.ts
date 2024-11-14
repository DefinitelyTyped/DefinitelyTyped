import { Camera, Scene } from "three";
import { PassNode, ShaderNodeObject, UniformNode } from "three/tsl";

declare class PixelationPassNode extends PassNode {
    pixelSize: UniformNode<number>;
    normalEdgeStrength: UniformNode<number>;
    depthEdgeStrength: UniformNode<number>;

    readonly isPixelationPassNode: true;

    constructor(
        scene: Scene,
        camera: Camera,
        pixelSize: number,
        normalEdgeStrength: number,
        depthEdgeStrength: number,
    );
}

export const pixelationPass: (
    scene: Scene,
    camera: Camera,
    pixelSize: UniformNode<number>,
    normalEdgeStrength: UniformNode<number>,
    depthEdgeStrength: UniformNode<number>,
) => ShaderNodeObject<PixelationPassNode>;

export default PixelationPassNode;
