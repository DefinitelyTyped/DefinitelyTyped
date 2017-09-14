// Type definitions for Graphviz 0.0.8
// Project: https://github.com/glejeune/node-graphviz
// Definitions by: Matt Frantz <https://github.com/mhfrantz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// graphviz.d.ts



export interface HasAttributes {
    set(name: string, value: any): void;
    get(name: string): any;
}

export interface Node extends HasAttributes {
}

export interface Edge extends HasAttributes {
}

export interface OutputCallback {
    (data: string): void;
}

export interface ErrorCallback {
    (code: number, stdout: string, stderr: string): void;
}

export interface RenderOptions {
    type: string;  // output file type (png, jpeg, ps, ...)
    use: string;  // Graphviz command to use (dot, neato, ...)
    path: string;  // GraphViz path
    G: any;  // graph options
    N: any;  // node options
    E: any;  // edge options
}

export interface Graph extends HasAttributes {

    addNode(id: string, attrs?: any): Node;
    nodeCount(): number;

    // TODO: Use union types when we have TS 1.4
    addEdge(nodeOne: string, nodeTwo: string, attrs?: any): Edge;
    addEdge(nodeOne: string, nodeTwo: Node, attrs?: any): Edge;
    addEdge(nodeOne: Node, nodeTwo: string, attrs?: any): Edge;
    addEdge(nodeOne: Node, nodeTwo: Node, attrs?: any): Edge;

    edgeCount(): number;

    // Subgraph (cluster) API
    addCluster(id: string): Graph;
    getCluster(id: string): Graph;
    clusterCount(): number;

    setNodeAttribut(name: string, value: any): void;
    getNodeAttribut(name: string): any;

    setEdgeAttribut(name: string, value: any): void;
    getEdgeAttribut(name: string): any;

    to_dot(): string;

    // Graphviz command to use (dot, neato, ...)
    use: string;

    // Path containing Graphviz binaries.
    setGraphVizPath(directoryPath: string): void;

    // TODO: Use union types when we can have TS 1.4
    render(type: string, filename: string, errback?: ErrorCallback): void;
    render(options: RenderOptions, filename: string, errback?: ErrorCallback): void;
    render(type: string, callback: OutputCallback, errback?: ErrorCallback): void;
    render(options: RenderOptions, callback: OutputCallback, errback?: ErrorCallback): void;

    // alias for render
    output(type: string, filename: string, errback?: ErrorCallback): void;
    output(options: RenderOptions, filename: string, errback?: ErrorCallback): void;
    output(type: string, callback: OutputCallback, errback?: ErrorCallback): void;
    output(options: RenderOptions, callback: OutputCallback, errback?: ErrorCallback): void;
}

export declare function graph(id: string): Graph;

export declare function digraph(id: string): Graph;

interface ParseCallback {
    (graph: Graph): void;
}

export declare function parse(path: string, callback: ParseCallback, errback?: ErrorCallback): void;
