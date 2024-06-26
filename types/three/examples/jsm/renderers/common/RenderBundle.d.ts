import { Camera, Object3D } from "three";
declare class RenderBundle {
    scene: Object3D;
    camera: Camera;
    constructor(scene: Object3D, camera: Camera);
    clone(): RenderBundle & this;
}
export default RenderBundle;
