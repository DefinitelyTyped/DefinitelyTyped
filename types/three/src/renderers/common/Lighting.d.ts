import { Camera } from "../../cameras/Camera.js";
import { Object3D } from "../../core/Object3D.js";
import { Light } from "../../lights/Light.js";
import LightsNode from "../../nodes/lighting/LightsNode.js";
import ChainMap from "./ChainMap.js";

declare class Lighting extends ChainMap<[Object3D, Camera], LightsNode> {
    constructor();

    createNode(lights?: Light[]): LightsNode;

    getNode(scene: Object3D, camera: Camera): LightsNode;
}

export default Lighting;
