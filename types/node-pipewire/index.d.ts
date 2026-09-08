export interface PipewirePort {
    id: number;
    permissions: number;
    props: Record<string, string>;
    node_id: number;
    name: string;
    direction: string;
}
export interface PipewireNode {
    id: number;
    permissions: number;
    props: Record<string, string>;
    name: string;
    node_direction: string;
    node_type: string;
    ports: PipewirePort[];
}
export interface PipewireLink {
    id: number;
    permissions: number;
    props: Record<string, string>;
    input_node_id: number;
    input_port_id: number;
    output_node_id: number;
    output_port_id: number;
}
export interface PipewireClient {
    id: number;
    permissions: number;
    pid: number;
    application_name: string;
    props: Record<string, string>;
}
export type NodeDirection = "Input" | "Output" | "Both";
export type AudioPosition = "FL" | "FR";
export function createPwThread(enableDebug?: boolean): void;
export function getLinks(): PipewireLink[];
export function getPorts(): PipewirePort[];
export function getNodes(): PipewireNode[];
export function getClients(): PipewireClient[];
export function getOutputNodes(): PipewireNode[];
export function getInputNodes(): PipewireNode[];
export function linkNodesNameToId(nodeName: string, nodeId: number, permanent?: boolean): void;
export function unlinkNodesNameToId(nodeName: string, nodeId: number): void;
export function linkPorts(inputPortId: number, outputPortId: number, permanent?: boolean): void;
export function unlinkPorts(inputPortId: number, outputPortId: number): void;
export function getInputNodesName(): string[];
export function getOutputNodesName(): string[];
export function waitForNewNode(nodeName: string, direction?: NodeDirection, timeout?: number): Promise<PipewireNode>;
export function createSource(newSourceName: string, audioPositions: AudioPosition[], permanent?: boolean): void;
export function createSink(newSinkName: string, audioPositions: AudioPosition[], permanent?: boolean): void;
export function destroyObject(id: number): void;
