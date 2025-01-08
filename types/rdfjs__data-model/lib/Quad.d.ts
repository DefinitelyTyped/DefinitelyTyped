import * as RDF from "@rdfjs/types";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Quad extends RDF.BaseQuad {}

declare class Quad {
    constructor(subject: RDF.Term, predicate: RDF.Term, object: RDF.Term, graph?: RDF.Term);
}

export default Quad;
