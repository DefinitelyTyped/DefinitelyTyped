import { Object3D, Renderer } from "three";
import { NodeShaderStage } from "../../../nodes/core/constants.js";
import Node from "../../../nodes/core/Node.js";
import NodeBuilder from "../../../nodes/core/NodeBuilder.js";
import SlotNode from "./SlotNode.js";

export class WebGLNodeBuilder extends NodeBuilder {
    constructor(
        object: Object3D,
        renderer: Renderer,
        shader: { uniforms: any; vertexShader: any; fragmentShader: any },
    );

    addSlot(shaderStage: NodeShaderStage, slotNode: SlotNode): Node;

    getUniforms(shaderStage: string): string;

    getAttributes(shaderStage: string): string;

    getVarys(shaderStage: string): string;

    addCode(shaderStage: string, source: string, code: string, scope?: this): string;
    addCodeAfterInclude(shaderStage: string, snippet: string, code: string): string;

    replaceCode(shaderStage: string, source: string, target: string, scope?: this): void;
    parseInclude(shaderStage: string, ...includes: string[]): void;

    getInstanceIndex(): string;
    getFrontFacing(): string;
    getFragCoord(): "gl_FragCoord";
    isFlipY(): true;

    buildCode(): void;
    build(): this;

    getSlot(shaderStage: string, name: string): Node;
}
