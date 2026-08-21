import ContextNode from "../core/ContextNode.js";
import LightingModel, { LightingModelReflectedLight } from "../core/LightingModel.js";
import Node from "../core/Node.js";
import LightingNode from "./LightingNode.js";
import LightsNode from "./LightsNode.js";

export interface LightingContext {
    radiance: Node;
    irradiance: Node;
    iblIrradiance: Node;
    ambientOcclusion: Node;
    reflectedLight: LightingModelReflectedLight;
    materialLightings: LightingNode[];
    backdrop: Node;
    backdropAlpha: Node;
}

export default class LightingContextNode extends ContextNode<unknown> {
    lightingModel: LightingModel | null;
    materialLightings: LightingNode[];
    backdropNode: Node | null;
    backdropAlphaNode: Node | null;

    constructor(
        lightsNode: LightsNode,
        lightingModel?: LightingModel | null,
        materialLightings?: LightingNode[],
        backdropNode?: Node | null,
        backdropAlphaNode?: Node | null,
    );

    getContext(): LightingContext;
}

export const lightingContext: (
    node: LightsNode,
    lightingModel?: LightingModel | null,
    materialLightings?: LightingNode[],
    backdropNode?: Node | null,
    backdropAlphaNode?: Node | null,
) => LightingContextNode;
