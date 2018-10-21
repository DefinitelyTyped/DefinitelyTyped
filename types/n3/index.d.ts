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

export type Term = NamedNode | BlankNode | Literal | Variable | DefaultGraph;

export class NamedNode implements RDF.NamedNode {
    termType: "NamedNode";
    value: string;
    constructor(iri: string);
    id: string;
    toJSON(): {};
    equals(other: RDF.Term): boolean;
    static subclass(type: any): void;
}

export class BlankNode implements RDF.BlankNode {
    static nextId: number;
    termType: "BlankNode";
    value: string;
    constructor(name: string);
    id: string;
    toJSON(): {};
    equals(other: RDF.Term): boolean;
    static subclass(type: any): void;
}

export class Variable  implements RDF.Variable {
    termType: "Variable";
    value: string;
    constructor(name: string);
    id: string;
    toJSON(): {};
    equals(other: RDF.Term): boolean;
    static subclass(type: any): void;
}

export class Literal implements RDF.Literal {
    static readonly langStringDatatype: NamedNode;
    termType: "Literal";
    value: string;
    id: string;
    toJSON(): {};
    equals(other: RDF.Term): boolean;
    static subclass(type: any): void;
    language: string;
    datatype: NamedNode;
    datatypeString: string;
    constructor(id: string);
}

export class DefaultGraph implements RDF.DefaultGraph {
    termType: "DefaultGraph";
    value: "";
    constructor();
    id: string;
    toJSON(): {};
    equals(other: RDF.Term): boolean;
    static subclass(type: any): void;
}

export type Quad_Subject = NamedNode | BlankNode | Variable;
export type Quad_Predicate = NamedNode | Variable;
export type Quad_Object = NamedNode | Literal | BlankNode | Variable;
export type Quad_Graph = DefaultGraph | NamedNode | BlankNode | Variable;

export class Quad implements RDF.Quad {
    constructor(subject: Quad_Subject, predicate: Quad_Predicate, object: Quad_Object, graph?: Quad_Graph);
    subject: Quad_Subject;
    predicate: Quad_Predicate;
    object: Quad_Object;
    graph: Quad_Graph;
    equals(other: RDF.Quad): boolean;
    toJSON(): string;
}

export class Triple extends Quad implements RDF.Triple {}

export namespace DataFactory {
    function namedNode(value: string): NamedNode;
    function blankNode(value?: string): BlankNode;
    function literal(value: string | number, languageOrDatatype?: string | NamedNode): Literal;
    function variable(value: string): Variable;
    function defaultGraph(): DefaultGraph;
    function quad(subject: Quad_Subject, predicate: Quad_Predicate, object: Quad_Object, graph?: Quad_Graph): Quad;
    function triple(subject: Quad_Subject, predicate: Quad_Predicate, object: Quad_Object): Quad;
}

export type ErrorCallback = (err: Error, result: any) => void;
export type QuadCallback = (result: Quad) => void;
export type QuadPredicate = (result: Quad) => boolean;

export type OTerm = RDF.Term | string | null;

export type Logger = (message?: any, ...optionalParams: any[]) => void;

export interface BlankTriple {
    predicate: RDF.Quad_Predicate;
    object: RDF.Quad_Object;
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
    quadToString(subject: RDF.Quad_Subject, predicate: RDF.Quad_Predicate, object: RDF.Quad_Object, graph?: RDF.Quad_Graph): string;
    quadsToString(quads: RDF.Quad[]): string;
    addQuad(subject: RDF.Quad_Subject, predicate: RDF.Quad_Predicate, object: RDF.Quad_Object | RDF.Quad_Object[], graph?: RDF.Quad_Graph, done?: () => void): void;
    addQuad(quad: RDF.Quad): void;
    addQuads(quads: RDF.Quad[]): void;
    addPrefix(prefix: string, iri: string, done?: () => void): void;
    addPrefixes(prefixes: Prefixes, done?: () => void): void;
    end(err?: ErrorCallback, result?: string): void;
    blank(predicate: RDF.Quad_Predicate, object: RDF.Quad_Object): BlankNode;
    blank(triple: BlankTriple | RDF.Quad | BlankTriple[] | RDF.Quad[]): BlankNode;
    list(triple: RDF.Quad_Object[]): Quad_Object[];
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
    addQuad(subject: RDF.Quad_Subject, predicate: RDF.Quad_Predicate, object: RDF.Quad_Object | RDF.Quad_Object[], graph?: RDF.Quad_Graph, done?: () => void): void;
    addQuad(quad: RDF.Quad): void;
    addQuads(quads: RDF.Quad[]): void;
    removeQuad(subject: RDF.Quad_Subject, predicate: RDF.Quad_Predicate, object: RDF.Quad_Object | RDF.Quad_Object[], graph?: RDF.Quad_Graph, done?: () => void): void;
    removeQuad(quad: RDF.Quad): void;
    removeQuads(quads: RDF.Quad[]): void;
    getQuads(subject: OTerm, predicate: OTerm, object: OTerm | OTerm[], graph: OTerm): Quad[];
    countQuads(subject: OTerm, predicate: OTerm, object: OTerm, graph: OTerm): number;
    forEach(callback: QuadCallback, subject: OTerm, predicate: OTerm, object: OTerm, graph: OTerm): void;
    every(callback: QuadPredicate, subject: OTerm, predicate: OTerm, object: OTerm, graph: OTerm): boolean;
    some(callback: QuadPredicate, subject: OTerm, predicate: OTerm, object: OTerm, graph: OTerm): boolean;
    getSubjects(predicate: OTerm, object: OTerm, graph: OTerm): Quad_Subject[];
    forSubjects(callback: QuadCallback, predicate: OTerm, object: OTerm, graph: OTerm): void;
    getPredicates(subject: OTerm, object: OTerm, graph: OTerm): Quad_Predicate[];
    forPredicates(callback: QuadCallback, subject: OTerm, object: OTerm, graph: OTerm): void;
    getObjects(subject: OTerm, predicate: OTerm, graph: OTerm): Quad_Object[];
    forObjects(callback: QuadCallback, subject: OTerm, predicate: OTerm, graph: OTerm): void;
    getGraphs(subject: OTerm, predicate: OTerm, object: OTerm): Quad_Graph[];
    forGraphs(callback: QuadCallback, subject: OTerm, predicate: OTerm, object: OTerm): void;
    createBlankNode(suggestedName?: string): BlankNode;

    // match, removeMatches and deleteGraph are missing for full RDF.Store adherence
    remove(stream: stream.Stream): EventEmitter;
}
export interface StoreConstructor {
  new (triples?: Quad[], options?: StoreOptions): N3Store;
  (triples?: Quad[], options?: StoreOptions): N3Store;
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
    function prefix(iri: string, factory?: RDF.DataFactory): (suffix: string) => NamedNode;
    function prefixes(defaultPrefixes: Prefixes, factory?: RDF.DataFactory): (iri: string) => (suffix: string) => NamedNode;
}
