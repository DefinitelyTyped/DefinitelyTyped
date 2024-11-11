import { Camera } from "../../cameras/Camera.js";
import { Object3D } from "../../core/Object3D.js";
declare class RenderBundle {
    scene: Object3D;
    camera: Camera;
    constructor(scene: Object3D, camera: Camera);
    clone(): RenderBundle & this;
}
export default RenderBundle;
