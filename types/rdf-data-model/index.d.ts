// Type definitions for rdf-data-model 1.0
// Project: https://github.com/rdf-ext/rdf-data-model
// Definitions by: Ruben Taelman <https://github.com/rubensworks>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as RDF from "rdf-js";

export const defaultGraphInstance: RDF.DefaultGraph;
export function namedNode(value: string): RDF.NamedNode;
export function blankNode(value?: string): RDF.BlankNode;
export function literal(value: string, languageOrDatatype?: string | RDF.NamedNode): RDF.Literal;
export function variable(value: string): RDF.Variable;
export function defaultGraph(): RDF.DefaultGraph;
export function triple(subject: RDF.Term, predicate: RDF.Term, object: RDF.Term): RDF.Quad;
export function quad(subject: RDF.Term, predicate: RDF.Term, object: RDF.Term, graph?: RDF.Term): RDF.Quad;
