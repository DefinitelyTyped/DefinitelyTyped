import { DatasetCore, Quad_Graph, Term } from 'rdf-js';

declare namespace Context {
    interface Context<D extends DatasetCore, T extends Term> {
        dataset: D;
        graph?: Quad_Graph;
        term: T;
    }
}

declare class Context<D extends DatasetCore, T extends Term> implements Context.Context<D, T> {
    constructor(dataset: D, graph: Quad_Graph | undefined, value: any);
    dataset: D;
    graph?: Quad_Graph;
    term: T;
}

export = Context;
