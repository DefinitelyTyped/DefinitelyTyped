// Type definitions for dagre-layout 0.8
// Project: https://github.com/tylingsoft/dagre-layout#readme
// Definitions by: Qinfeng Chen <https://github.com/qinfchen>
//                 Pete Vilter <https://github.com/vilterp>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2
// copied from definitions for dagre, since dagre-layout is a drop-in replacement

export namespace graphlib {
    class Graph {
        edges(): Edge[];
        edge(id: any): any;
        nodes(): string[];
        node(id: any): any;
        setDefaultEdgeLabel(callback: string|(() => string|object)): Graph;
        setDefaultNodeLabel(callback: string|(() => string|object)): Graph;
        setEdge(sourceId: string, targetId: string, options?: { [key: string]: any }, value?: string): Graph;
        setEdge(params: {v: string, w: string, name?: string | undefined}, value?: string): Graph;
        setGraph(label: GraphLabel): Graph;
        setNode(id: string, node: { [key: string]: any }): Graph;
        graph(): GraphLabel;

        constructor(opt?: {directed?: boolean | undefined, multigraph?: boolean | undefined, compound?: boolean | undefined});
        setParent(name: string, parentName: string): void;
        hasNode(name: string): boolean;
    }
}

export interface GraphLabel {
    width?: number | undefined;
    height?: number | undefined;
    compound?: boolean | undefined;
    rankdir?: string | undefined;
    align?: string | undefined;
    nodesep?: number | undefined;
    edgesep?: number | undefined;
    ranksep?: number | undefined;
    marginx?: number | undefined;
    marginy?: number | undefined;
    acyclicer?: string | undefined;
    ranker?: string | undefined;
}

export function layout(graph: graphlib.Graph): void;

export interface Edge {
    v: string;
    w: string;
    name?: string | undefined;
}
