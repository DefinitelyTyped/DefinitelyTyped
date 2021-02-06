import { EventEmitter } from 'events';

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

export type DocEvent = 'load' | 'create' | 'before op' | 'op' | 'del' | 'error' | 'no write pending' | 'nothing pending';

export class Doc<T = any> extends EventEmitter {
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

    on(event: 'load' | 'no write pending' | 'nothing pending', callback: () => void): this;
    on(event: 'create', callback: (source: any) => void): this;
    on(event: 'op' | 'before op', callback: (ops: any[], source: any) => void): this;
    on(event: 'del', callback: (data: any, source: any) => void): this;
    on(event: 'error', callback: (err: Error) => void): this;

    addListener(event: 'load' | 'no write pending' | 'nothing pending', callback: () => void): this;
    addListener(event: 'create', callback: (source: any) => void): this;
    addListener(event: 'op' | 'before op', callback: (ops: any[], source: any) => void): this;
    addListener(event: 'del', callback: (data: any, source: any) => void): this;
    addListener(event: 'error', callback: (err: Error) => void): this;

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

export type QueryEvent = 'ready' | 'error' | 'changed' | 'insert' | 'move' | 'remove' | 'extra';
export class Query extends EventEmitter {
    ready: boolean;
    results: Doc[];
    extra: any;
    on(event: QueryEvent, callback: (...args: any[]) => any): this;
    addListener(event: QueryEvent, callback: (...args: any[]) => any): this;
    removeListener(event: QueryEvent, listener: (...args: any[]) => any): this;
    destroy(): void;
}

export type ReceivePresenceListener<T> = (id: string, value: T) => void;
export class Presence<T = any> extends EventEmitter {
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
    on(event: 'receive', callback: ReceivePresenceListener<T>): this;
    addListener(event: 'receive', callback: ReceivePresenceListener<T>): this;
}

export class LocalPresence<T = any> extends EventEmitter {
    presence: Presence<T>;
    presenceId: string;
    connection: string;
    presenceVersion: number;
    value: T;
    submit(value: T, callback?: Callback): void;
    send(callback?: Callback): void;
    destroy(callback?: Callback): void;
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
