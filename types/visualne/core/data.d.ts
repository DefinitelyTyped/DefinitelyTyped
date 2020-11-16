export interface ConnectionData {
    node: number;
    data: unknown;
}
export declare type InputConnectionData = ConnectionData & {
    output: string;
};
export declare type OutputConnectionData = ConnectionData & {
    input: string;
};
export interface InputData {
    connections: InputConnectionData[];
}
export interface OutputData {
    connections: OutputConnectionData[];
}
export interface InputsData {
    [key: string]: InputData;
}
export interface OutputsData {
    [key: string]: OutputData;
}
export interface NodeData {
    id: number;
    name: string;
    inputs: InputsData;
    outputs: OutputsData;
    data: {
        [key: string]: unknown;
    };
    position: [number, number];
}
export interface NodesData {
    [id: string]: NodeData;
}
export interface Data {
    id: string;
    nodes: NodesData;
}
export interface WorkerInputs {
    [key: string]: unknown[];
}
export interface WorkerOutputs {
    [key: string]: unknown;
}
