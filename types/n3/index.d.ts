// Type definitions for N3 1.1
// Project: https://github.com/rdfjs/n3.js
// Definitions by: Fred Eisele <https://github.com/phreed>
//                 Ruben Taelman <https://github.com/rubensworks>
//                 Laurens Rietveld <https://github.com/LaurensRietveld>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/// <reference types="node" />

import * as fs from "fs";
import * as stream from "stream";
import * as RDF from "rdf-js";
import { EventEmitter } from "events";

export interface Prefixes<I = RDF.NamedNode> {
  [key: string]: I;
}

export type Term = NamedNode | BlankNode | Literal | Variable | DefaultGraph;
export type PrefixedToIri = (suffix: string) => NamedNode;

export class NamedNode implements RDF.NamedNode {
    readonly termType: "NamedNode";
    readonly value: string;
    constructor(iri: string);
    readonly id: string;
    toJSON(): {};
    equals(other: RDF.Term): boolean;
    static subclass(type: any): void;
}

export class BlankNode implements RDF.BlankNode {
    static nextId: number;
    readonly termType: "BlankNode";
    readonly value: string;
    constructor(name: string);
    readonly id: string;
    toJSON(): {};
    equals(other: RDF.Term): boolean;
    static subclass(type: any): void;
}

export class Variable  implements RDF.Variable {
    readonly termType: "Variable";
    readonly value: string;
    constructor(name: string);
    readonly id: string;
    toJSON(): {};
    equals(other: RDF.Term): boolean;
    static subclass(type: any): void;
}

export class Literal implements RDF.Literal {
    static readonly langStringDatatype: NamedNode;
    readonly termType: "Literal";
    readonly value: string;
    readonly id: string;
    toJSON(): {};
    equals(other: RDF.Term): boolean;
    static subclass(type: any): void;
    readonly language: string;
    readonly datatype: NamedNode;
    readonly datatypeString: string;
    constructor(id: string);
}

export class DefaultGraph implements RDF.DefaultGraph {
    readonly termType: "DefaultGraph";
    readonly value: "";
    constructor();
    readonly id: string;
    toJSON(): {};
    equals(other: RDF.Term): boolean;
    static subclass(type: any): void;
}

export type Quad_Subject = NamedNode | BlankNode | Variable;
export type Quad_Predicate = NamedNode | Variable;
export type Quad_Object = NamedNode | Literal | BlankNode | Variable;
export type Quad_Graph = DefaultGraph | NamedNode | BlankNode | Variable;

export class BaseQuad implements RDF.BaseQuad {
    constructor(subject: Term, predicate: Term, object: Term, graph?: Term);
    subject: Term;
    predicate: Term;
    object: Term;
    graph: Term;
    equals(other: RDF.BaseQuad): boolean;
    toJSON(): string;
}

export class Quad extends BaseQuad implements RDF.Quad {
    constructor(subject: Term, predicate: Term, object: Term, graph?: Term);
    subject: Quad_Subject;
    predicate: Quad_Predicate;
    object: Quad_Object;
    graph: Quad_Graph;
    equals(other: RDF.BaseQuad): boolean;
    toJSON(): string;
}

export class Triple extends Quad implements RDF.Triple {}

export namespace DataFactory {
    function namedNode(value: string): NamedNode;
    function blankNode(value?: string): BlankNode;
    function literal(value: string | number, languageOrDatatype?: string | RDF.NamedNode): Literal;
    function variable(value: string): Variable;
    function defaultGraph(): DefaultGraph;
    function quad(subject: RDF.Quad_Subject, predicate: RDF.Quad_Predicate, object: RDF.Quad_Object, graph?: RDF.Quad_Graph): Quad;
    function quad<Q_In extends RDF.BaseQuad = RDF.Quad, Q_Out extends BaseQuad = Quad>(subject: Q_In['subject'], predicate: Q_In['predicate'], object: Q_In['object'], graph?: Q_In['graph']): Q_Out;
    function triple(subject: RDF.Quad_Subject, predicate: RDF.Quad_Predicate, object: RDF.Quad_Object): Quad;
    function triple<Q_In extends RDF.BaseQuad = RDF.Quad, Q_Out extends BaseQuad = Quad>(subject: Q_In['subject'], predicate: Q_In['predicate'], object: Q_In['object']): Q_Out;
}

export type ErrorCallback = (err: Error, result: any) => void;
export type QuadCallback<Q extends BaseQuad = Quad> = (result: Q) => void;
export type QuadPredicate<Q extends BaseQuad = Quad> = (result: Q) => boolean;

export type OTerm = RDF.Term | string | null;

export type Logger = (message?: any, ...optionalParams: any[]) => void;

export interface BlankTriple<Q extends RDF.BaseQuad = RDF.Quad> {
    predicate: Q['predicate'];
    object: Q['object'];
}

export interface ParserConstructor {
    new<Q extends BaseQuad = Quad> (options?: ParserOptions): N3Parser<Q>;
}
export const Parser: ParserConstructor;

export interface ParserOptions {
    format?: string;
    prefixes?: string[];
    factory?: RDF.DataFactory;
    baseIRI?: string;
}

export type ParseCallback<Q extends BaseQuad = Quad> = (error: Error, quad: Q, prefixes: Prefixes) => void;

export interface N3Parser<Q extends BaseQuad = Quad> {
    parse(input: string): Q[];
    parse(input: string, callback: ParseCallback<Q>): void;
}

export interface StreamParserConstructor {
  new<Q extends BaseQuad = Quad> (options?: ParserOptions): N3StreamParser<Q>;
}
export const StreamParser: StreamParserConstructor;

export interface N3StreamParser<Q extends BaseQuad = Quad> extends RDF.Stream<Q>, NodeJS.WritableStream, RDF.Sink<EventEmitter, RDF.Stream<Q>> {
    // Below are the NodeJS.ReadableStream methods,
    // we can not extend the interface directly,
    // as `read` clashes with RDF.Sink.
    readable: boolean;
    // read(size?: number): string | Buffer; // Overwritten by RDF.Stream
    setEncoding(encoding: string | null): void;
    pause(): this;
    resume(): this;
    isPaused(): boolean;
    pipe<T extends NodeJS.WritableStream | RDF.Stream<Q>>(destination: T, options?: { end?: boolean; }): T;
    unpipe(destination?: NodeJS.WritableStream | RDF.Stream<Q>): void;
    unshift(chunk: string | Buffer): void;
    wrap(oldStream: NodeJS.ReadableStream | RDF.Stream<Q>): NodeJS.ReadableStream;
}

export interface WriterOptions {
    format?: string;
    prefixes?: Prefixes<RDF.NamedNode | string>;
    end?: boolean;
}

export interface WriterConstructor {
    new<Q extends RDF.BaseQuad = RDF.Quad> (options?: WriterOptions): N3Writer<Q>;
    new<Q extends RDF.BaseQuad = RDF.Quad> (fd: any, options?: WriterOptions): N3Writer<Q>;
}
export const Writer: WriterConstructor;

export interface N3Writer<Q extends RDF.BaseQuad = RDF.Quad> {
    quadToString(subject: Q['subject'], predicate: Q['predicate'], object: Q['object'], graph?: Q['graph']): string;
    quadsToString(quads: RDF.Quad[]): string;
    addQuad(subject: Q['subject'], predicate: Q['predicate'], object: Q['object'] | Array<Q['object']>, graph?: Q['graph'], done?: () => void): void;
    addQuad(quad: RDF.Quad): void;
    addQuads(quads: RDF.Quad[]): void;
    addPrefix(prefix: string, iri: RDF.NamedNode | string , done?: () => void): void;
    addPrefixes(prefixes: Prefixes<RDF.NamedNode | string>, done?: () => void): void;
    end(err?: ErrorCallback, result?: string): void;
    blank(predicate: Q['predicate'], object: Q['object']): BlankNode;
    blank(triple: BlankTriple | RDF.Quad | BlankTriple[] | RDF.Quad[]): BlankNode;
    list(triple: Array<Q['object']>): Quad_Object[];
}

export interface StreamWriterConstructor {
  new<Q extends RDF.BaseQuad = RDF.Quad> (options?: WriterOptions): N3StreamWriter<Q>;
  new<Q extends RDF.BaseQuad = RDF.Quad> (fd: any, options?: WriterOptions): N3StreamWriter<Q>;
}
export const StreamWriter: StreamWriterConstructor;

export interface N3StreamWriter<Q extends RDF.BaseQuad = Quad> extends NodeJS.ReadWriteStream, RDF.Sink<RDF.Stream<Q>, EventEmitter> {}

export interface N3Store<Q_RDF extends RDF.BaseQuad = RDF.Quad, Q_N3 extends BaseQuad = Quad> extends RDF.Store<Q_RDF> {
    readonly size: number;
    addQuad(subject: Q_RDF['subject'], predicate: Q_RDF['predicate'], object: Q_RDF['object'] | Array<Q_RDF['object']>, graph?: Q_RDF['graph'], done?: () => void): void;
    addQuad(quad: Q_RDF): void;
    addQuads(quads: Q_RDF[]): void;
    removeQuad(subject: Q_RDF['subject'], predicate: Q_RDF['predicate'], object: Q_RDF['object'] | Array<Q_RDF['object']>, graph?: Q_RDF['graph'], done?: () => void): void;
    removeQuad(quad: Q_RDF): void;
    removeQuads(quads: Q_RDF[]): void;
    getQuads(subject: OTerm, predicate: OTerm, object: OTerm | OTerm[], graph: OTerm): Quad[];
    countQuads(subject: OTerm, predicate: OTerm, object: OTerm, graph: OTerm): number;
    forEach(callback: QuadCallback<Q_N3>, subject: OTerm, predicate: OTerm, object: OTerm, graph: OTerm): void;
    every(callback: QuadPredicate<Q_N3>, subject: OTerm, predicate: OTerm, object: OTerm, graph: OTerm): boolean;
    some(callback: QuadPredicate<Q_N3>, subject: OTerm, predicate: OTerm, object: OTerm, graph: OTerm): boolean;
    getSubjects(predicate: OTerm, object: OTerm, graph: OTerm): Array<Q_N3['subject']>;
    forSubjects(callback: (result: Q_N3['subject']) => void, predicate: OTerm, object: OTerm, graph: OTerm): void;
    getPredicates(subject: OTerm, object: OTerm, graph: OTerm): Array<Q_N3['predicate']>;
    forPredicates(callback: (result: Q_N3['predicate']) => void, subject: OTerm, object: OTerm, graph: OTerm): void;
    getObjects(subject: OTerm, predicate: OTerm, graph: OTerm): Array<Q_N3['object']>;
    forObjects(callback: (result: Q_N3['object']) => void, subject: OTerm, predicate: OTerm, graph: OTerm): void;
    getGraphs(subject: OTerm, predicate: OTerm, object: OTerm): Array<Q_N3['graph']>;
    forGraphs(callback: (result: Q_N3['graph']) => void, subject: OTerm, predicate: OTerm, object: OTerm): void;
    createBlankNode(suggestedName?: string): BlankNode;
}
export interface StoreConstructor {
  new<Q_RDF extends RDF.BaseQuad = RDF.Quad, Q_N3 extends BaseQuad = Quad> (triples?: Q_RDF[], options?: StoreOptions): N3Store<Q_RDF, Q_N3>;
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
    function prefix(iri: RDF.NamedNode|string, factory?: RDF.DataFactory): PrefixedToIri;
    function prefixes(
      defaultPrefixes: Prefixes<RDF.NamedNode|string>,
      factory?: RDF.DataFactory
    ): (prefix: string) => PrefixedToIri;
}
