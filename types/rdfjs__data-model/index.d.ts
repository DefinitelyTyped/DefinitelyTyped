// Type definitions for @rdfjs/data-model 2.0
// Project: https://github.com/rdfjs-base/data-model (Does not have to be to GitHub, but prefer linking to a source code repository rather than to a project website.)
// Definitions by: Jesse Wright <https://github.com/jeswr>
//                 Ruben Taelman <https://github.com/rubensworks>
//                 Andy Davison  <https://github.com/andydavison>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.9

import * as RDF from "@rdfjs/types";

interface Factory<OutQuad extends RDF.BaseQuad = RDF.Quad, InQuad extends RDF.BaseQuad = OutQuad>
  // Required is needed here because variable is optional in the spec
  extends Required<RDF.DataFactory<OutQuad, InQuad>> {
  // Enable same behavior of version 1 where quads default to RDF.Quad (where possible)
  quad<Q extends OutQuad = RDF.Quad extends OutQuad ? RDF.Quad : OutQuad>(
      subject: Q['subject'], predicate: Q['predicate'], object: Q['object'], graph?: Q['graph']): Q;
  fromTerm<T extends RDF.Term>(value: T): T;
  fromQuad<T extends OutQuad = RDF.Quad extends OutQuad ? RDF.Quad : OutQuad>(value: T): T;
}

declare const factory: Factory<RDF.BaseQuad, RDF.BaseQuad>;
export default factory;
