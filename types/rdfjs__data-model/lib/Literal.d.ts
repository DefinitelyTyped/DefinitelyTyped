import * as RDF from "@rdfjs/types";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Literal extends RDF.Literal {}

declare class Literal {
    constructor(value: string, language?: string | undefined, datatype?: RDF.NamedNode | undefined);
}

export default Literal;
