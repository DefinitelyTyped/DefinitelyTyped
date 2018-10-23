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
    [key: string]: RDF.NamedNode;
}

export class Term implements RDF.Term {
    termType: "NamedNode" | "BlankNode" | "Literal" | "Variable" | "DefaultGraph";
    id: string;
    value: string;
    constructor(iri: string);
    toJSON(): string;
    equals(other: RDF.Term): boolean;
    static subclass(type: any): void;
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
    factory?: RDF.DataFactory;
    baseIRI?: string;
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

export interface N3StreamParser extends RDF.Stream, NodeJS.WritableStream, RDF.Sink {
    // Below are the NodeJS.ReadableStream methods,
    // we can not extend the interface directly,
    // as `read` clashes with RDF.Sink.
    readable: boolean;
    // read(size?: number): string | Buffer; // Overwritten by RDF.Stream
    setEncoding(encoding: string | null): void;
    pause(): this;
    resume(): this;
    isPaused(): boolean;
    pipe<T extends NodeJS.WritableStream | RDF.Stream>(destination: T, options?: { end?: boolean; }): T;
    unpipe(destination?: NodeJS.WritableStream | RDF.Stream): void;
    unshift(chunk: string | Buffer): void;
    wrap(oldStream: NodeJS.ReadableStream | RDF.Stream): NodeJS.ReadableStream;
}

export interface WriterOptions {
    format?: string;
    prefixes?: Prefixes;
    end?: boolean;
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
    addPrefix(prefix: string, iri: string, done?: () => void): void;
    addPrefixes(prefixes: Prefixes, done?: () => void): void;
    end(err?: ErrorCallback, result?: string): void;
    blank(predicate: RDF.Term, object: RDF.Term): RDF.Term;
    blank(triple: BlankTriple | RDF.Quad | BlankTriple[] | RDF.Quad[]): RDF.Term;
    list(triple: RDF.Term[]): RDF.Term[];
}

export interface StreamWriterConstructor {
  new (options?: WriterOptions): N3StreamWriter;
  new (fd: any, options?: WriterOptions): N3StreamWriter;
  (options?: WriterOptions): N3StreamWriter;
  (fd: any, options?: WriterOptions): N3StreamWriter;
}
export const StreamWriter: StreamWriterConstructor;

export interface N3StreamWriter extends NodeJS.ReadWriteStream, RDF.Source {}

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
    createBlankNode(suggestedName?: string): BlankNode;

    // match, removeMatches and deleteGraph are missing for full RDF.Store adherence
    remove(stream: stream.Stream): EventEmitter;
}
export interface StoreConstructor {
  new (triples?: RDF.Quad[], options?: StoreOptions): N3Store;
  (triples?: RDF.Quad[], options?: StoreOptions): N3Store;
}
export const Store: StoreConstructor;

export interface StoreOptions {
    factory?: RDF.DataFactory;
}

export namespace Util {
    function isNamedNode(value: RDF.Term | null): boolean;
    function isBlankNode(value: RDF.Term | null): boolean;
    function isLiteral(value: RDF.Term | null): boolean;
    function isVariable(value: RDF.Term | null): boolean;
    function isDefaultGraph(value: RDF.Term | null): boolean;
    function inDefaultGraph(value: RDF.Quad): boolean;
    function prefix(iri: string, factory?: RDF.DataFactory): (suffix: string) => RDF.NamedNode;
    function prefixes(defaultPrefixes: Prefixes, factory?: RDF.DataFactory): (iri: string) => (suffix: string) => RDF.NamedNode;
}
