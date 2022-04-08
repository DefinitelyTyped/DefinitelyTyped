import { Connection } from './client';

export type JSONValue = string | number | boolean | null | JSONObject | JSONArray;
export interface JSONObject {
  [name: string]: JSONValue;
}
export interface JSONArray extends Array<JSONValue> {}

export type Path = ReadonlyArray<string|number>;
export interface Snapshot<T = any> {
    id: string;
    v: number;
    type: string | null;
    data?: T;
    m: SnapshotMeta | null;
}

export interface SnapshotMeta {
    ctime: number;
    mtime: number;
    // Users can use server middleware to add additional metadata to snapshots.
    [key: string]: any;
}

export interface AddNumOp { p: Path; na: number; }

export interface ListInsertOp  { p: Path; li: any; }
export interface ListDeleteOp  { p: Path; ld: any; }
export interface ListReplaceOp { p: Path; li: any; ld: any; }
export interface ListMoveOp    { p: Path; lm: any; }

export interface ObjectInsertOp  { p: Path; oi: any; }
export interface ObjectDeleteOp  { p: Path; od: any; }
export interface ObjectReplaceOp { p: Path; oi: any; od: any; }

export interface StringInsertOp { p: Path; si: string; }
export interface StringDeleteOp { p: Path; sd: string; }

export interface SubtypeOp { p: Path; t: string; o: any; }

export type Op = AddNumOp | ListInsertOp | ListDeleteOp | ListReplaceOp | ListMoveOp | ObjectInsertOp | ObjectDeleteOp | ObjectReplaceOp | StringInsertOp | StringDeleteOp | SubtypeOp;

export interface RawOp {
    src: string;
    seq: number;
    v: number;
    m: any;
    c: string;
    d: string;
}

export type CreateOp = RawOp & { create: { type: string; data: any }; del: undefined; op: undefined; };
export type DeleteOp = RawOp & { del: boolean; create: undefined; op: undefined; };
export type EditOp = RawOp & { op: any[]; create: undefined; del: undefined; };

export type OTType = 'ot-text' | 'ot-json0' | 'ot-json1' | 'ot-text-tp2' | 'rich-text';

export interface Type {
    name?: string;
    uri?: string;
    create(initialData?: any): any;
    apply(snapshot: any, op: any): any;
    transform(op1: any, op2: any, side: 'left' | 'right'): any;
    compose(op1: any, op2: any): any;
    invert?(op: any): any;
    normalize?(op: any): any;
    transformCursor?(cursor: any, op: any, isOwnOp: boolean): any;
    serialize?(snapshot: any): any;
    deserialize?(data: any): any;
    [key: string]: any;
}
export interface Types {
    register: (type: Type) => void;
    map: { [key: string]: Type };
}

export type LoggerFunction = typeof console.log;
export interface LoggerOverrides {
    info?: LoggerFunction;
    warn?: LoggerFunction;
    error?: LoggerFunction;
}
export class Logger {
    setMethods(overrides: LoggerOverrides): void;
}

export interface Error {
    code: number;
    message: string;
}
export interface ShareDBSourceOptions { source?: any; }
// interface ShareDBCreateOptions extends ShareDBSourceOptions {}
// interface ShareDBDelOptions extends ShareDBSourceOptions {}
// interface ShareDBSubmitOpOptions extends ShareDBSourceOptions {}

export type Callback = (err: Error) => any;

export type DocEvent = keyof DocEventMap<any>;

export class Doc<T = any> extends TypedEmitter<DocEventMap<T>> {
    connection: Connection;
    type: Type | null;
    id: string;
    collection: string;
    data: T;
    version: number | null;
    subscribed: boolean;
    preventCompose: boolean;
    paused: boolean;
    submitSource: boolean;

    fetch: (callback?: (err: Error) => void) => void;
    subscribe: (callback?: (err: Error) => void) => void;
    unsubscribe: (callback?: (err: Error) => void) => void;

    ingestSnapshot(snapshot: Snapshot<T>, callback?: Callback): void;
    destroy(callback?: Callback): void;
    create(data: any, callback?: Callback): void;
    create(data: any, type?: OTType, callback?: Callback): void;
    create(data: any, type?: OTType, options?: ShareDBSourceOptions, callback?: Callback): void;
    submitOp(data: any, options?: ShareDBSourceOptions, callback?: Callback): void;
    del(options: ShareDBSourceOptions, callback?: (err: Error) => void): void;
    whenNothingPending(callback: () => void): void;
    hasPending(): boolean;
    hasWritePending(): boolean;
    pause(): void;
    resume(): void;
    flush(): void;
}

export interface DocEventMap<T> {
    'load': () => void;
    'no write pending': () => void;
    'nothing pending': () => void;
    'create': (source: any) => void;
    'op': (ops: [any], source: any) => void;
    'op batch': (ops: any[], source: any) => void;
    'before op': (ops: [any], source: any) => void;
    'before op batch': (ops: any[], source: any) => void;
    'del': (data: T, source: any) => void;
    'error': (error: Error) => void;
    'destroy': () => void;
}

export type QueryEvent = keyof QueryEventMap<any>;
export class Query<T = any> extends TypedEmitter<QueryEventMap<T>> {
    action: 'qf' | 'qs';
    connection: Connection;
    id: string;
    collection: string;
    query: any;
    ready: boolean;
    sent: boolean;
    results: Array<Doc<T>>;
    extra: any;
    destroy(callback?: Callback): void;
}

export interface QueryEventMap<T> {
    'ready': () => void;
    'error': (error: Error) => void;
    'insert': (inserted: Array<Doc<T>>, index: number) => void;
    'remove': (removed: Array<Doc<T>>, index: number) => void;
    'move': (moved: Array<Doc<T>>, from: number, to: number) => void;
    'changed': (docs: Array<Doc<T>>) => void;
    'extra': (extra: any) => void;
}

export type ReceivePresenceListener<T> = (id: string, value: T) => void;
export class Presence<T = any> extends TypedEmitter<PresenceEventMap<T>> {
    connection: string;
    channel: string;
    wantSubscribe: boolean;
    subscribed: boolean;
    remotePresences: Record<string, T>;
    localPresences: Record<string, LocalPresence<T>>;
    subscribe(callback?: Callback): void;
    unsubscribe(callback?: Callback): void;
    create(id?: string): LocalPresence<T>;
    destroy(callback?: Callback): void;
}

export interface PresenceEventMap<T> {
    'receive': ReceivePresenceListener<T>;
    'error': (error: Error) => void;
}

export class LocalPresence<T = any> extends TypedEmitter<LocalPresenceEventMap> {
    presence: Presence<T>;
    presenceId: string;
    connection: string;
    presenceVersion: number;
    value: T;
    submit(value: T, callback?: Callback): void;
    send(callback?: Callback): void;
    destroy(callback?: Callback): void;
}

export interface LocalPresenceEventMap {
    'error': (error: Error) => void;
}

export type RequestAction = 'qf' | 'qs' | 'qu' | 'bf' | 'bs' | 'bu' | 'f' | 's' | 'u' | 'op' | 'nf' | 'nt';

export interface ClientRequest {
    /** Short name of the request's action */
    a: RequestAction;

    [propertyName: string]: any;
}

export interface Socket {
    readyState: number;

    close(reason?: number): void;
    send(data: any): void;

    onmessage: (event: any) => void;
    onclose: (event: any) => void;
    onerror: (event: any) => void;
    onopen: (event: any) => void;
}

/**
 * Typed Emitter from:
 * https://github.com/binier/tiny-typed-emitter/
 *
 * MIT License
 * Copyright (c) 2020 Zurab Benashvili (binier) <zura.bena@gmail.com>
 */
export class TypedEmitter<L extends ListenerSignature<L>> {
    static defaultMaxListeners: number;
    addListener<U extends keyof L>(event: U, listener: L[U]): this;
    prependListener<U extends keyof L>(event: U, listener: L[U]): this;
    prependOnceListener<U extends keyof L>(event: U, listener: L[U]): this;
    removeListener<U extends keyof L>(event: U, listener: L[U]): this;
    removeAllListeners(event?: keyof L): this;
    once<U extends keyof L>(event: U, listener: L[U]): this;
    on<U extends keyof L>(event: U, listener: L[U]): this;
    off<U extends keyof L>(event: U, listener: L[U]): this;
    emit<U extends keyof L>(event: U, ...args: Parameters<L[U]>): boolean;
    eventNames(): Array<keyof L>;
    listenerCount(type: keyof L): number;
    listeners<U extends keyof L>(type: U): Array<L[U]>;
    rawListeners<U extends keyof L>(type: U): Array<L[U]>;
    getMaxListeners(): number;
    setMaxListeners(n: number): this;
}

export type ListenerSignature<L> = {
    [E in keyof L]: (...args: any[]) => any;
};
