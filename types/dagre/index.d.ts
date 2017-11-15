// Type definitions for dagre 0.7
// Project: https://github.com/cpettitt/dagre
// Definitions by: Qinfeng Chen <https://github.com/qinfchen>
//                 Lisa Vallfors <https://github.com/Frankrike>
//                 Pete Vilter <https://github.com/vilterp>
//                 David Newell <http://github.com/rustedgrail>
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

        edge(edgeObj: EdgeLabel): Edge;
        edge(outNodeName: string, inNodeName: string, name?: string): Edge;
        edgeCount(): number;
        edges(): EdgeLabel[];
        hasEdge(edgeObj: EdgeLabel): boolean;
        hasEdge(outNodeName: string, inNodeName: string, name?: string): boolean;
        inEdges(inNodeName: string, outNodeName?: string): EdgeLabel[]|undefined;
        outEdges(outNodeName: string, inNodeName?: string): EdgeLabel[]|undefined;
        removeEdge(outNodeName: string, inNodeName: string): Graph;
        setDefaultEdgeLabel(callback: string|(() => string|object)): Graph;
        setEdge(params: EdgeLabel, value?: string|{[key: string]: any}): Graph;
        setEdge(sourceId: string, targetId: string, value?: string|{ [key: string]: any }, name?: string): Graph;

        children(parentName: string): string|undefined;
        hasNode(name: string): boolean;
        neighbors(name: string): Node[]|undefined;
        node(id: string|object): Node;
        nodeCount(): number;
        nodes(): string[];
        parent(childName: string): string|undefined;
        predecessors(name: string): Node[]|undefined;
        removeNode(name: string): Graph;
        setDefaultNodeLabel(callback: string|(() => string|object)): Graph;
        setNode(id: string, node: NodeConfig): Graph;
        setParent(childName: string, parentName: string): void;
        sources(): Node[];
        successors(name: string): Node[]|undefined;
    }

    class json {
        static read(graph: object): Graph;
        static write(graph: Graph): object;
    }

    class alg {
        static components(graph: Graph): string[][];
        static dijkstra(graph: Graph, source: string, weightFn?: WeightFn, edgeFn?: EdgeFn): object;
        static dijkstraAll(graph: Graph, weightFn?: WeightFn, edgeFn?: EdgeFn): object;
        static findCycles(graph: Graph): string[][];
        static floydWarchall(graph: Graph, weightFn?: WeightFn, edgeFn?: EdgeFn): object;
        static isAcyclic(graph: Graph): boolean;
        static postorder(graph: Graph, nodeNames: string|string[]): string[];
        static preorder(graph: Graph, nodeNames: string|string[]): string[];
        static prim(graph: Graph, weightFn?: WeightFn): Graph;
        static tarjam(graph: Graph): string[][];
        static topsort(graph: Graph): string[];
    }
}

export type WeightFn = (edge: EdgeLabel) => number;
export type EdgeFn = (outNodeName: string) => Edge[];

export interface GraphLabel {
    label?: string;
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
    width?: number;
    height?: number;
}

export interface NodeConfig {
    width?: number;
    height?: number;
}

export interface EdgeConfig {
    minlen: number;
    weight: number;
    width: number;
    height: number;
    lablepos: 'l'|'c'|'r';
    labeloffest: number;
}

export function layout(graph: graphlib.Graph, layout?: GraphLabel&NodeConfig&EdgeConfig): void;

export interface EdgeLabel {
    v: string;
    w: string;
    name?: string;
}

export interface Edge {
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
