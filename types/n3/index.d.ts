// Type definitions for N3 0.12
// Project: https://github.com/RubenVerborgh/N3.js
// Definitions by: Fred Eisele <https://github.com/phreed>
//                 Ruben Taelman <https://github.com/rubensworks>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as fs from "fs";
import * as stream from "stream";
import * as RDF from "rdf-js";

export type ErrorCallback = (err: Error, result: any) => void;

export interface Prefixes {
    [key: string]: string;
}

export class Term {
    termType: "NamedNode" | "BlankNode" | "Literal" | "Variable" | "DefaultGraph";
    constructor(iri: string);
    toJSON(): string;
    equals(other: RDF.Term): boolean;
    subclass(type: any): void;
    static fromId(id: string): NamedNode | BlankNode | Variable | Literal;
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

export interface BlankTriple {
    predicate: string;
    object: string;
}

export interface ParserConstructor {
    new (options?: ParserOptions): N3Parser;
    (options?: ParserOptions): N3Parser;
}
export const Parser: ParserConstructor;

export interface StreamParserConstructor {
    new (options?: ParserOptions): N3StreamParser;
    (options?: ParserOptions): N3StreamParser;
}
export const StreamParser: StreamParserConstructor;

export interface ParserOptions {
    format?: string;
    prefixes?: string[];
}

export type ParseCallback = (error: Error, quad: Quad, prefixes: Prefixes) => void;

export type Logger = (message?: any, ...optionalParams: any[]) => void;

export interface N3Parser {
    parse(input: string, callback: ParseCallback): void;
}

export interface N3StreamParser extends N3Parser, fs.WriteStream {
    pipe<T extends NodeJS.WritableStream | N3StreamWriter>(consumer: T): T;
}

export interface WriterConstructor {
    new (options?: WriterOptions): N3Writer;
    new (fd: any, options?: WriterOptions): N3Writer;
    (options?: WriterOptions): N3Writer;
    (fd: any, options?: WriterOptions): N3Writer;
}
export const Writer: WriterConstructor;

export interface N3Quad {
    subject: string;
    predicate: string;
    object: string;
    graph?: string;
}

export interface N3Writer {
    addTriple(subject: string, predicate: string, object: string | string[], graph?: string, done?: () => void): void;
    addTriple(quad: N3Quad): void;
    end(err?: ErrorCallback, result?: any): void;
    blank(ns: string, name: string): string;
    blank(triple: BlankTriple[]): string;
    list(triple: string[]): string[];
}

export function StreamWriter(options: WriterOptions): N3StreamWriter;

export interface N3StreamWriter extends N3Writer {
    pipe(consumer: NodeJS.WritableStream | stream.Writable): void;
}

export interface WriterOptions {
    format?: string;
    prefixes?: Prefixes;
}

export interface N3StoreWriter extends N3Writer {
    find(subject: string, predicate: string | null, object: string | null): N3Quad[];
}
export function Store(): N3StoreWriter;

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
