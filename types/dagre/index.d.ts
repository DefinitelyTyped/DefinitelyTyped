// Type definitions for dagre 0.7
// Project: https://github.com/cpettitt/dagre
// Definitions by: Qinfeng Chen <https://github.com/qinfchen>
//                 Lisa Vallfors <https://github.com/Frankrike>
//                 Pete Vilter <https://github.com/vilterp>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export as namespace dagre;

export namespace graphlib {
    class Graph {
        edges(): Edge[];
        edge(id: any): any;
        nodes(): string[];
        node(id: any): any;
        setDefaultEdgeLabel(callback: string|(() => string|object)): Graph;
        setDefaultNodeLabel(callback: string|(() => string|object)): Graph;
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
    align?: string;
    nodesep?: number;
    edgesep?: number;
    ranksep?: number;
    marginx?: number;
    marginy?: number;
    acyclicer?: string;
    ranker?: string;
}

export function layout(graph: graphlib.Graph): void;

export interface Edge {
    v: string;
    w: string;
    name?: string;
}
