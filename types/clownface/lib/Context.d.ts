import { DatasetCore, Quad_Graph, Term } from "@rdfjs/types";

export default class Context<D extends DatasetCore, T extends Term> {
    constructor(dataset: D, graph: Quad_Graph | undefined, value: any);
    dataset: D;
    graph?: Quad_Graph | undefined;
    term: T;
}
