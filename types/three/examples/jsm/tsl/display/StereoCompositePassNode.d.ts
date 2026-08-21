import { Camera, CoordinateSystem, PassNode, Scene, StereoCamera } from "three/webgpu";

declare class StereoCompositePassNode extends PassNode {
    readonly isStereoCompositePassNode: true;

    stereo: StereoCamera;

    constructor(scene: Scene, camera: Camera);

    updateStereoCamera(coordinateSystem: CoordinateSystem): void;
}

export default StereoCompositePassNode;
