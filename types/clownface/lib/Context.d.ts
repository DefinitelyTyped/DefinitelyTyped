import { DatasetCore, Quad_Graph, Term } from 'rdf-js';

declare namespace Context {
    interface Context<D extends DatasetCore, T extends Term> {
        dataset: D;
        graph?: Quad_Graph;
        term: T;
    }
}

interface Context<D extends DatasetCore, T extends Term> extends Context.Context<D, T> {}

// tslint:disable-next-line no-unnecessary-class
declare class Context<D extends DatasetCore, T extends Term> {
    constructor(dataset: D, graph: Quad_Graph | undefined, value: any);
}

export = Context;
