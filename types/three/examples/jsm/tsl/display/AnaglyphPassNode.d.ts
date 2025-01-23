import { ShaderNodeObject } from "three/tsl";
import { Camera, Scene } from "three/webgpu";
import StereoCompositePassNode from "./StereoCompositePassNode.js";

declare class AnaglyphPassNode extends StereoCompositePassNode {
    readonly isAnaglyphPassNode: true;

    constructor(scene: Scene, camera: Camera);
}

export default AnaglyphPassNode;

export const anaglyphPass: (scene: Scene, camera: Camera) => ShaderNodeObject<AnaglyphPassNode>;
