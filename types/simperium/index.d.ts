import type { EventEmitter } from "events";

export type ChangeVersion = string;
export type EntityId = string;

interface FailedAuthDetails {
    msg: string;
    code: 400 | 401 | 500;
}

interface ClientEvent extends SimperiumEvent {
    "access-token": (token: string) => void;
    close: () => void;
    connect: () => void;
    disconnect: () => void;
    error: (error: Error) => void;
    message: (message: string) => void;
    "message:h": (count: number) => void;
    "message:log": (logLevel: 0 | 1 | 2) => void;
    reconnect: (attempt: number) => void;
    send: (msg: string) => void;
    unauthorized: (details: FailedAuthDetails) => void;
}

interface HeartbeatEvent extends SimperiumEvent {
    beat: (count: number) => void;
    timeout: () => void;
}

interface Heartbeat extends CustomEventEmitter<HeartbeatEvent> {}

export interface Client<Buckets = {}> extends CustomEventEmitter<ClientEvent> {
    buckets: ReadonlyArray<Bucket<Buckets>>;
    heartbeat: Heartbeat;

    bucket<Name extends keyof Buckets>(name: Name): Bucket<Name, Buckets[Name]>;
}

export interface BucketObject<T> {
    id: EntityId;
    data: T;
    isIndexing?: boolean | undefined;
}

export type EntityCallback<T, E = Error | null> = (
    error: E extends null ? null : NonNullable<E>,
    entity: E extends null ? T : undefined,
) => void;

export type EntitiesCallback<T, E = Error | null> = (
    error: E extends null ? null : NonNullable<E>,
    entities: E extends null ? T[] : undefined,
) => void;

export interface BucketStore<T, Q = {}> {
    get(entityId: EntityId, callback: EntityCallback<BucketObject<T>>): void;
    find(query: Q, callback: EntitiesCallback<BucketObject<T>>): void;
    remove(entityId: EntityId, callback: () => void): void;
    update(entityId: EntityId, entity: T, isIndexing: boolean, callback: EntityCallback<BucketObject<T>>): void;
}

export interface Ghost<T> {
    version: number;
    key: EntityId;
    data: T;
}

export interface GhostStore<T> {
    get(entityId: EntityId): Promise<Ghost<T>>;
    put(entityId: EntityId, version: number, data: T): Promise<Ghost<T>>;
    remove(entityId: EntityId): Promise<Ghost<T>>;
    eachGhost(iterator: (ghost: Ghost<T>) => void): void;
    getChangeVersion(): Promise<ChangeVersion>;
    setChangeVersion(version: ChangeVersion): Promise<void>;
}

type DMPDiff = string;

type DiffOp<T> =
    | { o: "+"; v: T }
    | { o: "-" }
    | { o: "r"; v: T }
    | { o: "I"; v: number }
    | {
        o: "L";
        v: { [index: number]: T extends Array<infer U> ? DiffOp<U> : never };
    }
    | { o: "O"; v: JSONDiff<T> }
    | { o: "d"; v: DMPDiff };

type JSONDiff<T> = { [K in keyof T]?: DiffOp<T[K]> };

interface ModificationChange<T> {
    o: "M";
    id: string;
    ccid: string;
    v: JSONDiff<T>;
    sv?: number | undefined;
    d?: T | undefined;
}

interface RemovalChange {
    o: "-";
    id: string;
    ccid: string;
}

export type Change<T> = ModificationChange<T> | RemovalChange;

interface BucketEvent<T> extends SimperiumEvent {
    error: (err: Error, change: Change<T>) => void;
    index: (cv: ChangeVersion) => void;
    indexing: () => void;
    remove: (entityId: EntityId) => void;
    update: (entityId: EntityId, updatedEntity: T, remoteInfo: RemoteInfo<T>) => void;
}

export interface RemoteInfo<T> {
    isIndexing: boolean;
    original: T;
    patch: JSONDiff<T>;
}

interface Revision<T> {
    id: EntityId;
    version: number;
    data: T;
}

export interface Bucket<Name, T = null, Q = never> extends CustomEventEmitter<BucketEvent<T>> {
    channel: Channel<T>;
    isIndexing: boolean;
    name: Name;

    add(data: T): Promise<BucketObject<T>>;
    beforeNetworkChange(
        callback: (entityId: EntityId, updatedEntity: T, baseEntity: T, patch: JSONDiff<T>) => T | null,
    ): void;
    get(entityId: EntityId): Promise<BucketObject<T>>;
    getRevisions(entityId: EntityId): Promise<ReadonlyArray<Revision<T>>>;
    getVersion(entityId: EntityId): Promise<number>;
    find(query: Q): Promise<ReadonlyArray<BucketObject<T>>>;
    hasLocalChanges(): Promise<boolean>;
    reload(): void;
    remove(entityId: EntityId): Promise<void>;
    touch(entityId: EntityId): Promise<BucketObject<T>>;
    update(entityId: EntityId, updatedEntity: T, options: { sync: boolean }): Promise<BucketObject<T>>;
    update(
        entityId: EntityId,
        updatedEntity: T,
        remoteInfo: RemoteInfo<T>,
        options?: { sync: boolean },
    ): Promise<BucketObject<T>>;
}

export function Bucket<T>(name: string, storeProvider: BucketStore<T>, channel?: Channel<T>): Bucket<T>;

type LocalQueuedChange<T> =
    | { type: "modify"; id: EntityId; object: T }
    | { type: "full"; originalChange: Change<T>; object: T }
    | { type: "remove"; id: EntityId };

interface LocalQueueEvent<T> extends SimperiumEvent {
    queued: (id: EntityId, change: Change<T>, queue: ReadonlyArray<LocalQueuedChange<T>>) => void;
    send: (change: Change<T>) => void;
    wait: (id: EntityId) => void;
}

interface LocalQueue<T> extends CustomEventEmitter<LocalQueueEvent<T>> {}

interface ChannelEvent<T> extends SimperiumEvent {
    acknowledge: (entityId: EntityId, change: Change<T>) => void;
    indexingStateChange: (isIndexing: boolean) => void;
    ready: () => void;
    send: (message: string) => void;
    update: (
        entityId: EntityId,
        updatedEntity: T,
        originalEntity?: T,
        patch?: JSONDiff<T>,
        isIndexing?: boolean,
    ) => void;
    version: (entityId: EntityId, version: number, entity: T) => void;
}

interface Channel<T> extends CustomEventEmitter<ChannelEvent<T>> {
    localQueue: LocalQueue<T>;

    sendIndexRequest(): void;
}

interface ClientConfig<Buckets> {
    objectStoreProvider: <Name extends keyof Buckets>(
        bucket: Bucket<Name, Buckets[Name]>,
    ) => BucketStore<Buckets[Name]>;
    ghostStoreProvider: <Name extends keyof Buckets>(bucket: Bucket<Name, Buckets[Name]>) => GhostStore<Buckets[Name]>;
    heartbeatInterval: number;
    websocketClientProvider: (url: string) => WebSocket;
}

export function Client<Buckets>(
    appID: string,
    token: string,
    clientConfig?: Partial<ClientConfig<Buckets>>,
): Client<Buckets>;

export function createClient<Buckets>(
    appID: string,
    token: string,
    clientConfig?: Partial<ClientConfig<Buckets>>,
): Client<Buckets>;

export function Auth(
    appId: string,
    apiKey: string,
): {
    authorize(username: string, password: string): Promise<{ access_token?: string | undefined }>;
    create(username: string, password: string): Promise<{ access_token?: string | undefined }>;
};

export default createClient;

interface SimperiumEvent {
    [type: string]: (...args: any[]) => void;
}

interface CustomEventEmitter<Event extends SimperiumEvent> extends EventEmitter {
    addListener<U extends keyof Event>(type: U, callback: Event[U]): this;
    on<U extends keyof Event>(type: U, callback: Event[U]): this;
    once<U extends keyof Event>(type: U, callback: Event[U]): this;
    prependListener<U extends keyof Event>(type: U, callback: Event[U]): this;
    prependOnceListener<U extends keyof Event>(type: U, callback: Event[U]): this;
    removeListener<U extends keyof Event>(type: U, callback: Event[U]): this;
    off<U extends keyof Event>(type: U, callback: Event[U]): this;
    removeAllListeners(type?: keyof Event): this;
    listeners<U extends keyof Event>(type: U): Array<Event[U]>;
    rawListeners<U extends keyof Event>(type: U): Array<Event[U]>;
    emit<U extends keyof Event>(type: U, ...args: Parameters<Event[U]>): boolean;
    eventNames(): Array<Exclude<keyof Event, number | symbol>>;
    listenerCount(type: keyof Event): number;
}
