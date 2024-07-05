import { BufferGeometry, Material, Object3D, Renderer, Texture } from "three";
import FogNode from "../fog/FogNode.js";
import LightsNode from "../lighting/LightsNode.js";
import { NodeShaderStage } from "./constants.js";
import Node from "./Node.js";
import NodeAttribute from "./NodeAttribute.js";
import NodeCache from "./NodeCache.js";
import NodeParser from "./NodeParser.js";
import NodeUniform from "./NodeUniform.js";
import NodeVar from "./NodeVar.js";
import NodeVarying from "./NodeVarying.js";
import StackNode from "./StackNode.js";

export type BuildStageOption = "construct" | "analyze" | "generate";

export interface FlowData {
    code: string;
}

export interface NodeData {
    vertex: { [key: string]: unknown };
    fragment: { [key: string]: unknown };
    compute: { [key: string]: unknown };
}

export type NodeBuilderContext = { [key: string]: unknown };

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

    shaderStage: NodeShaderStage | null;
    buildStage: BuildStageOption | null;
    stack: StackNode;

    setHashNode(node: Node, hash: string): void;
    addNode(node: Node): void;
    get currentNode(): Node;
    isFilteredTexture(texture: Texture): boolean;
    getMethod(method: string): string;
    getNodeFromHash(hash: string): Node;

    addFlow(shaderStage: NodeShaderStage, node: Node): Node;

    setContext(context: NodeBuilderContext): void;
    getContext(): NodeBuilderContext;
    setCache(cache: NodeCache): void;
    getCache(): NodeCache;
    getCacheFromNode(node: Node, parent?: boolean): NodeCache;
    isAvailable(name: string): boolean;

    abstract getInstanceIndex(): string;

    abstract getFrontFacing(): string;

    abstract getFragCoord(): string;

    isFlipY(): boolean;

    // @TODO: rename to .generateConst()
    getConst(type: string, value?: unknown): Node;
    getType(type: string): string;

    generateMethod(method: string): string;

    getAttribute(name: string, type: string): NodeAttribute;

    getPropertyName<TValue>(node: NodeVar | NodeUniform<TValue>, shaderStage: NodeShaderStage): string;
    isVector(type: string): boolean;

    isMatrix(type: string): boolean;
    isReference(type: string): boolean;
    getElementType(type: string): string | null;
    getComponentType(type: string): string | null;
    getVectorType(type: string): string;
    getTypeFromLength(length: number): string;
    getTypeLength(type: string): number;
    getVectorFromMatrix(type: string): string;
    getDataFromNode(node: Node, shaderStage?: NodeShaderStage): NodeData;
    getNodeProperties(node: Node, shaderStage?: NodeShaderStage): { [key: string]: unknown };
    getUniformFromNode(
        node: Node,
        type: string,
        shaderStage?: NodeShaderStage,
        name?: string | null,
    ): NodeUniform<string>;
    getVarFromNode(node: Node, type: string, shaderStage?: NodeShaderStage): NodeVar;
    getVaryFromNode(node: Node, type: string): NodeVarying;
    getCodeFromNode(node: Node, type: string, shaderStage?: NodeShaderStage): string;
    addFlowCode(code: string): void;
    getFlowData(node: Node, shaderStage: NodeShaderStage): FlowData;
    flowNode(node: Node): FlowData;
    flowChildNode(node: Node, output?: string | null): FlowData;
    flowNodeFromShaderStage(
        shaderStage: NodeShaderStage,
        node: Node,
        output?: string | null,
        propertyName?: string,
    ): FlowData;
    hasGeometryAttribute(name: string): boolean;
    abstract getAttributes(shaderStage: NodeShaderStage): string;
    abstract getVaryings(shaderStage: NodeShaderStage): string;
    getVars(shaderStage: NodeShaderStage): string;
    abstract getUniforms(stage: NodeShaderStage): string;
    getCodes(shaderStage: NodeShaderStage): string;
    getHash(): string;
    setShaderStage(shaderStage: NodeShaderStage): void;
    getShaderStage(): NodeShaderStage;
    setBuildStage(buildStage: BuildStageOption): void;
    getBuildStage(): BuildStageOption;
    abstract buildCode(): void;
    build(): this;
    format(snippet: string, fromType: string, toType: string): string;
    getSignature(): string;
}
