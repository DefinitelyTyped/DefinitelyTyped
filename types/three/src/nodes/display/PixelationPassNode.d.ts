import { Camera } from "../../cameras/Camera.js";
import { Scene } from "../../scenes/Scene.js";
import UniformNode from "../core/UniformNode.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";
import PassNode from "./PassNode.js";

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
