import { NodeData, NodesData } from "../core/data";
export declare class Recursion {
    nodes: NodesData;
    constructor(nodes: NodesData);
    extractInputNodes(node: NodeData): NodeData[];
    findSelf(list: NodeData[], inputNodes: NodeData[]): NodeData | null;
    detect(): NodeData | null;
}
