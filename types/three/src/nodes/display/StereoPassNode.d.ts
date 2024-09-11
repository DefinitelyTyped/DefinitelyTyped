import { Camera } from "../../cameras/Camera.js";
import { StereoCamera } from "../../cameras/StereoCamera.js";
import { Scene } from "../../scenes/Scene.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";
import PassNode from "./PassNode.js";

declare class StereoPassNode extends PassNode {
    readonly isStereoPassNode: true;

    stereo: StereoCamera;

    constructor(scene: Scene, camera: Camera);
}

export default StereoPassNode;

export const stereoPass: (scene: Scene, camera: Camera) => ShaderNodeObject<StereoPassNode>;
