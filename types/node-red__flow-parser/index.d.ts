/**
 * parseFlow - Parses a Node-RED Flow object
 *
 * @param {array} flow An Flow JSON Array
 * @return {NRFlowSet} Description
 */
export function parseFlow(flow: unknown[]): NRFlowSet;

export type Walkable = NRFlow | NRSubflow | NRNode | NRConfigNode | NRGroup;
export type WalkFunction = (obj: Walkable) => void;
/**
 * NRFlowSet - Description
 */
export class NRFlowSet {
    constructor(flowConfig: unknown[]);
    flows: Map<string, NRFlow>;
    nodes: Map<string, NRSubflowInstance | NRNode>;
    configNodes: Map<string, NRConfigNode>;
    subflows: Map<string, NRSubflow>;
    groups: Map<string, NRGroup>;
    wires: NRWire[];
    globals: NRFlow;
    /**
     * Export the flow as a Node Array that can be saves as JSON and loaded by Node-RED
     *
     * @return {Array} an array of node-red objects
     */
    export(): unknown[]; // TODO: FIX THIS
    /**
     * Call the provided callback function for every object in the flow.
     * The objects are recursively visited in the following order:
     *
     *  - Subflow definitions
     *    - Config nodes scoped to this subflow
     *    - Groups
     *    - Nodes
     *  - Global Config nodes
     *  - Flows
     *    - Config nodes scoped to this flow
     *    - Groups
     *    - Nodes
     *
     * @param {WalkFunction} callback - A function to call for every object in the flow.
     *                              The function will receive the object as its
     *                              first argument
     */
    walk(callback: WalkFunction): void;
}

/**
 * NRObject - Description
 */
export class NRObject {
    /**
     * constructor - Description
     * @param {type} config Description
     */
    constructor(config: unknown);
    id: string;
    z: string;
    type: string;
    disabled: boolean;
    config: Record<string, unknown>;
    parent: NRFlow | NRSubflow;
    /**
     * setParent - Sets the parent object of this object. Either a Flow or Subflow
     * @param {NRFlow|NRSubflow} parent Description
     */
    setParent(parent: NRFlow | NRSubflow): void;
    /**
     * export - Exports this object as an Object that can be included in a flow
     * @return {unknown} the exported object
     */
    export(): unknown;
    walk(callback: WalkFunction): void;
    walkContents(callback: WalkFunction): void;
}

/**
 * NRContainer - Description
 * nodes - Flow nodes in this flow/subflow/group
 */
export class NRContainer extends NRObject {
    nodes: Map<string, NRSubflowInstance | NRNode>;
    /**
     * addNode - Description
     * @param {NRNode} node Description
     */
    addNode(node: NRNode): void;
    exportContents(): unknown[];
}

/**
 * NRFlow - Description
 */
export class NRFlow extends NRContainer {
    TYPE: ObjectTypes["Flow"];
    info: string;
    configs: Map<string, NRConfigNode>;
    subflows: Map<string, NRSubflow>;
    groups: Map<string, NRGroup>;
    /**
     * addSubflow - Description
     * @param {NRSubflow} subflow Description
     */
    addSubflow(subflow: NRSubflow): void;
    /**
     * addConfigNode - Description
     * @param {NRConfigNode} configNode Description
     */
    addConfigNode(configNode: NRConfigNode): void;
    /**
     * addGroup - Description
     * @param {NRGroup} group Description
     */
    addGroup(group: NRGroup): void;
}

/**
 * NRSubflow - Description
 */
export class NRSubflow extends NRContainer {
    TYPE: ObjectTypes["Subflow"];
    info: string;
    configs: Map<string, NRConfigNode>;
    subflows: Map<string, NRSubflow>;
    groups: Map<string, NRGroup>;
    /**
     * addSubflow - Description
     * @param {NRSubflow} subflow Description
     */
    addSubflow(subflow: NRSubflow): void;
    /**
     * addConfigNode - Description
     * @param {NRConfigNode} configNode Description
     */
    addConfigNode(configNode: NRConfigNode): void;
    /**
     * addGroup - Description
     * @param {NRGroup} group Description
     */
    addGroup(group: NRGroup): void;
    instances: Map<string, NRSubflowInstance>;
    in?: Array<{ x: number; y: number; wires: Array<{ id: string }> }>;
    out?: Array<{ x: number; y: number; wires: Array<{ id: string; port: number }> }>;
    _ownProperties: string[];
    /**
     * addInstance - Description
     *
     * @param {NRSubflowInstance} node Description
     */
    addInstance(node: NRSubflowInstance): void;
}

/**
 * NRSubflowInstance - Description
 */
export class NRSubflowInstance extends NRNode {
    subflowId: string;
    subflow: NRSubflow;
    /**
     * setSubflow - Description
     * @param {NRSubflow} subflow The Subflow this is an instance of
     */
    setSubflow(subflow: NRSubflow): void;
}

/**
 * NRNode - Description
 */
export class NRNode extends NRObject {
    TYPE: ObjectTypes["Node"];
    x: number;
    y: number;
    groupId?: string;
    w: number;
    h: number;
    showLabel: boolean;
    inputLabels: string[];
    outputLabels: string[];
    icon: string;
    wires: string[][];
    outputCount: number;
    info: string;
    inboundWires: NRWire[];
    outboundWires: NRWire[];
    /**
     * setGroup - Set the group this node is in
     *
     * @param {NRGroup} group the group this node is a member of
     */
    setGroup(group: NRGroup): void;
    group?: NRGroup;
    /**
     * getSiblingNodes - Get the nodes wired directly to this node
     * @param {boolean} followVirtual whether to follow Link node virtual wires
     * @return {string[]} An array of node ids
     */
    getSiblingNodes(followVirtual: boolean): NRNode[];
    /**
     * getPreviousNodes - Get the nodes wired to this node's inputs
     * @param {boolean} followVirtual whether to follow Link node virtual wires
     * @return {string[]} An array of node ids
     */
    getPreviousNodes(followVirtual: boolean): NRNode[];
    /**
     * getNextNodes - Get the nodes wired to this node's outputs
     * @param {boolean} followVirtual whether to follow Link node virtual wires
     * @return {string[]} An array of node ids
     */
    getNextNodes(followVirtual: boolean): NRNode[];
    /**
     * getDownstreamNodes - Get all nodes reachable from this nodes's outputs
     * @param {boolean} followVirtual whether to follow Link node virtual wires
     * @return {string[]} An array of node ids
     */
    getDownstreamNodes(followVirtual: boolean): NRNode[];
    /**
     * getUpstreamNodes - Get all nodes reachable from this nodes's inputs
     * @param {boolean} followVirtual whether to follow Link node virtual wires
     * @return {string[]} An array of node ids
     */
    getUpstreamNodes(followVirtual: boolean): NRNode[];
    /**
     * getConnectedNodes - Get all nodes, not including this one, reachable from its inputs and outputs
     * @param {boolean} followVirtual whether to follow Link node virtual wires
     * @return {string[]} An array of node ids
     */
    getConnectedNodes(followVirtual: boolean): NRNode[];
    /**
     * addOutboundWire - Add an outbound wire to this node
     * @param {NRWire} wire the outbound wire
     */
    addOutboundWire(wire: NRWire): void;
    /**
     * addInboundWire - Add an inbound wire to this node
     * @param {NRWire} wire the inbound wire
     */
    addInboundWire(wire: NRWire): void;
}

/**
 * NRWire - Description
 * sourceNode - source of the wire
 * sourcePortIndex - index of the source port
 * destinationNode - destination of the wire
 * destinationPortIndex - index of the destination port
 * virtual - whether this is a virtual wire between link nodes
 */
export class NRWire {
    /**
     * constructor - Description
     *
     * @param {type} config Description
     */
    constructor(
        sourceNode: NRNode,
        sourcePortIndex: number,
        destinationNode: NRNode,
        destinationPortIndex: number,
        virtual?: boolean,
    );
    sourceNode: NRNode;
    sourcePortIndex: number;
    destinationNode: NRNode;
    destinationPortIndex: number;
    virtual: boolean;
    toString(): string;
}

/**
 * NRConfigNode - Description
 * users - Nodes that reference this config node
 * @inheritdoc
 */
export class NRConfigNode extends NRObject {
    TYPE: ObjectTypes["ConfigNode"];
    users: Set<NRObject>;
    addUser(node: NRObject): void;
}

/**
 * NRGroup - Description
 * groupId - if set, the id of the parent group this group is in (from `node.g`)
 * group - the parent group
 * info - any documentation for this group
 * style - style properties for this group
 */
export class NRGroup extends NRContainer {
    TYPE: ObjectTypes["Group"];
    w: number;
    h: number;
    groupId: string;
    style: Record<string, unknown>;
    info: string;
    _nodes: Array<NRSubflowInstance | NRNode>;
    setGroup(group: NRGroup): void;
    group: NRGroup;
    addNode(node: NRSubflowInstance | NRNode): void;
}
/**
 * Node - A flow node
 * ConfigNode - A Configuration node
 * Group - A Group
 * Flow - A Flow
 * Subflow - A Subflow
 * @global
 */
export interface ObjectTypes {
    /**
     * - A flow node
     */
    Node: "NRNode";
    /**
     * - A Configuration node
     */
    ConfigNode: "NRConfigNode";
    /**
     * - A Group
     */
    Group: "NRGroup";
    /**
     * - A Flow
     */
    Flow: "NRFlow";
    /**
     * - A Subflow
     */
    Subflow: "NRSubflow";
}

export const types: ObjectTypes;
