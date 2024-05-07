import { AnyJson, NodeTypeOption, NodeUpdateType } from "./constants.js";
import NodeBuilder from "./NodeBuilder.js";
import NodeFrame from "./NodeFrame.js";

export default abstract class Node {
    nodeType: NodeTypeOption | null;

    updateType: NodeUpdateType;
    updateBeforeType: NodeUpdateType;

    uuid: string;

    version: number;

    readonly isNode: true;

    readonly id: number;

    constructor(nodeType?: NodeTypeOption | null);

    set needsUpdate(value: boolean);

    get type(): number;

    isGlobal(builder: NodeBuilder): boolean;

    getChildren(): Node[];

    getCacheKey(force?: boolean): string;

    getHash(builder: NodeBuilder): string;

    getUpdateType(): NodeUpdateType;

    getUpdateBeforeType(): NodeUpdateType;

    getNodeType(builder: NodeBuilder, output?: string | null): NodeTypeOption | null;

    getReference(builder: NodeBuilder): Node;

    setup(builder: NodeBuilder): Node | null;

    increaseUsage(builder: NodeBuilder): number;

    analyze(builder: NodeBuilder): void;

    generate(builder: NodeBuilder, output?: string | null): string;

    updateBefore(frame: NodeFrame): void;

    /** This method must be overriden when {@link updateType} !== 'none' */
    update(frame: NodeFrame): void;

    build(builder: NodeBuilder, output?: string | null): string;

    serialize(json: AnyJson): void;

    deserialize(json: AnyJson): void;

    toJSON(meta?: string | { textures: {}; images: {}; nodes: {} }): AnyJson;
}
