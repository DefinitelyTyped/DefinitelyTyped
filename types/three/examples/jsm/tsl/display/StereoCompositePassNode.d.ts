import { Camera, CoordinateSystem, Scene, StereoCamera } from "three";
import { PassNode } from "three/tsl";

declare class StereoCompositePassNode extends PassNode {
    readonly isStereoCompositePassNode: true;

    stereo: StereoCamera;

    constructor(scene: Scene, camera: Camera);

    updateStereoCamera(coordinateSystem: CoordinateSystem): void;
}

export default StereoCompositePassNode;
