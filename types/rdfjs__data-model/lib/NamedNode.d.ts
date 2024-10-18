import * as RDF from "@rdfjs/types";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface NamedNode extends RDF.NamedNode {}

declare class NamedNode {
    constructor(iri: string);
}

export default NamedNode;
