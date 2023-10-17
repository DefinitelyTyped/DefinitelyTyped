import { NamedNode, Quad, Term } from "rdf-js";

interface ValidatorFunc {
    (value: string): boolean;
}

declare function validateTerm(term: Term): boolean;
declare function validateQuad(quad: Quad): boolean;
interface Registry {
    register(datatype: NamedNode, validatorFunc: ValidatorFunc): void;
    find(datatype: NamedNode | null | undefined): ValidatorFunc | null;
}

declare const RdfValidateDatatype: {
    validateTerm: typeof validateTerm;
    validateQuad: typeof validateQuad;
    validators: Registry;
};

export = RdfValidateDatatype;
