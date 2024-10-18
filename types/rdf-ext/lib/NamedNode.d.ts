import { NamedNode, Term } from "@rdfjs/types";
import { PropType } from "./_PropType.js";

export interface NamedNodeExt<Iri extends string = string> extends NamedNode<Iri> {
    toCanonical(): string;
    toJSON(): {
        value: PropType<NamedNode, "value">;
        termType: PropType<NamedNode, "termType">;
    };
}

// tslint:disable-next-line:no-unnecessary-class
export class NamedNodeExt<Iri extends string = string> {
    constructor(iri: Iri);
}

export default NamedNodeExt;
