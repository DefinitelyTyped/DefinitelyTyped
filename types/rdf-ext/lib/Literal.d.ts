import { Literal, NamedNode } from "@rdfjs/types";
import { PropType } from "./_PropType.js";

export interface LiteralExt extends Literal {
    toCanonical(): string;
    toJSON(): {
        value: PropType<Literal, "value">;
        termType: PropType<Literal, "termType">;
        language: PropType<Literal, "language">;
        datatype: {
            value: PropType<NamedNode, "value">;
            termType: PropType<NamedNode, "termType">;
        };
    };
}

// tslint:disable-next-line:no-unnecessary-class
export class LiteralExt {
    constructor(value: string, language?: string | null, datatype?: NamedNode | null);
}

export default LiteralExt;
