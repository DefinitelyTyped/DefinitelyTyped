import { Variable } from "@rdfjs/types";
import { PropType } from "./_PropType.js";

export interface VariableExt extends Variable {
    toCanonical(): string;
    toJSON(): {
        value: PropType<Variable, "value">;
        termType: PropType<Variable, "termType">;
    };
}

// tslint:disable-next-line:no-unnecessary-class
export class VariableExt {
    constructor(name: string);
}

export default VariableExt;
