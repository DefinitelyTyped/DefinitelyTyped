// Type definitions for @rdfjs/term-map 2.0
// Project: https://github.com/rdfjs-base/term-map
// Definitions by: tpluscode <https://github.com/tpluscode>
//                 Jesse Wright <https://github.com/jeswr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Term } from "rdf-js";

export default class TermMap<T extends Term = Term, V = any> extends Map<T, V> {
    constructor(entries?: Array<[Term, V]>);
}
