// Type definitions for @rdfjs/data-model 2.0
// Project: https://github.com/rdfjs-base/data-model (Does not have to be to GitHub, but prefer linking to a source code repository rather than to a project website.)
// Definitions by: Jesse Wright <https://github.com/jeswr>
//                 Ruben Taelman <https://github.com/rubensworks>
//                 Andy Davison  <https://github.com/andydavison>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as RDF from "@rdfjs/types";

export default interface Factory<OutQuad extends RDF.BaseQuad = RDF.Quad, InQuad extends RDF.BaseQuad = OutQuad>
  // Required is needed here because variable is optional in the spec
  extends Required<RDF.DataFactory<OutQuad, InQuad>> {
  fromTerm<T extends RDF.Term>(value: T): T;
  fromQuad<T extends RDF.BaseQuad>(value: T): T;
}
