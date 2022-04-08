// Type definitions for N3 1.8
// Project: https://github.com/rdfjs/n3.js
// Definitions by: Fred Eisele <https://github.com/phreed>
//                 Ruben Taelman <https://github.com/rubensworks>
//                 Laurens Rietveld <https://github.com/LaurensRietveld>
//                 Joachim Van Herwegen <https://github.com/joachimvh>
//                 Alexey Morozov <https://github.com/AlexeyMz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/// <reference types="node" />

import * as stream from "stream";
import * as RDF from "rdf-js";
import { EventEmitter } from "events";

export interface Prefixes<I = RDF.NamedNode> {
    [key: string]: I;
}

export type Term = NamedNode | BlankNode | Literal | Variable | DefaultGraph;
export type PrefixedToIri = (suffix: string) => NamedNode;

export class NamedNode<Iri extends string = string> implements RDF.NamedNode<Iri> {
    readonly termType: "NamedNode";
    readonly value: Iri;
    constructor(iri: Iri);
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

export class Variable implements RDF.Variable {
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
    readonly termType: 'Quad';
    readonly value: '';
    readonly subject: Term;
    readonly predicate: Term;
    readonly object: Term;
    readonly graph: Term;
    equals(other: RDF.BaseQuad): boolean;
    toJSON(): string;
}

export class Quad extends BaseQuad implements RDF.Quad {
    constructor(subject: Term, predicate: Term, object: Term, graph?: Term);
    readonly subject: Quad_Subject;
    readonly predicate: Quad_Predicate;
    readonly object: Quad_Object;
    readonly graph: Quad_Graph;
    equals(other: RDF.BaseQuad): boolean;
    toJSON(): string;
}

export class Triple extends Quad implements RDF.Quad { }

export namespace DataFactory {
    function namedNode<Iri extends string = string>(value: Iri): NamedNode<Iri>;
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

export interface Token {
    type: string;
    value?: string;
    line: number;
    prefix?: string;
}
export interface LexerOptions {
    lineMode?: boolean;
    n3?: boolean;
    comments?: boolean;
}

export type TokenCallback = (error: Error, token: Token) => void;

export class Lexer {
    constructor(options?: LexerOptions);
    tokenize(input: string): Token[];
    tokenize(input: string | EventEmitter, callback: TokenCallback): void;
}
export interface ParserOptions {
    format?: string;
    factory?: RDF.DataFactory;
    baseIRI?: string;
    blankNodePrefix?: string;
}

export type ParseCallback<Q extends BaseQuad = Quad> = (error: Error, quad: Q, prefixes: Prefixes) => void;

export type PrefixCallback = (prefix: string, prefixNode: RDF.NamedNode) => void;

export class Parser<Q extends BaseQuad = Quad> {
    constructor(options?: ParserOptions);
    parse(input: string): Q[];
    parse(input: string, callback: null | undefined, prefixCallback: PrefixCallback): Q[];
    parse(input: string, callback: ParseCallback<Q>, prefixCallback?: PrefixCallback): void;
}

export class StreamParser<Q extends BaseQuad = Quad> extends stream.Transform implements RDF.Stream<Q>, RDF.Sink<EventEmitter, RDF.Stream<Q>> {
    constructor(options?: ParserOptions);
    import(stream: EventEmitter): RDF.Stream<Q>;
}

export interface WriterOptions {
    format?: string;
    prefixes?: Prefixes<RDF.NamedNode | string>;
    end?: boolean;
}

export class Writer<Q extends RDF.BaseQuad = RDF.Quad> {
    constructor(options?: WriterOptions);
    constructor(fd: any, options?: WriterOptions);
    quadToString(subject: Q['subject'], predicate: Q['predicate'], object: Q['object'], graph?: Q['graph']): string;
    quadsToString(quads: RDF.Quad[]): string;
    addQuad(subject: Q['subject'], predicate: Q['predicate'], object: Q['object'] | Array<Q['object']>, graph?: Q['graph'], done?: () => void): void;
    addQuad(quad: RDF.Quad): void;
    addQuads(quads: RDF.Quad[]): void;
    addPrefix(prefix: string, iri: RDF.NamedNode | string, done?: () => void): void;
    addPrefixes(prefixes: Prefixes<RDF.NamedNode | string>, done?: () => void): void;
    end(err?: ErrorCallback, result?: string): void;
    blank(predicate: Q['predicate'], object: Q['object']): BlankNode;
    blank(triple: BlankTriple | RDF.Quad | BlankTriple[] | RDF.Quad[]): BlankNode;
    list(triple: Array<Q['object']>): Quad_Object[];
}

export class StreamWriter<Q extends RDF.BaseQuad = RDF.Quad> extends stream.Transform implements RDF.Sink<RDF.Stream<Q>, EventEmitter> {
    constructor(options?: WriterOptions);
    constructor(fd: any, options?: WriterOptions);
    import(stream: RDF.Stream<Q>): EventEmitter;
}

export class Store<Q_RDF extends RDF.BaseQuad = RDF.Quad, Q_N3 extends BaseQuad = Quad> implements RDF.Store<Q_RDF> {
    constructor(triples?: Q_RDF[], options?: StoreOptions);
    readonly size: number;
    addQuad(subject: Q_RDF['subject'], predicate: Q_RDF['predicate'], object: Q_RDF['object'] | Array<Q_RDF['object']>, graph?: Q_RDF['graph'], done?: () => void): void;
    addQuad(quad: Q_RDF): void;
    addQuads(quads: Q_RDF[]): void;
    import(stream: RDF.Stream<Q_RDF>): EventEmitter;
    removeQuad(subject: Q_RDF['subject'], predicate: Q_RDF['predicate'], object: Q_RDF['object'] | Array<Q_RDF['object']>, graph?: Q_RDF['graph'], done?: () => void): void;
    removeQuad(quad: Q_RDF): void;
    removeQuads(quads: Q_RDF[]): void;
    remove(stream: RDF.Stream<Q_RDF>): EventEmitter;
    removeMatches(subject?: Term | RegExp, predicate?: Term | RegExp, object?: Term | RegExp, graph?: Term | RegExp): EventEmitter;
    deleteGraph(graph: Q_RDF['graph'] | string): EventEmitter;
    getQuads(subject: OTerm, predicate: OTerm, object: OTerm | OTerm[], graph: OTerm): Quad[];
    match(subject?: Term | RegExp, predicate?: Term | RegExp, object?: Term | RegExp, graph?: Term | RegExp): RDF.Stream<Q_RDF>;
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
    function prefix(iri: RDF.NamedNode | string, factory?: RDF.DataFactory): PrefixedToIri;
    function prefixes(
        defaultPrefixes: Prefixes<RDF.NamedNode | string>,
        factory?: RDF.DataFactory
    ): (prefix: string) => PrefixedToIri;
}

export function termToId(term: Term): string;
export function termFromId(id: string, factory: RDF.DataFactory): Term;
