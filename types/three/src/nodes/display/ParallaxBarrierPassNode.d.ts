import { Camera } from "../../cameras/Camera.js";
import { Scene } from "../../scenes/Scene.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";
import StereoCompositePassNode from "./StereoCompositePassNode.js";

declare class ParallaxBarrierPassNode extends StereoCompositePassNode {
    readonly isParallaxBarrierPassNode: true;

    constructor(scene: Scene, camera: Camera);
}

export default ParallaxBarrierPassNode;

export const parallaxBarrierPass: (scene: Scene, camera: Camera) => ShaderNodeObject<ParallaxBarrierPassNode>;
