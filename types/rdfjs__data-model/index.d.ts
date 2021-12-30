// Type definitions for @rdfjs/data-model 2.0
// Project: https://github.com/rdfjs-base/data-model
// Definitions by: Jesse Wright <https://github.com/jeswr>
//                 Ruben Taelman <https://github.com/rubensworks>
//                 tpluscode <https://github.com/tpluscode>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.9

import * as RDF from "@rdfjs/types";

// Required is needed here because variable is optional in the spec
interface Factory extends Required<RDF.DataFactory<RDF.BaseQuad>> {
  // Enable same behavior of version 1 where quads default to RDF.Quad (where possible)
  quad<Q extends RDF.BaseQuad = RDF.Quad>(
      subject: Q['subject'], predicate: Q['predicate'], object: Q['object'], graph?: Q['graph']): Q;
  fromTerm<T extends RDF.Term>(value: T): T;
  fromQuad<T extends RDF.BaseQuad = RDF.Quad>(value: T): T;
}

declare const factory: Factory;
export default factory;
