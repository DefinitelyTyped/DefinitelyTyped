import { Object3D } from "../../core/Object3D.js";
import { Light } from "../../lights/Light.js";
import LightsNode from "../../nodes/lighting/LightsNode.js";

declare class Lighting {
    createNode(lights?: Light[]): LightsNode;

    getNode(scene: Object3D): LightsNode;
}

export default Lighting;
