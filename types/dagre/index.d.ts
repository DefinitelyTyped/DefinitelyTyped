// Type definitions for dagre 0.7
// Project: https://github.com/dagrejs/dagre
// Definitions by: Qinfeng Chen <https://github.com/qinfchen>
//                 Lisa Vallfors <https://github.com/Frankrike>
//                 Pete Vilter <https://github.com/vilterp>
//                 David Newell <https://github.com/rustedgrail>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export as namespace dagre;

export namespace graphlib {
    class Graph {
        constructor(opt?: {directed?: boolean, multigraph?: boolean, compound?: boolean});

        graph(): GraphLabel;
        isDirected(): boolean;
        isMultiGraph(): boolean;
        setGraph(label: GraphLabel): Graph;

        edge(edgeObj: Edge): GraphEdge;
        edge(outNodeName: string, inNodeName: string, name?: string): GraphEdge;
        edgeCount(): number;
        edges(): Edge[];
        hasEdge(edgeObj: Edge): boolean;
        hasEdge(outNodeName: string, inNodeName: string, name?: string): boolean;
        inEdges(inNodeName: string, outNodeName?: string): Edge[]|undefined;
        outEdges(outNodeName: string, inNodeName?: string): Edge[]|undefined;
        removeEdge(outNodeName: string, inNodeName: string): Graph;
        setDefaultEdgeLabel(callback: string|((v: string, w: string, name?: string) => string|Label)): Graph;
        setEdge(params: Edge, value?: string|{[key: string]: any}): Graph;
        setEdge(sourceId: string, targetId: string, value?: string|Label, name?: string): Graph;

        children(parentName: string): string|undefined;
        hasNode(name: string): boolean;
        neighbors(name: string): Node[]|undefined;
        node(id: string|Label): Node;
        nodeCount(): number;
        nodes(): string[];
        parent(childName: string): string|undefined;
        predecessors(name: string): Node[]|undefined;
        removeNode(name: string): Graph;
        setDefaultNodeLabel(callback: string|((nodeId: string) => string|Label)): Graph;
        setNode(name: string, label: string|Label): Graph;
        setParent(childName: string, parentName: string): void;
        sinks(): Node[];
        sources(): Node[];
        successors(name: string): Node[]|undefined;
    }

    namespace json {
        function read(graph: any): Graph;
        function write(graph: Graph): any;
    }

    namespace alg {
        function components(graph: Graph): string[][];
        function dijkstra(graph: Graph, source: string, weightFn?: WeightFn, edgeFn?: EdgeFn): any;
        function dijkstraAll(graph: Graph, weightFn?: WeightFn, edgeFn?: EdgeFn): any;
        function findCycles(graph: Graph): string[][];
        function floydWarchall(graph: Graph, weightFn?: WeightFn, edgeFn?: EdgeFn): any;
        function isAcyclic(graph: Graph): boolean;
        function postorder(graph: Graph, nodeNames: string|string[]): string[];
        function preorder(graph: Graph, nodeNames: string|string[]): string[];
        function prim(graph: Graph, weightFn?: WeightFn): Graph;
        function tarjam(graph: Graph): string[][];
        function topsort(graph: Graph): string[];
    }
}

export interface Label {
  [key: string]: any;
}
export type WeightFn = (edge: Edge) => number;
export type EdgeFn = (outNodeName: string) => GraphEdge[];

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

export interface NodeConfig {
    width?: number;
    height?: number;
}

export interface EdgeConfig {
    minlen?: number;
    weight?: number;
    width?: number;
    height?: number;
    lablepos?: 'l'|'c'|'r';
    labeloffest?: number;
}

export function layout(graph: graphlib.Graph, layout?: GraphLabel & NodeConfig & EdgeConfig): void;

export interface Edge {
    v: string;
    w: string;
    name?: string;
}

export interface GraphEdge {
    points: Array<{x: number, y: number}>;
    [key: string]: any;
}

export interface Node {
    x: number;
    y: number;
    width: number;
    height: number;
    [key: string]: any;
}
