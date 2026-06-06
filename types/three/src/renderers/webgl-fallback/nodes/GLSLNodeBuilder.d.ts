import { Object3D } from "../../../core/Object3D.js";
import { NodeShaderStage } from "../../../nodes/core/constants.js";
import NodeBuilder from "../../../nodes/core/NodeBuilder.js";
import Renderer from "../../common/Renderer.js";

declare class GLSLNodeBuilder extends NodeBuilder {
    constructor(object: Object3D, renderer: Renderer);

    getUniforms(shaderStage: NodeShaderStage): string;
    getAttributes(shaderStage: NodeShaderStage): string;
    getVaryings(shaderStage: NodeShaderStage): string;
    getInstanceIndex(): string;
    getDrawIndex(): string | null;
    getFrontFacing(): string;
    getFragCoord(): string;
    buildCode(): void;
}

export default GLSLNodeBuilder;
