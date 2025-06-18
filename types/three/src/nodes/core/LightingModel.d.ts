import { DirectLightData, DirectRectAreaLightData } from "../lighting/LightsNode.js";
import Node from "./Node.js";
import NodeBuilder from "./NodeBuilder.js";

export interface LightingModelReflectedLight {
    directDiffuse: Node;
    directSpecular: Node;
    indirectDiffuse: Node;
    indirectSpecular: Node;
}

export interface LightingModelDirectInput extends DirectLightData {
    lightNode: Node;
    reflectedLight: LightingModelReflectedLight;
}

export interface LightingModelDirectRectAreaInput extends DirectRectAreaLightData {
    lightNode: Node;
    reflectedLight: LightingModelReflectedLight;
}

declare class LightingModel {
    start(builder: NodeBuilder): void;
    finish(builder: NodeBuilder): void;
    direct(lightData: LightingModelDirectInput, builder: NodeBuilder): void;
    directRectArea(lightData: LightingModelDirectRectAreaInput, builder: NodeBuilder): void;
    indirect(builder: NodeBuilder): void;
    ambientOcclusion(builder: NodeBuilder): void;
}

export default LightingModel;
