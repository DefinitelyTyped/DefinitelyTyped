import { EventDispatcher } from "../../core/EventDispatcher.js";
import { NodeUpdateType } from "./constants.js";
import NodeBuilder from "./NodeBuilder.js";
import NodeFrame from "./NodeFrame.js";
interface NodeJSONMeta {
    textures: {
        [key: string]: unknown;
    };
    images: {
        [key: string]: unknown;
    };
    nodes: {
        [key: string]: NodeJSONIntermediateOutputData;
    };
}
interface NodeJSONMetadata {
    version: number;
    type: "Node";
    generator: "Node.toJSON";
}
interface NodeJSONInputNodes {
    [property: string]:
        | string[]
        | {
            [index: string]: string | undefined;
        }
        | string
        | undefined;
}
export interface NodeJSONInputData {
    inputNodes?: NodeJSONInputNodes | undefined;
    meta: {
        textures: {
            [key: string]: unknown;
        };
        nodes: {
            [key: string]: Node;
        };
    };
}
export interface NodeJSONIntermediateOutputData {
    uuid: string;
    type: string | undefined;
    meta?: NodeJSONMeta | undefined;
    metadata?: NodeJSONMetadata;
    inputNodes?: NodeJSONInputNodes | undefined;
    textures?: unknown[];
    images?: unknown[];
    nodes?: NodeJSONIntermediateOutputData[];
}
interface NodeJSONOutputData {
    uuid: string;
    type: string | undefined;
    metadata?: NodeJSONMetadata;
    inputNodes?: NodeJSONInputNodes | undefined;
    textures?: unknown[];
    images?: unknown[];
    nodes?: NodeJSONOutputData[];
}
declare class Node extends EventDispatcher<{
    dispose: {};
}> {
    nodeType: string | null;
    updateType: NodeUpdateType;
    updateBeforeType: NodeUpdateType;
    updateAfterType: NodeUpdateType;
    uuid: string;
    version: number;
    _cacheKey: string | null;
    _cacheKeyVersion: number;
    global: boolean;
    readonly isNode: true;
    readonly id: number;
    self?: this;
    constructor(nodeType?: string | null);
    set needsUpdate(value: boolean);
    get type(): string | undefined;
    onUpdate(callback: (this: this, frame: NodeFrame) => unknown, updateType: NodeUpdateType): this;
    onFrameUpdate(callback: (this: this, frame: NodeFrame) => void): this;
    onRenderUpdate(callback: (this: this, frame: NodeFrame) => void): this;
    onObjectUpdate(callback: (this: this, frame: NodeFrame) => void): this;
    onReference(callback: (this: this, frame: NodeBuilder | NodeFrame) => unknown): this;
    getSelf(): this;
    updateReference(state: NodeBuilder | NodeFrame): unknown;
    isGlobal(builder: NodeBuilder): boolean;
    getChildren(): Generator<Node, void, unknown>;
    dispose(): void;
    traverse(callback: (node: Node) => void): void;
    getCacheKey(force?: boolean): string;
    getScope(): this;
    getHash(builder: NodeBuilder): string;
    getUpdateType(): NodeUpdateType;
    getUpdateBeforeType(): NodeUpdateType;
    getUpdateAfterType(): NodeUpdateType;
    getElementType(builder: NodeBuilder): "bool" | "int" | "float" | "vec2" | "vec3" | "vec4" | "uint" | null;
    getNodeType(builder: NodeBuilder): string | null;
    getShared(builder: NodeBuilder): Node;
    setup(builder: NodeBuilder): unknown;
    analyze(builder: NodeBuilder): void;
    generate(builder: NodeBuilder, output?: string | null): string | null | undefined;
    updateBefore(frame: NodeFrame): void;
    updateAfter(frame: NodeFrame): void;
    update(frame: NodeFrame): void;
    build(builder: NodeBuilder, output?: string | null): string | null;
    getSerializeChildren(): Generator<import("./NodeUtils.js").NodeChild, void, unknown>;
    serialize(json: NodeJSONIntermediateOutputData): void;
    deserialize(json: NodeJSONInputData): void;
    toJSON(meta?: NodeJSONMeta | string): NodeJSONOutputData;
}
export default Node;
export declare function registerNode(type: string, nodeClass: {
    new(...args: any[]): Node;
}): string | undefined;
export declare function createNodeFromType(type: string): Node | undefined;
/**
 * @deprecated Function addNodeClass() is deprecated. Use registerNodeClass() instead.
 */
export declare function addNodeClass(type: string, nodeClass: {
    new(...args: any[]): Node;
}): void;
