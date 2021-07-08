// Type definitions for dagre 0.7
// Project: https://github.com/dagrejs/dagre
// Definitions by: Qinfeng Chen <https://github.com/qinfchen>
//                 Lisa Vallfors <https://github.com/Frankrike>
//                 Pete Vilter <https://github.com/vilterp>
//                 David Newell <https://github.com/rustedgrail>
//                 Graham Lea <https://github.com/GrahamLea>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export as namespace dagre;

export namespace graphlib {
    class Graph<T = {}> {
        constructor(opt?: { directed?: boolean | undefined; multigraph?: boolean | undefined; compound?: boolean | undefined });

        graph(): GraphLabel;
        isDirected(): boolean;
        isMultiGraph(): boolean;
        setGraph(label: GraphLabel): Graph<T>;

        edge(edgeObj: Edge): GraphEdge;
        edge(outNodeName: string, inNodeName: string, name?: string): GraphEdge;
        edgeCount(): number;
        edges(): Edge[];
        hasEdge(edgeObj: Edge): boolean;
        hasEdge(outNodeName: string, inNodeName: string, name?: string): boolean;
        inEdges(inNodeName: string, outNodeName?: string): Edge[] | undefined;
        outEdges(outNodeName: string, inNodeName?: string): Edge[] | undefined;
        removeEdge(outNodeName: string, inNodeName: string): Graph<T>;
        setDefaultEdgeLabel(callback: string | ((v: string, w: string, name?: string) => string | Label)): Graph<T>;
        setEdge(params: Edge, value?: string | { [key: string]: any }): Graph<T>;
        setEdge(sourceId: string, targetId: string, value?: string | Label, name?: string): Graph<T>;

        children(parentName: string): string | undefined;
        hasNode(name: string): boolean;
        neighbors(name: string): Array<Node<T>> | undefined;
        node(id: string | Label): Node<T>;
        nodeCount(): number;
        nodes(): string[];
        parent(childName: string): string | undefined;
        predecessors(name: string): Array<Node<T>> | undefined;
        removeNode(name: string): Graph<T>;
        setDefaultNodeLabel(callback: string | ((nodeId: string) => string | Label)): Graph<T>;
        setNode(name: string, label: string | Label): Graph<T>;
        setParent(childName: string, parentName: string): void;
        sinks(): Array<Node<T>>;
        sources(): Array<Node<T>>;
        successors(name: string): Array<Node<T>> | undefined;
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
        function postorder(graph: Graph, nodeNames: string | string[]): string[];
        function preorder(graph: Graph, nodeNames: string | string[]): string[];
        function prim<T>(graph: Graph<T>, weightFn?: WeightFn): Graph<T>;
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

export interface NodeConfig {
    width?: number | undefined;
    height?: number | undefined;
}

export interface EdgeConfig {
    minlen?: number | undefined;
    weight?: number | undefined;
    width?: number | undefined;
    height?: number | undefined;
    lablepos?: 'l' | 'c' | 'r' | undefined;
    labeloffest?: number | undefined;
}

export function layout(graph: graphlib.Graph, layout?: GraphLabel & NodeConfig & EdgeConfig): void;

export interface Edge {
    v: string;
    w: string;
    name?: string | undefined;
}

export interface GraphEdge {
    points: Array<{ x: number; y: number }>;
    [key: string]: any;
}

export type Node<T = {}> = T & {
    x: number;
    y: number;
    width: number;
    height: number;
    class?: string | undefined;
    label?: string | undefined;
    padding?: number | undefined;
    paddingX?: number | undefined;
    paddingY?: number | undefined;
    rx?: number | undefined;
    ry?: number | undefined;
    shape?: string | undefined;
};
