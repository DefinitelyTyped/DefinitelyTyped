// Type definitions for N3 1.0
// Project: https://github.com/RubenVerborgh/N3.js
// Definitions by: Fred Eisele <https://github.com/phreed>
//                 Ruben Taelman <https://github.com/rubensworks>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/// <reference types="node" />

import * as fs from "fs";
import * as stream from "stream";
import * as RDF from "rdf-js";
import { EventEmitter } from "events";

export interface Prefixes {
    [key: string]: string;
}

export class Term implements RDF.Term {
    termType: "NamedNode" | "BlankNode" | "Literal" | "Variable" | "DefaultGraph";
    id: string;
    value: string;
    constructor(iri: string);
    toJSON(): string;
    equals(other: RDF.Term): boolean;
    static subclass(type: any): void;
    static fromId(id: string): NamedNode | BlankNode | Variable | Literal;
    static toId(term: string | null | RDF.Term): string;
}

export class NamedNode extends Term implements RDF.NamedNode {
    termType: "NamedNode";
    value: string;
    constructor(iri: string);
}

export class BlankNode extends Term implements RDF.BlankNode {
    static nextId: number;
    termType: "BlankNode";
    value: string;
    constructor(name: string);
}

export class Variable extends Term implements RDF.Variable {
    termType: "Variable";
    value: string;
    constructor(name: string);
}

export class Literal extends Term implements RDF.Literal {
    static readonly langStringDatatype: NamedNode;
    termType: "Literal";
    value: string;
    language: string;
    datatype: RDF.NamedNode;
    datatypeString: string;
    constructor(id: string);
}

export class DefaultGraph extends Term implements RDF.DefaultGraph {
    termType: "DefaultGraph";
    value: "";
    constructor();
}

export class Quad implements RDF.Quad {
    constructor(subject: RDF.Term, predicate: RDF.Term, object: RDF.Term, graph?: RDF.Term);
    subject: RDF.Term;
    predicate: RDF.Term;
    object: RDF.Term;
    graph: RDF.Term;
    equals(other: RDF.Quad): boolean;
    toJSON(): string;
}

export class Triple extends Quad implements RDF.Triple {}

export namespace DataFactory {
    function namedNode(value: string): RDF.NamedNode;
    function blankNode(value?: string): RDF.BlankNode;
    function literal(value: string | number, languageOrDatatype?: string | RDF.NamedNode): RDF.Literal;
    function variable(value: string): RDF.Variable;
    function defaultGraph(): RDF.DefaultGraph;
    function triple(subject: RDF.Term, predicate: RDF.Term, object: RDF.Term): RDF.Quad;
    function quad(subject: RDF.Term, predicate: RDF.Term, object: RDF.Term, graph?: RDF.Term): RDF.Quad;
}

export type ErrorCallback = (err: Error, result: any) => void;
export type QuadCallback = (result: Quad) => void;
export type QuadPredicate = (result: Quad) => boolean;

export type OTerm = RDF.Term | string | null;

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
    quadToString(subject: RDF.Term, predicate: RDF.Term, object: RDF.Term, graph?: RDF.Term): string;
    quadsToString(quads: RDF.Quad[]): string;
    addQuad(subject: RDF.Term, predicate: RDF.Term, object: RDF.Term | RDF.Term[], graph?: RDF.Term, done?: () => void): void;
    addQuad(quad: RDF.Quad): void;
    addQuads(quads: RDF.Quad[]): void;
    end(err?: ErrorCallback, result?: any): void;
    blank(predicate: RDF.Term, object: RDF.Term): RDF.Term;
    blank(triple: BlankTriple | RDF.Quad | BlankTriple[] | RDF.Quad[]): RDF.Term;
    list(triple: RDF.Term[]): RDF.Term[];
}

export function StreamWriter(options: WriterOptions): N3StreamWriter;

export interface N3StreamWriter extends N3Writer {
    pipe(consumer: NodeJS.WritableStream | stream.Writable): void;
}

export interface N3Store extends RDF.Sink {
    readonly size: number;
    addQuad(subject: RDF.Term, predicate: RDF.Term, object: RDF.Term | RDF.Term[], graph?: RDF.Term, done?: () => void): void;
    addQuad(quad: RDF.Quad): void;
    addQuads(quads: RDF.Quad[]): void;
    removeQuad(subject: RDF.Term, predicate: RDF.Term, object: RDF.Term | RDF.Term[], graph?: RDF.Term, done?: () => void): void;
    removeQuad(quad: RDF.Quad): void;
    removeQuads(quads: RDF.Quad[]): void;
    getQuads(subject: OTerm, predicate: OTerm, object: OTerm | OTerm[], graph: OTerm): Quad[];
    countQuads(subject: OTerm, predicate: OTerm, object: OTerm, graph: OTerm): number;
    forEach(callback: QuadCallback, subject: OTerm, predicate: OTerm, object: OTerm, graph: OTerm): void;
    every(callback: QuadPredicate, subject: OTerm, predicate: OTerm, object: OTerm, graph: OTerm): boolean;
    some(callback: QuadPredicate, subject: OTerm, predicate: OTerm, object: OTerm, graph: OTerm): boolean;
    getSubjects(predicate: OTerm, object: OTerm, graph: OTerm): RDF.Term[];
    forSubjects(callback: QuadCallback, predicate: OTerm, object: OTerm, graph: OTerm): void;
    getPredicates(subject: OTerm, object: OTerm, graph: OTerm): RDF.Term[];
    forPredicates(callback: QuadCallback, subject: OTerm, object: OTerm, graph: OTerm): void;
    getObjects(subject: OTerm, predicate: OTerm, graph: OTerm): RDF.Term[];
    forObjects(callback: QuadCallback, subject: OTerm, predicate: OTerm, graph: OTerm): void;
    getGraphs(subject: OTerm, predicate: OTerm, object: OTerm): RDF.Term[];
    forGraphs(callback: QuadCallback, subject: OTerm, predicate: OTerm, object: OTerm): void;
    createBlankNode(suggestedName: string): BlankNode;

    // match, removeMatches and deleteGraph are missing for full RDF.Store adherence
    remove(stream: stream.Stream): EventEmitter;
}
export function Store(triples?: RDF.Quad[], options?: StoreOptions): N3Store;

export interface StoreOptions {
    prefixes?: Prefixes;
}

export namespace Util {
    function isNamedNode(value: RDF.Term | null): boolean;
    function isBlankNode(value: RDF.Term | null): boolean;
    function isLiteral(value: RDF.Term | null): boolean;
    function isVariable(value: RDF.Term | null): boolean;
    function isDefaultGraph(value: RDF.Term | null): boolean;
    function inDefaultGraph(value: RDF.Quad): boolean;
    function prefix(iri: string): (suffix: string) => RDF.NamedNode;
    function prefixes(defaultPrefixes: Prefixes): (iri: string) => (suffix: string) => RDF.NamedNode;
}
