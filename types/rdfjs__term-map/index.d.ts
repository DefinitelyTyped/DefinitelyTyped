// Type definitions for @rdfjs/term-map 1.0
// Project: https://github.com/rdfjs-base/term-map
// Definitions by: tpluscode <https://github.com/tpluscode>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Term } from "rdf-js";

declare class TermMap<T extends Term = Term, V = any> extends Map<T, V> {
    constructor(entries?: Array<[Term, V]>);
}

export = TermMap;
