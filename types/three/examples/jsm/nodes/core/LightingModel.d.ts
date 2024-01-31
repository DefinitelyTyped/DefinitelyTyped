import Node from "./Node.js";
import NodeBuilder from "./NodeBuilder.js";
import StackNode from "./StackNode.js";

export interface LightingModelReflectedLight {
    directDiffuse: Node;
    directSpecular: Node;
    indirectDiffuse: Node;
    indirectSpecular: Node;
}

export interface LightingModelDirectInput {
    lightDirection: Node;
    lightColor: Node;
    reflectedLight: LightingModelReflectedLight;
}

export interface LightingModelIndirectInput {
    radiance: Node;
    irradiance: Node;
    iblIrradiance: Node;
    ambientOcclusion: Node;
    reflectedLight: LightingModelReflectedLight;
    backdrop: Node;
    backdropAlpha: Node;
    outgoingLight: Node;
}

export default class LightingModel {
    start(input: LightingModelIndirectInput, stack: StackNode, builder: NodeBuilder): void;
    finish(input: LightingModelIndirectInput, stack: StackNode, builder: NodeBuilder): void;
    direct(input: LightingModelDirectInput, stack: StackNode, builder: NodeBuilder): void;
    indirectDiffuse(input: LightingModelIndirectInput, stack: StackNode, builder: NodeBuilder): void;
    indirectSpecular(input: LightingModelIndirectInput, stack: StackNode, builder: NodeBuilder): void;
    ambientOcclusion(input: LightingModelIndirectInput, stack: StackNode, builder: NodeBuilder): void;
}
