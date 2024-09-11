import { Camera } from "../../cameras/Camera.js";
import { Scene } from "../../scenes/Scene.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";
import StereoCompositePassNode from "./StereoCompositePassNode.js";

declare class AnaglyphPassNode extends StereoCompositePassNode {
    readonly isAnaglyphPassNode: true;

    constructor(scene: Scene, camera: Camera);
}

export default AnaglyphPassNode;

export const anaglyphPass: (scene: Scene, camera: Camera) => ShaderNodeObject<AnaglyphPassNode>;
