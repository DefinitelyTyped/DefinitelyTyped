import * as RDF from 'rdf-js';

interface DatasetCore<InQuad extends RDF.BaseQuad = RDF.Quad> extends RDF.DatasetCore<RDF.Quad, InQuad> {
    match(subject?: RDF.Term | null, predicate?: RDF.Term | null, object?: RDF.Term | null, graph?: RDF.Term | null): DatasetCore<InQuad>;
}

// tslint:disable-next-line no-unnecessary-class
declare class DatasetCore<InQuad> {
    constructor(quads: InQuad[]);
}

export = DatasetCore;
