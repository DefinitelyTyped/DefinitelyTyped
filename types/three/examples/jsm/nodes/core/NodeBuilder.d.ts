import {
    BufferGeometry,
    Material,
    Object3D,
    Renderer,
    Texture,
    TextureEncoding,
    WebGLRenderTarget,
} from '../../../../src/Three.js';
import FogNode from '../fog/FogNode.js';
import LightsNode from '../lighting/LightsNode.js';
import { AnyObject, NodeShaderStageOption, NodeTypeOption } from './constants.js';
import Node from './Node.js';
import NodeAttribute from './NodeAttribute.js';
import NodeCache from './NodeCache.js';
import NodeParser from './NodeParser.js';
import NodeUniform from './NodeUniform.js';
import NodeVar from './NodeVar.js';
import NodeVarying from './NodeVarying.js';

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

    lightsNode: LightsNode;
    fogNode: FogNode;

    vertexShader: string;
    fragmentShader: string;
    computeShader: string;

    cache: NodeCache;
    globalCache: NodeCache;

    /**
     * @TODO used to be missing. check the actual type later
     */
    flowsData: any;

    shaderStage: NodeShaderStageOption | null;
    buildStage: BuildStageOption | null;
    stack: Node[];

    setHashNode(node: Node, hash: string): void;
    addNode(node: Node): void;
    get currentNode(): Node;
    getMethod(method: string): string;
    getNodeFromHash(hash: string): Node;

    addFlow(shaderStage: NodeShaderStageOption, node: Node): Node;

    setContext(context: NodeBuilderContext): void;
    getContext(): NodeBuilderContext;
    isAvailable(name: string): boolean;

    abstract getInstanceIndex(): string;

    abstract getFrontFacing(): string;

    abstract getFragCoord(): string;

    isFlipY(): boolean;

    // @TODO: rename to .generateConst()
    getConst(type: NodeTypeOption, value?: unknown): Node;
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
    getUniformFromNode(
        node: Node,
        type: NodeTypeOption,
        shaderStage?: NodeShaderStageOption,
        name?: string | null,
    ): NodeUniform<string>;
    getVarFromNode(node: Node, type: NodeTypeOption, shaderStage?: NodeShaderStageOption): NodeVar;
    getVaryFromNode(node: Node, type: NodeTypeOption): NodeVarying;
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
    hasGeometryAttribute(name: string): boolean;
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
