import * as RDF from "@rdfjs/types";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Variable extends RDF.Variable {}

declare class Variable {
    constructor(name: string);
}

export default Variable;
