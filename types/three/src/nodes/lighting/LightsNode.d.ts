import { Light } from "../../lights/Light.js";
import Node from "../core/Node.js";
import { NodeBuilder } from "../Nodes.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";
import LightingNode from "./LightingNode.js";

declare class LightsNode extends Node {
    constructor();

    setupLightsNode(builder: NodeBuilder): void;

    setupLights(builder: NodeBuilder, lightNodes: LightingNode[]): void;

    setLights(lights: Light[]): this;

    getLights(): Light[];

    get hasLights(): boolean;
}

export default LightsNode;

export const lights: (lights?: Light[]) => ShaderNodeObject<LightsNode>;
