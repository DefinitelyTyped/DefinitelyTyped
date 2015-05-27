// Type definitions for dagre 0.7.0
// Project: https://github.com/cpettitt/dagre
// Definitions by: Qinfeng Chen <https://github.com/qinfchen>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
declare module Dagre{
    interface DagreFactory {
        graphlib: GraphLib;
        layout(graph: Graph): void;
    }

    interface Graph {
        new (): Graph;
        edges(): string[];
        edge(id: string): any;
        nodes(): string[];
        node(id: string): any;
        setDefaultEdgeLabel(callback: () => void): Graph;
        setEdge(sourceId: string, targetId: string): Graph;
        setGraph(options: { [key: string]: any }): Graph;
        setNode(id: string, node: { [key: string]: any }): Graph;
    }

    interface GraphLib {
        Graph: Graph;
    }
}

declare var dagre: Dagre.DagreFactory;

