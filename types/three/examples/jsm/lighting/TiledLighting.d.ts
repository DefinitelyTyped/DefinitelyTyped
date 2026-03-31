import { Lighting } from "three/webgpu";
import { Light } from "../../../src/lights/Light.js";
import TiledLightsNode from "../tsl/lighting/TiledLightsNode.js";

export class TiledLighting extends Lighting {
    constructor();

    createNode(lights?: Light[]): TiledLightsNode;
}
