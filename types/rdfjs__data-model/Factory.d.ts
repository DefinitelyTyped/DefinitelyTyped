import * as RDF from "@rdfjs/types";

interface DataFactory extends Required<RDF.DataFactory<RDF.Quad, RDF.BaseQuad>> {
    quad<Q extends RDF.BaseQuad = RDF.Quad>(
        subject: Q["subject"],
        predicate: Q["predicate"],
        object: Q["object"],
        graph?: Q["graph"],
    ): Q;

    fromTerm(original: RDF.NamedNode): RDF.NamedNode;
    fromTerm(original: RDF.BlankNode): RDF.BlankNode;
    fromTerm(original: RDF.Literal): RDF.Literal;
    fromTerm(original: RDF.Variable): RDF.Variable;
    fromTerm(original: RDF.DefaultGraph): RDF.DefaultGraph;
    fromTerm(original: RDF.BaseQuad): RDF.Quad;

    fromQuad(original: RDF.BaseQuad): RDF.Quad;
}

declare class DataFactory {
    static readonly exports: [
        "blankNode",
        "defaultGraph",
        "fromQuad",
        "fromTerm",
        "literal",
        "namedNode",
        "quad",
        "variable",
    ];
    init(): void;
}

export default DataFactory;
