// Type definitions for @rdfjs/term-set 1.0
// Project: https://github.com/rdfjs-base/term-set
// Definitions by: tpluscode <https://github.com/tpluscode>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Term } from "rdf-js";

declare namespace TermSet {
    interface TermSet<T extends Term = Term> extends Set<T> {
    }
}

interface TermSet<T extends Term = Term> extends TermSet.TermSet<T> {
}
// tslint:disable-next-line no-unnecessary-class
declare class TermSet<T extends Term = Term> {
    constructor(values?: T[] | null);
}

export = TermSet;
