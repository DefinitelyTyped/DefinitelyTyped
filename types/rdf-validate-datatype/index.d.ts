// Type definitions for rdf-validate-datatype 0.1
// Project: https://github.com/zazuko/rdf-validate-datatype#readme
// Definitions by: Tomasz Pluskiewicz <https://github.com/tpluscode>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Term, Quad, NamedNode } from 'rdf-js';

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
    validateTerm: typeof validateTerm,
    validateQuad: typeof validateQuad,
    validators: Registry
};

export = RdfValidateDatatype;
