// Type definitions for @rdfjs/to-ntriples 2.0
// Project: https://github.com/rdfjs-base/to-ntriples
// Definitions by: tpluscode <https://github.com/tpluscode>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.0

import { DatasetCore, Term } from "rdf-js";

declare function toNT(term: Term | DatasetCore): string;

export = toNT;
