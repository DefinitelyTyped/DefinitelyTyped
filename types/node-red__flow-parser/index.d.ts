export interface ObjectTypes {
    readonly Node: unique symbol;
    readonly ConfigNode: unique symbol;
    readonly Group: unique symbol;
    readonly Flow: unique symbol;
    readonly Subflow: unique symbol;
}

export const types: ObjectTypes;

export type Walkable = NRFlow | NRSubflow | NRNode | NRConfigNode | NRGroup;
export type WalkFunction = (obj: Walkable) => void;

export function parseFlow(flow: readonly unknown[]): NRFlowSet;

export interface NRFlowSet {
    flows: Map<string, NRFlow>;
    nodes: Map<string, NRSubflowInstance | NRNode>;
    configNodes: Map<string, NRConfigNode>;
    subflows: Map<string, NRSubflow>;
    groups: Map<string, NRGroup>;
    wires: NRWire[];
    globals: NRGlobalFlow;
    export(): Array<Record<string, unknown>>;
    walk(callback: WalkFunction): void;
}

export interface NRObject {
    id: string;
    z: string;
    type: string;
    disabled: boolean;
    config: Record<string, unknown>;
    parent: NRFlow | NRSubflow | null;
    setParent(parent: NRFlow | NRSubflow): void;
    export(): Record<string, unknown>;
    walk(callback: WalkFunction): void;
    walkContents(callback: WalkFunction): void;
}

export interface NRContainer extends NRObject {
    nodes: Map<string, NRSubflowInstance | NRNode>;
    addNode(node: NRSubflowInstance | NRNode): void;
    exportContents(): Array<Record<string, unknown>>;
}

export interface NRFlow extends Omit<NRContainer, "z"> {
    z: undefined;
    TYPE: ObjectTypes["Flow"];
    info: string | undefined;
    configs: Map<string, NRConfigNode>;
    subflows: Map<string, NRSubflow>;
    groups: Map<string, NRGroup>;
    addSubflow(subflow: NRSubflow): void;
    addConfigNode(configNode: NRConfigNode): void;
    addGroup(group: NRGroup): void;
}

export interface NRGlobalFlow extends Omit<NRFlow, "id" | "type"> {
    id: undefined;
    type: undefined;
}

export interface NRSubflow extends NRContainer {
    TYPE: ObjectTypes["Subflow"];
    info: string | undefined;
    configs: Map<string, NRConfigNode>;
    subflows: Map<string, NRSubflow>;
    groups: Map<string, NRGroup>;
    instances: Map<string, NRSubflowInstance>;
    category?: string | undefined;
    color?: string | undefined;
    icon?: string | undefined;
    inputLabels?: string[] | undefined;
    outputLabels?: string[] | undefined;
    in?: Array<{ x: number; y: number; wires: Array<{ id: string }> }> | undefined;
    out?: Array<{ x: number; y: number; wires: Array<{ id: string; port: number }> }> | undefined;
    env?: unknown;
    meta?: unknown;
    _ownProperties: string[];
    addSubflow(subflow: NRSubflow): void;
    addConfigNode(configNode: NRConfigNode): void;
    addGroup(group: NRGroup): void;
    addInstance(node: NRSubflowInstance): void;
}

export interface NRNode extends NRObject {
    TYPE: ObjectTypes["Node"];
    x: number;
    y: number;
    groupId?: string | undefined;
    group?: NRGroup | undefined;
    w?: number | undefined;
    h?: number | undefined;
    showLabel: boolean;
    inputLabels: string[];
    outputLabels: string[];
    icon?: string | undefined;
    wires: string[][];
    outputCount: number;
    info: string | undefined;
    inboundWires: NRWire[];
    outboundWires: NRWire[];
    setGroup(group?: NRGroup): void;
    getSiblingNodes(followVirtual?: boolean): NRNode[];
    getPreviousNodes(followVirtual?: boolean): NRNode[];
    getNextNodes(followVirtual?: boolean): NRNode[];
    getDownstreamNodes(followVirtual?: boolean): NRNode[];
    getUpstreamNodes(followVirtual?: boolean): NRNode[];
    getConnectedNodes(followVirtual?: boolean): NRNode[];
    addOutboundWire(wire: NRWire): void;
    addInboundWire(wire: NRWire): void;
}

export interface NRSubflowInstance extends NRNode {
    subflowId: string;
    subflow: NRSubflow;
    setSubflow(subflow: NRSubflow): void;
}

export interface NRWire {
    sourceNode: NRNode;
    sourcePortIndex: number;
    destinationNode: NRNode;
    destinationPortIndex: number;
    virtual: boolean;
    toString(): string;
}

export interface NRConfigNode extends NRObject {
    TYPE: ObjectTypes["ConfigNode"];
    users: Set<NRObject>;
    addUser(node: NRObject): void;
}

export interface NRGroup extends NRContainer {
    TYPE: ObjectTypes["Group"];
    w: number;
    h: number;
    groupId?: string | undefined;
    group?: NRGroup | undefined;
    style: Record<string, unknown> | undefined;
    info: string | undefined;
    _nodes: string[];
    setGroup(group: NRGroup): void;
    addNode(node: NRSubflowInstance | NRNode): void;
}
