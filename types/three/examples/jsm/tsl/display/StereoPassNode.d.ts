import { Camera, PassNode, Scene, StereoCamera } from "three/webgpu";

declare class StereoPassNode extends PassNode {
    readonly isStereoPassNode: true;

    stereo: StereoCamera;

    constructor(scene: Scene, camera: Camera);
}

export default StereoPassNode;

export const stereoPass: (scene: Scene, camera: Camera) => StereoPassNode;
