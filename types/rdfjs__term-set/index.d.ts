// Type definitions for @rdfjs/term-set 2.0
// Project: https://github.com/rdfjs-base/term-set
// Definitions by: tpluscode <https://github.com/tpluscode>
//                 Jesse Wright <https://github.com/jeswr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Term } from "rdf-js";

export default class TermSet<T extends Term = Term> extends Set<T> {
}
