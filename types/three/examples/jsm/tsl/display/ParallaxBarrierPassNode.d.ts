import { Camera, Scene } from "three";
import { ShaderNodeObject } from "three/tsl";
import StereoCompositePassNode from "./StereoCompositePassNode.js";

declare class ParallaxBarrierPassNode extends StereoCompositePassNode {
    readonly isParallaxBarrierPassNode: true;

    constructor(scene: Scene, camera: Camera);
}

export default ParallaxBarrierPassNode;

export const parallaxBarrierPass: (scene: Scene, camera: Camera) => ShaderNodeObject<ParallaxBarrierPassNode>;
