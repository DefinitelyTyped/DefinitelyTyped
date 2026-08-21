import * as RDF from "@rdfjs/types";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface BlankNode extends RDF.BlankNode {}

declare class BlankNode {
    constructor(id: string);
}

export default BlankNode;
