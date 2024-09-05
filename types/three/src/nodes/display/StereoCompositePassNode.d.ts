import { Camera } from "../../cameras/Camera.js";
import { StereoCamera } from "../../cameras/StereoCamera.js";
import { CoordinateSystem } from "../../constants.js";
import { Scene } from "../../scenes/Scene.js";
import PassNode from "./PassNode.js";

declare class StereoCompositePassNode extends PassNode {
    readonly isStereoCompositePassNode: true;

    stereo: StereoCamera;

    constructor(scene: Scene, camera: Camera);

    updateStereoCamera(coordinateSystem: CoordinateSystem): void;
}

export default StereoCompositePassNode;
