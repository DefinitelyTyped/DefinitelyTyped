// Type definitions for dagre 0.7
// Project: https://github.com/cpettitt/dagre
// Definitions by: Qinfeng Chen <https://github.com/qinfchen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace dagre;

export namespace graphlib {
    class Graph {
        constructor(opts?: any);
        graph: any;
        edges(): Edge[];
        edge(id: any): any;
        nodes(): string[];
        node(id: any): any;
        setDefaultNodeLabel(callback: () => void): Graph;
        setDefaultEdgeLabel(callback: () => void): Graph;
        setEdge(sourceId: string, targetId: string, options?: { [key: string]: any }, id?: string): Graph;
        setGraph(options: { [key: string]: any }): Graph;
        setNode(id: string, node: { [key: string]: any }): Graph;
        setParent(childId: string, parentId: string);
        hasNode(id: string): boolean;
        hasEdge(id: string): boolean;
        delNode(node: any)
    }

    namespace json {
        function write(graph: Graph);
    }
}

export function layout(graph: graphlib.Graph): void;

export interface Edge {
    v: string;
    w: string;
}
