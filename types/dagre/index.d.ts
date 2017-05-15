// Type definitions for dagre 0.7
// Project: https://github.com/cpettitt/dagre
// Definitions by: Qinfeng Chen <https://github.com/qinfchen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace dagre;

export namespace graphlib {
    interface GraphOptions {
        directed?: boolean;
        multigraph?: boolean;
        compound?: boolean;
    }

    class Graph {
        constructor(opts?: GraphOptions);

        isDirected(): boolean;
        isMultigraph(): boolean;
        isCompound(): boolean;

        graph(): { [key: string]: any };
        edges(): Edge[];
        edge(id: any): any;
        nodes(): string[];
        node(id: any): any;
        setDefaultNodeLabel(callback: () => any): Graph;
        setDefaultEdgeLabel(callback: () => any): Graph;
        setEdge(sourceId: string, targetId: string, options?: { [key: string]: any }, id?: string): Graph;
        setGraph(options: { [key: string]: any }): Graph;
        setNode(id: string, node: { [key: string]: any }): Graph;
        setParent(childId: string, parentId: string): Graph;
        hasNode(id: string): boolean;
        hasEdge(id: string): boolean;
    }

    namespace json {
        function read(json: any): Graph;
        function write(graph: Graph): any;
    }
}

export function layout(graph: graphlib.Graph): void;

export interface Edge {
    v: string;
    w: string;
}
