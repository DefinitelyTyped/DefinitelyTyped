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
        setDefaultEdgeLabel(callback: () => void): Graph;
        setEdge(sourceId: string, targetId: string, options?: { [key: string]: any }): Graph;
        setGraph(options: { [key: string]: any }): Graph;
        setNode(id: string, node: { [key: string]: any }): Graph;
    }
}

export function layout(graph: graphlib.Graph): void;

export interface Edge {
    v: string;
    w: string;
}
