import * as RDF from "@rdfjs/types";

interface DataFactory extends Required<RDF.DataFactory<RDF.BaseQuad>> {
    quad<Q extends RDF.BaseQuad = RDF.Quad>(
        subject: Q['subject'], predicate: Q['predicate'], object: Q['object'], graph?: Q['graph']): Q;
    fromTerm<T extends RDF.Term>(value: T): T;
    fromQuad<T extends RDF.BaseQuad = RDF.Quad>(value: T): T;
}

declare class DataFactory {
    static readonly exports: [
        'blankNode',
        'defaultGraph',
        'fromQuad',
        'fromTerm',
        'literal',
        'namedNode',
        'quad',
        'variable'
    ];
    init(): void;
}

export default DataFactory;
