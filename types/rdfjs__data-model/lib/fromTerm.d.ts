import * as RDF from "@rdfjs/types";

export interface FromTerm<T extends RDF.Term, D extends RDF.DataFactory> {
    (factory: D, original: T): T extends RDF.Literal ? ReturnType<D["literal"]>
        : T extends RDF.BlankNode ? ReturnType<D["blankNode"]>
        : T extends RDF.NamedNode ? ReturnType<D["namedNode"]>
        : T extends RDF.Variable ? D["variable"] extends (...arg: any[]) => RDF.Variable ? ReturnType<D["variable"]>
            : never
        : T extends RDF.BaseQuad ? ReturnType<D["quad"]>
        : T extends RDF.DefaultGraph ? ReturnType<D["defaultGraph"]>
        : never;
}

export default function fromTerm<T extends RDF.Term, D extends RDF.DataFactory>(
    factory: D,
    original: T,
): ReturnType<FromTerm<T, D>>;
