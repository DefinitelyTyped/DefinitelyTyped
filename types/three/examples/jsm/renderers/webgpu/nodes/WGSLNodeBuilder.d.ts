import { Texture } from "three";
import { NodeShaderStage } from "../../../nodes/core/constants.js";
import NodeBuilder from "../../../nodes/core/NodeBuilder.js";
import NodeUniform from "../../../nodes/core/NodeUniform.js";
import NodeVar from "../../../nodes/core/NodeVar.js";
import StructTypeNode from "../../../nodes/core/StructTypeNode.js";
import { ShaderNode } from "../../../nodes/shadernode/ShaderNode.js";
import NodeUniformsGroup from "../../common/nodes/NodeUniformsGroup.js";

type BuiltinStage = NodeShaderStage | "attribute" | "output";
interface BuiltinType {
    name: string;
    property: string;
    type: string;
}

export default class WGSLNodeBuilder extends NodeBuilder {
    builtins: { [key in BuiltinStage]: Map<string, BuiltinType> };
    uniformGroups: { [key in NodeShaderStage]: NodeUniformsGroup };

    needsColorSpaceToLinear(texture: Texture);
    _generateTextureSample(
        texture: Texture,
        textureProperty: string,
        uvSnippet: string,
        depthSnippet: string | null,
        shaderStage: NodeShaderStage,
    ): string;
    _generateVideoSample(textureProperty: string, uvSnippet: string, shaderStage: NodeShaderStage): string;
    _generateTextureSampleLevel(
        texture: Texture,
        textureProperty: string,
        uvSnippet: string,
        levelSnippet: string,
        depthSnippet: string | null,
        shaderStage: NodeShaderStage,
    ): string;
    generateTextureLod(texture: Texture, textureProperty: string, uvSnippet: string, levelSnippet: string): string;
    generateTextureLoad(
        texture: Texture,
        textureProperty: string,
        uvIndexSnippet: string,
        depthSnippet: string | null,
        shaderStage: NodeShaderStage,
    ): string;
    generateTextureStore(
        texture: Texture,
        textureProperty: string,
        uvIndexSnippet: string,
        valueSnippet: string,
    ): string;
    isUnfilterable(texture: Texture): boolean;
    generateTexture(
        texture: Texture,
        textureProperty: string,
        uvSnippet: string,
        depthSnippet: string | null,
        shaderStage: NodeShaderStage,
    ): string;
    generateTextureGrad(
        texture: Texture,
        textureProperty: string,
        uvSnippet: string,
        gradSnippet: string[],
        depthSnippet: string | null,
        shaderStage: NodeShaderStage,
    ): string;
    generateTextureCompare(
        texture: Texture,
        textureProperty: string,
        uvSnippet: string,
        compareSnippet: String,
        shaderStage: NodeShaderStage,
    ): string;
    generateTextureLevel(
        texture: Texture,
        textureProperty: string,
        uvSnippet: string,
        levelSnippet: string,
        depthSnippet: string | null,
        shaderStage: NodeShaderStage,
    ): string;

    getPropertyName<TValue>(node: NodeVar | NodeUniform<TValue>, shaderStage: NodeShaderStage): string;

    getOutputStructName(): string;

    _getUniformGroupCount(shaderStage: NodeShaderStage): number;

    getFunctionOperator(op: string): string | null;
    // getStorageAccess(node: StorageTextureNode | StorageBufferNode): string;

    getBuiltin(name: string, property: string, type: string, shaderStage: BuiltinStage): string;
    getVertexIndex(): string;
    getInstanceIndex(): string;

    buildFunctionCode(shaderNode: ShaderNode): string;

    getFragDepth(): string;
    getFragCoord(): string;
    getFrontFacing(): string;

    getBuiltins(shaderStage: BuiltinStage): string;
    getAttributes(shaderStage: NodeShaderStage): string;

    getStructMembers(struct: StructTypeNode): string;
    getStructs(shaderStage: NodeShaderStage): string;

    getVar(type: string, name: string): string;
    getVars(shaderStage: NodeShaderStage): string;
    getVaryings(shaderStage: NodeShaderStage): string;
    getUniforms(shaderStage: NodeShaderStage): string;
    buildCode(): void;
    getMethod(method: string, output?: string | null): string;

    _getWGSLMethod(method: string);
    // _include(name: string): CodeNode
    _getWGSLVertexCode(shaderData: { [key: string]: string }): string;
    _getWGSLFragmentCode(shaderData: { [key: string]: string }): string;
    _getWGSLComputeCode(shaderData: { [key: string]: string }, workgroupSize: string): string;
    _getWGSLStruct(name: string, vars: string): string;
    _getWGSLStructBinding(name: string, vars: string, access: string, binding: number, group: number): string;
}
