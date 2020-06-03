// Type definitions for graphviz 0.0.9
// Project: https://github.com/glejeune/node-graphviz, https://www.graphviz.org/
// Definitions by: Matt Frantz <https://github.com/mhfrantz>,
//                 Kamontat Chantrachirathumrong <https://github.com/kamontat>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type PossibleValue = string | number | boolean

export type RenderType = string

export type RenderEngine = "dot" | "neato" | "circo" | "fdp" | "osage" | "twopi"

export type Options = {
  [key: string]: PossibleValue
}

export interface HasAttributes {
    set(name: string, value: PossibleValue): void;
    get(name: string): PossibleValue;
}

export interface Node extends HasAttributes {
    id: string;
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
  /**
   * graphviz output file type
   */
    type: RenderType;

    /**
     * Graphviz command to use
     * @default dot
     */
    use?: RenderEngine;

    /**
     * Graphviz path
     * @default $PATH
     */
    path?: string;

    /**
     * graph options
     */
    G?: Options;

    /**
     * node options
     */
    N?: Options;

    /**
     * edge options
     */
    E?: Options;
}

export interface Graph extends HasAttributes {
    use: RenderEngine;


    addNode(id: string, attrs?: any): Node;
    nodeCount(): number;

    addEdge(nodeOne: string | Node, nodeTwo: string | Node, attrs?: Options): Edge;

    // Subgraph (cluster) API
    addCluster(id: string): Graph;
    getCluster(id: string): Graph;
    clusterCount(): number;

    setNodeAttribut(name: string, value: any): void;
    getNodeAttribut(name: string): any;

    setEdgeAttribut(name: string, value: any): void;
    getEdgeAttribut(name: string): any;

    // Path containing Graphviz binaries.
    setGraphVizPath(directoryPath: string): void;

    render(type: string, filename: string, errback?: ErrorCallback): void;
    render(options: RenderOptions, filename: string, errback?: ErrorCallback): void;
    render(type: string, callback: OutputCallback, errback?: ErrorCallback): void;
    render(options: RenderOptions, callback: OutputCallback, errback?: ErrorCallback): void;

    // alias for render
    output(type: string, filename: string, errback?: ErrorCallback): void;
    output(options: RenderOptions, filename: string, errback?: ErrorCallback): void;
    output(type: string, callback: OutputCallback, errback?: ErrorCallback): void;
    output(options: RenderOptions, callback: OutputCallback, errback?: ErrorCallback): void;

    edgeCount(): number;
    to_dot(): string;
}

export declare function graph(id: string): Graph;

export declare function digraph(id: string): Graph;

interface ParseCallback {
    (graph: Graph): void;
}

export declare function parse(path: string, callback: ParseCallback, errback?: ErrorCallback): void;
