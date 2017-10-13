// Type definitions for N3 0.12
// Project: https://github.com/RubenVerborgh/N3.js
// Definitions by: Fred Eisele <https://github.com/phreed>
//                 Ruben Taelman <https://github.com/rubensworks>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/// <reference types="node" />

import * as fs from "fs";
import * as stream from "stream";
import * as RDF from "rdf-js";

export interface Prefixes {
    [key: string]: string;
}

export class Term {
    termType: "NamedNode" | "BlankNode" | "Literal" | "Variable" | "DefaultGraph";
    id: string;
    constructor(iri: string);
    toJSON(): string;
    equals(other: RDF.Term): boolean;
    subclass(type: any): void;
    static fromId(id: string): NamedNode | BlankNode | Variable | Literal;
    static toId(term: string | null | RDF.Term): string;
}

export class NamedNode extends Term implements RDF.NamedNode {
    termType: "NamedNode";
    value: string;
    constructor(iri: string);
    toJSON(): string;
    equals(other: RDF.Term): boolean;
}

export class BlankNode extends Term implements RDF.BlankNode {
    static nextId: number;
    termType: "BlankNode";
    value: string;
    constructor(name: string);
    toJSON(): string;
    equals(other: RDF.Term): boolean;
}

export class Variable extends Term implements RDF.Variable {
    termType: "Variable";
    value: string;
    constructor(name: string);
    toJSON(): string;
    equals(other: RDF.Term): boolean;
}

export class Literal extends Term implements RDF.Literal {
    static readonly langStringDatatype: NamedNode;
    termType: "Literal";
    value: string;
    language: string;
    datatype: RDF.NamedNode;
    datatypeString: string;
    constructor(id: string);
    toJSON(): string;
    equals(other: RDF.Term): boolean;
}

export class DefaultGraph extends Term implements RDF.DefaultGraph {
    termType: "DefaultGraph";
    value: "";
    constructor();
    equals(other: RDF.Term): boolean;
}

export class Quad implements RDF.Quad {
    constructor(subject: RDF.Term, predicate: RDF.Term, object: RDF.Term, graph?: RDF.Term);
    subject: RDF.Term;
    predicate: RDF.Term;
    object: RDF.Term;
    graph: RDF.Term;
    toJSON(): string;
    equals(quad: RDF.Quad): boolean;
}

export class Triple extends Quad implements RDF.Triple {}

export type ErrorCallback = (err: Error, result: any) => void;
export type QuadCallback = (result: Quad) => void;
export type QuadPredicate = (result: Quad) => boolean;

export type OTerm = string | null;
export type OIRI = RDF.Term | null;

export type Logger = (message?: any, ...optionalParams: any[]) => void;

export interface BlankTriple {
    predicate: RDF.Term;
    object: RDF.Term;
}

export interface ParserConstructor {
    new (options?: ParserOptions): N3Parser;
    (options?: ParserOptions): N3Parser;
}
export const Parser: ParserConstructor;

export interface ParserOptions {
    format?: string;
    prefixes?: string[];
}

export type ParseCallback = (error: Error, quad: Quad, prefixes: Prefixes) => void;

export interface N3Parser {
    parse(input: string, callback: ParseCallback): void;
}

export interface StreamParserConstructor {
  new (options?: ParserOptions): N3StreamParser;
  (options?: ParserOptions): N3StreamParser;
}
export const StreamParser: StreamParserConstructor;

export interface N3StreamParser extends N3Parser, fs.WriteStream {
    pipe<T extends NodeJS.WritableStream | N3StreamWriter>(consumer: T): T;
}

export interface WriterOptions {
    format?: string;
    prefixes?: Prefixes;
}

export interface WriterConstructor {
    new (options?: WriterOptions): N3Writer;
    new (fd: any, options?: WriterOptions): N3Writer;
    (options?: WriterOptions): N3Writer;
    (fd: any, options?: WriterOptions): N3Writer;
}
export const Writer: WriterConstructor;

export interface N3Writer {
    tripleToString(subject: RDF.Term, predicate: RDF.Term, object: RDF.Term, graph?: RDF.Term): string;
    triplesToString(quads: RDF.Quad[]): string;
    addTriple(subject: RDF.Term, predicate: RDF.Term, object: RDF.Term | RDF.Term[], graph?: RDF.Term, done?: () => void): void;
    addTriple(quad: RDF.Quad): void;
    addTriples(quads: RDF.Quad[]): void;
    end(err?: ErrorCallback, result?: any): void;
    blank(predicate: RDF.Term, object: RDF.Term): string;
    blank(triple: BlankTriple | RDF.Quad | BlankTriple[] | RDF.Quad[]): string;
    list(triple: RDF.Term[]): string[];
}

export function StreamWriter(options: WriterOptions): N3StreamWriter;

export interface N3StreamWriter extends N3Writer {
    pipe(consumer: NodeJS.WritableStream | stream.Writable): void;
}

export interface N3Store {
    size: number;
    addTriple(subject: RDF.Term, predicate: RDF.Term, object: RDF.Term | RDF.Term[], graph?: RDF.Term, done?: () => void): void;
    addTriple(quad: RDF.Quad): void;
    addTriples(quads: RDF.Quad[]): void;
    addPrefix(prefix: string, iri: RDF.NamedNode): void;
    addPrefixes(prefixes: Prefixes): void;
    removeTriple(subject: RDF.Term, predicate: RDF.Term, object: RDF.Term | RDF.Term[], graph?: RDF.Term, done?: () => void): void;
    removeTriple(quad: RDF.Quad): void;
    removeTriples(quads: RDF.Quad[]): void;
    getTriples(subject: OTerm, predicate: OTerm, object: OTerm, graph: OTerm): Quad[];
    getTriplesByIRI(subject: OIRI, predicate: OIRI, object: OIRI, graph: OIRI): Quad[];
    countTriples(subject: OTerm, predicate: OTerm, object: OTerm, graph: OTerm): number;
    countTriplesByIRI(subject: OIRI, predicate: OIRI, object: OIRI, graph: OIRI): number;
    forEach(callback: QuadCallback, subject: OTerm, predicate: OTerm, object: OTerm, graph: OTerm): void;
    forEachByIRI(callback: QuadCallback, subject: OIRI, predicate: OIRI, object: OIRI, graph: OIRI): void;
    every(callback: QuadPredicate, subject: OTerm, predicate: OTerm, object: OTerm, graph: OTerm): boolean;
    everyByIRI(callback: QuadPredicate, subject: OIRI, predicate: OIRI, object: OIRI, graph: OIRI): boolean;
    some(callback: QuadPredicate, subject: OTerm, predicate: OTerm, object: OTerm, graph: OTerm): boolean;
    someByIRI(callback: QuadPredicate, subject: OIRI, predicate: OIRI, object: OIRI, graph: OIRI): boolean;
    getSubjects(predicate: OTerm, object: OTerm, graph: OTerm): RDF.Term[];
    getSubjectsByIRI(predicate: OIRI, object: OIRI, graph: OIRI): RDF.Term[];
    forSubjects(callback: QuadCallback, predicate: OTerm, object: OTerm, graph: OTerm): void;
    forSubjectsByIRI(callback: QuadCallback, predicate: OIRI, object: OIRI, graph: OIRI): void;
    getPredicates(subject: OTerm, object: OTerm, graph: OTerm): RDF.Term[];
    getPredicatesByIRI(subject: OIRI, object: OIRI, graph: OIRI): RDF.Term[];
    forPredicates(callback: QuadCallback, subject: OTerm, object: OTerm, graph: OTerm): void;
    forPredicatesByIRI(callback: QuadCallback, subject: OIRI, object: OIRI, graph: OIRI): void;
    getObjects(subject: OTerm, predicate: OTerm, graph: OTerm): RDF.Term[];
    getObjectsByIRI(subject: OIRI, predicate: OIRI, graph: OIRI): RDF.Term[];
    forObjects(callback: QuadCallback, subject: OTerm, predicate: OTerm, graph: OTerm): void;
    forObjectsByIRI(callback: QuadCallback, subject: OIRI, predicate: OIRI, graph: OIRI): void;
    getGraphs(subject: OTerm, predicate: OTerm, object: OTerm): RDF.Term[];
    getGraphsByIRI(subject: OIRI, predicate: OIRI, object: OIRI): RDF.Term[];
    forGraphs(callback: QuadCallback, subject: OTerm, predicate: OTerm, object: OTerm): void;
    forGraphsByIRI(callback: QuadCallback, subject: OIRI, predicate: OIRI, object: OIRI): void;
    createBlankNode(suggestedName: string): BlankNode;
}
export function Store(triples?: RDF.Quad[], options?: StoreOptions): N3Store;

export interface StoreOptions {
    prefixes?: Prefixes;
}

export namespace Util {
    function createLiteral(value: any, type?: string): string;

    function isIRI(value: string): boolean;
    function isLiteral(value: string): boolean;
    function getLiteralValue(value: string): string;
    function getLiteralLanguage(value: string): string;
    function getLiteralType(value: string): string;
    function isBlank(value: string): boolean;
    function isPrefixedName(name: string): boolean;
    function expandPrefixedName(name: string, prefixes: Prefixes): string;
}
