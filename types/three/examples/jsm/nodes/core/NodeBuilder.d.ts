import {
    BufferGeometry,
    Material,
    Object3D,
    Renderer,
    Scene,
    Texture,
    TextureEncoding,
    WebGLRenderTarget,
} from '../../../../src/Three';
import FogNode from '../fog/FogNode';
import LightsNode from '../lighting/LightsNode';
import { nodeObject } from '../Nodes';
import { AnyObject, NodeShaderStageOption, NodeTypeOption } from './constants';
import Node from './Node';
import NodeAttribute from './NodeAttribute';
import NodeParser from './NodeParser';
import NodeUniform from './NodeUniform';
import NodeVar from './NodeVar';
import NodeVary from './NodeVary';

export type BuildStageOption = 'construct' | 'analyze' | 'generate';

export interface FlowData {
    code: string;
}

export interface NodeData {
    vertex: AnyObject;
    fragment: AnyObject;
    compute: AnyObject;
}

export type NodeBuilderContext = AnyObject;

export default abstract class NodeBuilder {
    object: Object3D;
    material: Material;
    geometry: BufferGeometry;
    renderer: Renderer;
    parser: NodeParser;

    nodes: Node[];
    updateNodes: Node[];
    hashNodes: { [hash: string]: Node };

    scene: Scene;
    lightsNode: LightsNode;
    fogNode: FogNode;

    vertexShader: string;
    fragmentShader: string;
    computeShader: string;

    shaderStage: NodeShaderStageOption | null;
    buildStage: BuildStageOption | null;
    stack: Node[];
    get node(): Node;

    addStack(node: Node): void;
    removeStack(node: Node): void;
    setHashNode(node: Node, hash: string): void;
    addNode(node: Node): void;
    getMethod(method: string): string;
    getNodeFromHash(hash: string): Node;

    addFlow(shaderStage: NodeShaderStageOption, node: Node): Node;

    setContext(context: NodeBuilderContext): void;
    getContext(): NodeBuilderContext;
    isAvailable(name: string): boolean;

    abstract getInstanceIndex(): string;

    abstract getFrontFacing(): string;

    abstract getTexture(textureProperty: string, uvSnippet: string): string;

    abstract getTextureLevel(textureProperty: string, uvSnippet: string, levelSnippet: string): string;

    abstract getCubeTexture(textureProperty: string, uvSnippet: string): string;
    abstract getCubeTextureLevel(textureProperty: string, uvSnippet: string, levelSnippet: string): string;

    // @TODO: rename to .generateConst()
    getConst(type: NodeTypeOption, value: unknown): Node;
    getType(type: NodeTypeOption): NodeTypeOption;

    generateMethod(method: string): string;

    getAttribute(name: string, type: NodeTypeOption): NodeAttribute;

    getPropertyName(node: Node, shaderStage: NodeShaderStageOption): string;
    isVector(type: NodeTypeOption): boolean;

    isMatrix(type: NodeTypeOption): boolean;
    isReference(type: NodeTypeOption): boolean;
    isShaderStage(shaderStage: NodeShaderStageOption): boolean;
    getTextureEncodingFromMap(map: Texture | WebGLRenderTarget | unknown): TextureEncoding;
    getComponentType(type: NodeTypeOption): NodeTypeOption;
    getVectorType(type: NodeTypeOption): NodeTypeOption;
    getTypeFromLength(length: number): NodeTypeOption;
    getTypeLength(type: NodeTypeOption): number;
    getVectorFromMatrix(type: NodeTypeOption): NodeTypeOption;
    getDataFromNode(node: Node, shaderStage?: NodeShaderStageOption): NodeData;
    getNodeProperties(node: Node, shaderStage?: NodeShaderStageOption): AnyObject;
    getUniformFromNode(node: Node, shaderStage: NodeShaderStageOption, type: NodeTypeOption): NodeUniform;
    getVarFromNode(node: Node, type: NodeTypeOption, shaderStage?: NodeShaderStageOption): NodeVar;
    getVaryFromNode(node: Node, type: NodeTypeOption): NodeVary;
    getCodeFromNode(node: Node, type: NodeTypeOption, shaderStage?: NodeShaderStageOption): string;
    addFlowCode(code: string): void;
    getFlowData(node: Node, shaderStage: NodeShaderStageOption): FlowData;
    flowNode(node: Node): FlowData;
    flowChildNode(node: Node, output?: string | null): FlowData;
    flowNodeFromShaderStage(
        shaderStage: NodeShaderStageOption,
        node: Node,
        output?: string | null,
        propertyName?: string,
    ): FlowData;
    abstract getAttributes(shaderStage: NodeShaderStageOption): string;
    abstract getVarys(shaderStage: NodeShaderStageOption): string;
    getVars(shaderStage: NodeShaderStageOption): string;
    abstract getUniforms(stage: NodeShaderStageOption): string;
    getCodes(shaderStage: NodeShaderStageOption): string;
    getHash(): string;
    setShaderStage(shaderStage: NodeShaderStageOption): void;
    getShaderStage(): NodeShaderStageOption;
    setBuildStage(buildStage: BuildStageOption): void;
    getBuildStage(): BuildStageOption;
    abstract buildCode(): void;
    build(): this;
    format(snippet: string, fromType: NodeTypeOption, toType: NodeTypeOption): string;
    getSignature(): string;
}
