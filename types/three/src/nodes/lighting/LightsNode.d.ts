import { Light } from "../../lights/Light.js";
import Node from "../core/Node.js";
import { NodeBuilder } from "../Nodes.js";
import LightingNode from "./LightingNode.js";

export interface DirectLightData {
    lightDirection: Node;
    lightColor: Node;
}

export interface DirectRectAreaLightData {
    lightColor: Node;
    lightPosition: Node;
    halfWidth: Node;
    halfHeight: Node;
    ltc_1: Node;
    ltc_2: Node;
}

declare class LightsNode extends Node {
    totalDiffuseNode: Node;
    totalSpecularNode: Node;
    outgoingLightNode: Node;

    constructor();

    setupLightsNode(builder: NodeBuilder): void;

    setupDirectLight(builder: NodeBuilder, lightNode: Node, lightData: DirectLightData): void;

    setupDirectRectAreaLight(builder: NodeBuilder, lightNode: Node, lightData: DirectRectAreaLightData): void;

    setupLights(builder: NodeBuilder, lightNodes: LightingNode[]): void;

    getLightNodes(): LightingNode[];

    setLights(lights: Light[]): this;

    getLights(): Light[];

    get hasLights(): boolean;
}

export default LightsNode;

export const lights: (lights?: Light[]) => LightsNode;
