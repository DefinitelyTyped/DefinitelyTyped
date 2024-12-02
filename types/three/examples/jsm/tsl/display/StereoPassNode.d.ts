import { Camera, Scene, StereoCamera } from "three";
import { PassNode, ShaderNodeObject } from "three/tsl";

declare class StereoPassNode extends PassNode {
    readonly isStereoPassNode: true;

    stereo: StereoCamera;

    constructor(scene: Scene, camera: Camera);
}

export default StereoPassNode;

export const stereoPass: (scene: Scene, camera: Camera) => ShaderNodeObject<StereoPassNode>;
