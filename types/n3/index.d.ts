// Type definitions for N3
// Project: https://github.com/RubenVerborgh/N3.js
// Definitions by: Fred Eisele <https://github.com/phreed>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />


import * as fs from "fs";
import * as stream from "stream";

declare namespace N3 {

    type ErrorCallback = (err: Error, result: any) => void;

    interface Prefixes {
        [key: string]: string;
    }

    interface LiteralValue {
        value: string | number;
    }

    interface Triple {
        subject: string,
        predicate: string,
        object: string,
        graph?: string
    }

    interface BlankTriple {
        predicate: string,
        object: string
    }


    interface ParserConstructor {
        new (options?: ParserOptions): N3Parser;
        (options?: ParserOptions): N3Parser;
    }
    const Parser: ParserConstructor;

    interface StreamParserConstructor {
        new (options?: ParserOptions): N3StreamParser;
        (options?: ParserOptions): N3StreamParser;
    }
    const StreamParser: StreamParserConstructor;

    interface ParserOptions {
        format?: string,
        prefixes?: string[]
    }

    interface ParseCallback {
        (error: Error, triple: Triple, prefixes: Prefixes): void;
    }

    interface Logger {
        (message?: any, ...optionalParams: any[]): void;
    }
    interface N3Parser {
        parse(input: string, callback: ParseCallback): void;
        parse(subject: string, predicate: string, object: string): void;
        parse(triple: Triple): void;
        parse(stream: fs.ReadStream, log: Logger): void;
    }

    interface N3StreamParser extends N3Parser, fs.WriteStream {
        pipe<T extends NodeJS.WritableStream | N3StreamWriter>(consumer: T): T;
    }


    interface WriterConstructor {
        new (options?: WriterOptions): N3Writer;
        (options?: WriterOptions): N3Writer;

        new (fd: any, options?: WriterOptions): N3Writer;
        (fd: any, options?: WriterOptions): N3Writer;
    }
    const Writer: WriterConstructor;

    interface N3Writer {
        addTriple(subject: string, predicate: string, object: string): void;
        addTriple(subject: string, predicate: string, object: string[]): void;
        addTriple(triple: Triple): void;
        end(err?: ErrorCallback, result?: any): void;
        blank(ns: string, name: string): string;
        blank(triple: BlankTriple[]): string;
        list(triple: string[]): string[];
    }

    function StreamWriter(options: WriterOptions): N3StreamWriter;

    interface N3StreamWriter extends N3Writer {
        pipe(consumer: NodeJS.WritableStream): void;
        pipe(consumer: stream.Writable): void;
    }

    interface WriterOptions {
        format?: string,
        prefixes?: Prefixes
    }

    interface N3StoreWriter extends N3Writer {
        find(subject: string, predicate: string | null, object: string | null): Triple[];
    }
    function Store(): N3StoreWriter;

    namespace Util {
        function createLiteral(value: any): string;
        function createLiteral(value: any, type: string): string;

        function isIRI(value: string): boolean;
        function isLiteral(value: string): boolean;
        function getLiteralValue(value: string): string;
        function getLiteralLanguage(value: string): string;
        function getLiteralType(value: string): string;
        function isBlank(value: string): boolean;
        function isPrefixedName(name: string): boolean;
        function expandPrefixedName(name: string, prefixes: Prefixes): string;
    }
}

export = N3;

