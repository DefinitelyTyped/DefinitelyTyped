// Type definitions for rdf-data-model 1.0
// Project: https://github.com/rdf-ext/rdf-data-model
// Definitions by: Ruben Taelman <https://github.com/rubensworks>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as RDF from "rdf-js";

export class NamedNode implements RDF.NamedNode {
    termType: "NamedNode";
    value: string;
    constructor(iri: string);
    equals(other: RDF.Term): boolean;
}

export class BlankNode implements RDF.BlankNode {
    static nextId: number;
    termType: "BlankNode";
    value: string;
    constructor(id?: string);
    equals(other: RDF.Term): boolean;
}

export class Literal implements RDF.Literal {
    static readonly langStringDatatype: NamedNode;
    termType: "Literal";
    value: string;
    language: string;
    datatype: RDF.NamedNode;
    constructor(value: string, language?: string, datatype?: RDF.NamedNode);
    equals(other: RDF.Term): boolean;
}

export class Variable implements RDF.Variable {
    termType: "Variable";
    value: string;
    constructor(name: string);
    equals(other: RDF.Term): boolean;
}

export class DefaultGraph implements RDF.DefaultGraph {
    termType: "DefaultGraph";
    value: "";
    constructor();
    equals(other: RDF.Term): boolean;
}

export class Quad implements RDF.Quad {
    subject: RDF.Term;
    predicate: RDF.Term;
    object: RDF.Term;
    graph: RDF.Term;
    constructor(subject: RDF.Term, predicate: RDF.Term, object: RDF.Term, graph?: RDF.Term);
    equals(other: RDF.Quad): boolean;
}

export class DataFactory implements RDF.DataFactory {
    static defaultGraphInstance: RDF.DefaultGraph;
    constructor();
    namedNode(value: string): NamedNode;
    blankNode(value?: string): BlankNode;
    literal(value: string, languageOrDatatype?: string | RDF.NamedNode): Literal;
    variable(value: string): Variable;
    defaultGraph(): DefaultGraph;
    triple(subject: RDF.Term, predicate: RDF.Term, object: RDF.Term): Quad;
    quad(subject: RDF.Term, predicate: RDF.Term, object: RDF.Term, graph?: RDF.Term): Quad;
}
