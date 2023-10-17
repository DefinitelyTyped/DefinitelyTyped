/// <reference types="node" />

import { ChildProcessWithoutNullStreams } from "node:child_process";
import { EventEmitter } from "node:events";

export type ResultEntry = number | string | ResultList | ResultDict;
export type Result = Record<string, ResultEntry>;

export interface ResultList {
    head: ResultEntry;
    tail: ResultList | "[]";
}

export interface ResultDict {
    tag: string;
    content: Result;
}

declare class Deferred<T = unknown> {
    promise: Promise<T>;
    resolve: (this: Promise<T>, value: T) => void;
    reject: (this: Promise<T>, reason?: string) => void;
}
export type { Deferred };

export type QueryStateString =
    | (typeof QueryState)["FRESH"]
    | (typeof QueryState)["OPEN"]
    | (typeof QueryState)["WAITING"]
    | (typeof QueryState)["CLOSED"];

declare class QueryState {
    state: QueryStateString;

    setWaiting(): void;
    setOpen(): void;
    setClosed(): void;

    isFresh(): boolean;
    isOpen(): boolean;
    isWaiting(): boolean;
    isClosed(): boolean;

    setState(state: QueryStateString): void;

    static readonly FRESH: "fresh";
    static readonly OPEN: "open";
    static readonly WAITING: "waiting";
    static readonly CLOSED: "closed";
}
export type { QueryState };

declare class QueuedQuery {
    constructor(string: string, deferred: Deferred);
    string: string;
    deferred: Deferred;
}
export type { QueuedQuery };

declare class Query {
    query: string;
    engine: Engine;
    deferred: Deferred | null;
    state: QueryState;

    next(): Promise<Result | false>;
    close(): Promise<void>;
}
export type { Query };

export type EngineStateString =
    | (typeof EngineState)["ACCEPTING"]
    | (typeof EngineState)["QUERY"]
    | (typeof EngineState)["WAITING"]
    | (typeof EngineState)["CLOSED"];

declare class EngineState extends EventEmitter {
    state: EngineStateString;

    isClosed(): boolean;
    isAccepting(): boolean;
    isQuery(): boolean;

    setAccepting(): void;
    setClosed(): void;
    setQuery(): void;
    setWaiting(): void;

    setState(state: EngineStateString): void;

    static readonly ACCEPTING: "accepting";
    static readonly QUERY: "query";
    static readonly WAITING: "waiting";
    static readonly CLOSED: "closed";
}
export type { EngineState };

export class Engine {
    swipl: ChildProcessWithoutNullStreams;
    state: EngineState;
    status: number;
    query: Query | null;
    queue: QueuedQuery[];
    createQuery(string: string): Query | Promise<Query>;
    call(string: string): Promise<Result | false>;
    close(): void;
}

export type Term = List | Variable | Compound | Dict;
export type TermLike = Term | string | number | null | undefined | { toProlog(): string };

declare class List {
    items: Term[];
    constructor(items: readonly Term[]);
    toProlog(): string;
}
export type { List };

declare class Variable {
    name: string;
    constructor(name: any);
    toProlog(): string;
}
export type { Variable };

declare class Compound {
    name: string;
    args: Term[];
    constructor(name: string, args: readonly Term[]);
    toProlog(): string;
}
export type { Compound };

declare class Dict {
    tag: string | Variable;
    content: Record<string, string | number | boolean | Term>;
    constructor(tag: any, content: any);
    toProlog(): string;
}
export type { Dict };

export namespace term {
    function list(items: readonly TermLike[]): List;
    function variable(name: string): Variable;
    function compound(name: string, args: readonly TermLike[]): Compound;
    function dict(tag: string | Variable, content: object): Dict;
    function serialize(term: TermLike): string;
}
