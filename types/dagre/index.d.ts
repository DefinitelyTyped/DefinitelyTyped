// Type definitions for dagre 0.7
// Project: https://github.com/cpettitt/dagre
// Definitions by: Qinfeng Chen <https://github.com/qinfchen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace dagre;

export namespace graphlib {
    class Graph {
        edges(): Edge[];
        edge(id: any): any;
        nodes(): string[];
        node(id: any): any;
        setDefaultEdgeLabel(callback: string|(() => string|void)): Graph;
        setDefaultNodeLabel(callback: string|(() => string|void)): Graph;
        setEdge(sourceId: string, targetId: string, options?: { [key: string]: any }, value?: string): Graph;
        setEdge(params: {v: string, w: string, name?: string}, value?: string): Graph;
        setGraph(label: GraphLabel): Graph;
        setNode(id: string, node: { [key: string]: any }): Graph;
        graph(): GraphLabel;

        constructor(opt?: {directed?: boolean, multigraph?: boolean, compound?: boolean});
        setParent(name: string, parentName: string): void;
        hasNode(name: string): boolean;
    }
}

export interface GraphLabel {
    width?: number;
    height?: number;
    compound?: boolean;
    rankdir?: string;
    nodesep?: number;
    edgesep?: number;
}

export function layout(graph: graphlib.Graph): void;

export interface Edge {
    v: string;
    w: string;
    name?: string;
}
