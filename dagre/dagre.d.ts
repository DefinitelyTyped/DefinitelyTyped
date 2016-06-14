// Type definitions for dagre 0.7.0
// Project: https://github.com/cpettitt/dagre
// Definitions by: Qinfeng Chen <https://github.com/qinfchen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Dagre {
    interface DagreFactory {
        graphlib: GraphLib;
        layout(graph: Graph): void;
    }

    interface Graph {
        new (): Graph;
        edges(): Edge[];
        edge(id: any): any;
        nodes(): string[];
        node(id: any): any;
        setDefaultEdgeLabel(callback: () => void): Graph;
        setEdge(sourceId: string, targetId: string, options?: { [key: string]: any }): Graph;
        setGraph(options: { [key: string]: any }): Graph;
        setNode(id: string, node: { [key: string]: any }): Graph;
    }

    interface Edge {
        v: string;
        w: string;
    }

    interface GraphLib {
        Graph: Graph;
    }
}

declare var dagre: Dagre.DagreFactory;

declare module "dagre" {
    export = dagre;
}
