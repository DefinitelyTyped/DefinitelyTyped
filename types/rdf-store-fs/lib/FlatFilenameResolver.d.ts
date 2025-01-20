import { DataFactory, Quad_Graph } from "@rdfjs/types";

declare class FlatFilenameResolver {
    constructor(params: { baseIRI: string; factory?: DataFactory; path: string; extension?: string });
    graphs(graph?: Quad_Graph): Promise<Set<Quad_Graph>>;
    resolve(graph: Quad_Graph): Promise<string>;
}

export = FlatFilenameResolver;
