// Type definitions for quadstore 6.x
// Project: https://beautifulinteractions.github.io/node-quadstore/
// Definitions by: Brian Cort <https://github.com/thatcort/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { AbstractLevelDOWN } from 'abstract-leveldown';
import { EventEmitter } from 'events';
import * as r from 'rdf-js';

export = quadstore;

type MatchTerms<T, K extends string> = quadstore.MatchTerms<T, K>;
type Quad<T, K extends string> = quadstore.Quad<T, K>;
type IndexOptions = quadstore.IndexOptions;
type StreamOptions = quadstore.StreamOptions;

declare class quadstore<CK extends string = 'graph', TermType = string, Q = Quad<TermType, CK>> extends EventEmitter {
    boundary: string;
    separator: string;

    constructor(db: AbstractLevelDOWN, opts?: {contextKey?: CK});

    close(cb?: (err: any) => void): void;

    get(matchTerms: MatchTerms<TermType, CK>, cb: (err: any, quads: Q[]) => void): void;
    get(matchTerms: MatchTerms<TermType, CK>): Promise<Q[]>;

    getByIndex(name: string, opts: IndexOptions, cb: (err: any, quads: Q[]) => void): void;
    getByIndex(name: string, cb: (err: any, quads: Q[]) => void): void;
    getByIndex(name: string, opts?: IndexOptions): Promise<Q[]>;

    getByIndexStream(name: string, opts?: IndexOptions): NodeJS.ReadableStream;

    getStream(matchTerms?: MatchTerms<TermType, CK>, opts?: StreamOptions): NodeJS.ReadableStream;

    getApproximateCount(matchTerms: MatchTerms<TermType, CK>, opts: any, cb: (err: any, count: number) => void): void;
    getApproximateCount(matchTerms: MatchTerms<TermType, CK>, cb: (err: any, count: number) => void): void;
    getApproximateCount(matchTerms: MatchTerms<TermType, CK>, opts?: any): Promise<number>;

    put(quads: Q[], cb: (err: any) => void): void;
    put(quads: Q[]): Promise<void>;

    putStream(source: NodeJS.ReadableStream, opts: any, cb: (err: any) => void): void;
    putStream(source: NodeJS.ReadableStream, cb: (err: any) => void): void;
    putStream(source: NodeJS.ReadableStream, opts?: any): Promise<void>;

    patch(matchTermsOrOldQuads: Q[] | MatchTerms<TermType, CK>, newQuads: Q[], opts?: any, cb?: (err: any) => void): void;

    del(matchTermsOrOldQuads: Q[] | MatchTerms<TermType, CK>, cb: (err: any) => void): void;
    del(matchTermsOrOldQuads: Q[] | MatchTerms<TermType, CK>): Promise<void>;

    delStream(stream: NodeJS.ReadableStream, cb: (err: any) => void): void;
    delStream(stream: NodeJS.ReadableStream): Promise<void>;

    registerIndex(name: string, keyFn: (quad: Q) => string): void;

    toJSON(): string;

    toString(): string;
}

declare namespace quadstore {
    type MatchTerms<TermType = string, CK extends string = 'graph'> = {
        subject?: TermType;
        predicate?: TermType;
        object?: TermType;
    } & {[key in CK]?: TermType};

    interface Triple<TermType = string> {
        subject: TermType;
        predicate: TermType;
        object: TermType;
    }

    type Quad<TermType = string, CK extends string = 'graph'> = Triple<TermType> & {[key in CK]: string};

    interface IndexOptions {
        lt?: string;
        lte?: string;
        gt?: string;
        gte?: string;
        limit?: number;
        reverse?: boolean;
    }

    interface StreamOptions {
        limit?: number;
        offset?: number;
    }

    const QuadStore: typeof quadstore;

    class RdfStore<Q extends r.BaseQuad = r.Quad> extends quadstore<'graph', Q, r.Term> {
        constructor(abstractLevelDOWN: AbstractLevelDOWN, opts: any);

        deleteGraph(graph: r.Quad_Graph): EventEmitter;

        match(subject: r.Term, predicate: r.Term, object: r.Term, graph: r.Term): NodeJS.ReadableStream;

        remove(source: NodeJS.ReadableStream, opts?: any): void;

        removeMatches(subject: r.Term, predicate: r.Term, object: r.Term, graph: r.Term): NodeJS.ReadableStream;
    }

    namespace RdfStore {
    }
}
