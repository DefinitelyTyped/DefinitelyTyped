import * as RDF from 'rdf-js';

declare class DatasetCore implements RDF.DatasetCore {
    constructor(quads: RDF.Quad[]);
    size: number;
    add(quad: RDF.Quad): this;
    delete(quad: RDF.Quad): this;
    has(quad: RDF.Quad): boolean;
    match(subject?: RDF.Term | null, predicate?: RDF.Term | null, object?: RDF.Term | null, graph?: RDF.Term | null): this;
    [Symbol.iterator](): Iterator<RDF.Quad>;
}

export = DatasetCore;
