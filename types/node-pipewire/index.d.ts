export interface PipewirePort {
    id: number;
    permissions: number;
    props: string;
    node_id: number;
    name: string;
    direction: string;
}
export interface PipewireNode {
    id: number;
    permissions: number;
    props: string;
    name: string;
    node_direction: string;
    node_type: string;
    ports: PipewirePort[];
}
export interface PipewireLink {
    id: number;
    permissions: number;
    props: string;
    input_node_id: number;
    input_port_id: number;
    output_node_id: number;
    output_port_id: number;
}
export type NodeDirection = "Input" | "Output" | "Both";
export function createPwThread(enableDebug?: boolean): void;
export function getLinks(): PipewireLink[];
export function getPorts(): PipewirePort[];
export function getNodes(): PipewireNode[];
export function getOutputNodes(): PipewireNode[];
export function getInputNodes(): PipewireNode[];
export function linkNodesNameToId(nodeName: string, nodeId: number): void;
export function unlinkNodesNameToId(nodeName: string, nodeId: number): void;
export function linkPorts(inputPortId: number, outputPortId: number): void;
export function unlinkPorts(inputPortId: number, outputPortId: number): void;
export function getInputNodesName(): string[];
export function getOutputNodesName(): string[];
export function waitForNewNode(nodeName: string, direction?: NodeDirection, timeout?: number): Promise<PipewireNode>;
