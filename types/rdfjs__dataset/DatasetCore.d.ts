import * as RDF from 'rdf-js';

interface DatasetCore<Q extends RDF.BaseQuad = RDF.Quad> extends RDF.DatasetCore<Q, Q> {
    match(subject?: RDF.Term | null, predicate?: RDF.Term | null, object?: RDF.Term | null, graph?: RDF.Term | null): DatasetCore<Q>;
}

// tslint:disable-next-line no-unnecessary-class
declare class DatasetCore<Q> {
    constructor(quads?: Q[]);
}

export default DatasetCore;
