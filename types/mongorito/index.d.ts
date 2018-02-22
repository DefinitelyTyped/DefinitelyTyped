// Type definitions for mongorito v3.0.4
// Project: https://github.com/vadimdemedes/mongorito
// Definitions by: Pinguet62 <https://github.com/pinguet62>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import {Collection, CommonOptions, Db, IndexOptions, Long, MongoClientOptions, ReadPreference} from 'mongodb';

declare namespace mongorito {
}

export {Timestamp, ObjectId, MinKey, MaxKey, DBRef, Long} from 'mongodb';

type Class<T> = new (...args: any[]) => T;
export type ModelClass = Class<Model>;

declare class MQuery {
}

// "extends MQuery": not actually inheritance, but more easy to implement
export class Query extends MQuery {
    static find<T extends Model>(this: Class<T>, query?: object): Promise<T[]>;

    static findOne<T extends Model>(this: Class<T>, query?: object): Promise<T | null>;

    static findById<T extends Model>(this: Class<T>, id: object | string): Promise<T | null>;

    static count(query?: object): Promise<number>;

    static sort(field: string | string[], value?: string): Query;
    static sort(query: object): Query; // TODO best parameter type

    static include(field: string | string[], value?: number): Query;
    static include(query: object): Query; // TODO best parameter type

    static exclude(field: string | string[], value?: number): Query;
    static exclude(query: object): Query; // TODO best parameter type

    static remove(query?: object): Promise<object>;

    Model: ModelClass;
    query: Array<[string, object]>;
}

// "extends Query": not actually inheritance, but more easy to implement
export class Model extends Query {

    /**
     * @see Model#database
     * @see Database#connection()
     */
    static getConnection(): Promise<Db>;

    /**
     * @see Db#collection(string)
     */
    static getCollection<TSchema = any>(): Promise<Collection<TSchema>>;

    static use(plugins?: Plugin | Plugin[]): void;

    static modifyReducer(reducerModifier: ReducerModifier): void;

    static query(method: string, query: [string, any][]): Promise<object[]>;

    /**
     * @see mongodb.Collection#listIndexes()
     * @return {Promise<any[]>} {@link CommandCursor#toArray()}
     */
    static listIndexes(options?: { batchSize?: number, readPreference?: ReadPreference | string }): Promise<any[]>;

    /**
     * @see mongodb.Collection#createIndex()
     */
    static createIndex(fieldOrSpec: string | any, options?: IndexOptions): Promise<string>;

    /**
     * @see mongodb.Collection#dropIndex()
     */
    static dropIndex(indexName: string, options?: CommonOptions): Promise<object>;

    static embeds(key: string, model: ModelClass): void;

    constructor(fields?: object);

    collection(): string;

    getConnection(): Promise<Db>;

    getCollection<TSchema = any>(): Promise<Collection<TSchema>>;

    set(key: string, value: any): void;
    set(value: object): void;

    get(key?: string): any;

    unset(keys?: string | string[]): void;

    toJSON(): object;

    isSaved(): boolean;

    save(): Promise<CreatedAction | UpdatedAction>;

    increment(key: string, value?: number): Promise<RefreshedAction>;
    increment(keys: { [key: string]: number }): Promise<RefreshedAction>;

    refresh(): Promise<RefreshedAction>;

    remove(): Promise<RemovedAction>;
}

export enum ActionTypes {
    GET = "@@mongorito/GET",
    SET = "@@mongorito/SET",
    UNSET = "@@mongorito/UNSET",
    REFRESH = "@@mongorito/REFRESH",
    REFRESHED = "@@mongorito/REFRESHED",
    SAVE = "@@mongorito/SAVE",
    CREATE = "@@mongorito/CREATE",
    CREATED = "@@mongorito/CREATED",
    UPDATE = "@@mongorito/UPDATE",
    UPDATED = "@@mongorito/UPDATED",
    REMOVE = "@@mongorito/REMOVE",
    REMOVED = "@@mongorito/REMOVED",
    INCREMENT = "@@mongorito/INCREMENT",
    CREATE_INDEX = "@@mongorito/CREATE_INDEX",
    DROP_INDEX = "@@mongorito/DROP_INDEX",
    LIST_INDEXES = "@@mongorito/LIST_INDEXES",
    QUERY = "@@mongorito/QUERY",
    CALL = "@@mongorito/CALL"
}

export interface GetAction {
    type: string; // ActionTypes.GET
    key?: string;
}

export interface SetAction {
    type: string; // ActionTypes.SET
    fields: object;
}

export interface UnsetAction {
    type: string; // ActionTypes.UNSET
    keys: string | string[];
}

export interface RefreshAction {
    type: string; // ActionTypes.REFRESH
}

export interface RefreshedAction {
    type: string; // ActionTypes.REFRESHED
    fields: object;
}

export interface SaveAction {
    type: string; // ActionTypes.SAVE
    fields: object;
}

export interface CreateAction {
    type: string; // ActionTypes.CREATE
    id: object;
}

export interface CreatedAction {
    type: string; // ActionTypes.CREATED
    id: object;
}

export interface UpdateAction {
    type: string; // ActionTypes.UPDATE
    fields: object;
}

export interface UpdatedAction {
    type: string; // ActionTypes.UPDATED
    fields: object;
}

export interface RemoveAction {
    type: string; // ActionTypes.REMOVE
}

export interface RemovedAction {
    type: string; // ActionTypes.REMOVED
}

export interface IncrementAction {
    type: string; // ActionTypes.INCREMENT
    fields: object;
}

export interface CreateIndexAction {
    type: string; // ActionTypes.CREATE_INDEX
    args: any[];
}

export interface DropIndexAction {
    type: string; // ActionTypes.DROP_INDEX
    args: any[];
}

export interface ListIndexesAction {
    type: string; // ActionTypes.LIST_INDEXES
    args: any[];
}

export interface QueryAction {
    type: string; // ActionTypes.QUERY
    method: string;
    query: { method: string, args: any }[];
}

export interface CallAction {
    type: string; // ActionTypes.CALL
    method: string;
    args: { method: string, args: any }[];
}

export type Action =
    GetAction
    | SetAction
    | UnsetAction
    | RefreshAction
    | RefreshedAction
    | SaveAction
    | CreateAction
    | CreatedAction
    | UpdateAction
    | UpdatedAction
    | RemoveAction
    | RemovedAction
    | IncrementAction
    | CreateIndexAction
    | DropIndexAction
    | ListIndexesAction
    | QueryAction
    | CallAction

export type PluginNext = (action: Action) => void;

interface DefaultState {
    unset: string[],
    fields: object
}

export type State = DefaultState & any;

export interface PluginStore {
    dispatch: (arg: any) => any,
    getState: () => State,
    modelClass: ModelClass,
    model?: Model
}

export type Reducer<S = any> = (state: S, action: Action) => Reducer;

export interface DefaultReducer {
    unset: Reducer<string[]>;
    fields: Reducer<object>;
}

export type ReducerState = DefaultReducer & Map<any, Reducer>;

export type ReducerModifier = (reducerState: ReducerState) => ReducerState;

export type Plugin = (modelClass: ModelClass) => (store: PluginStore) => (next: PluginNext) => (action: Action) => void;

export enum DatabaseState {
    STATE_CONNECTED = 0,
    STATE_CONNECTING = 1,
    STATE_DISCONNECTED = 2
}

export class Database {
    options: MongoClientOptions;
    state: DatabaseState;
    models: ModelClass[];
    plugins: Plugin[];

    constructor(urls?: string | string[], options?: MongoClientOptions);

    connect(): Promise<Db>;

    connection(): Promise<Db>;

    disconnect(): Promise<void>;

    register(models: ModelClass | ModelClass[]): void;

    /**
     * @see Model#use()
     */
    use(plugins?: Plugin | Plugin[]): void;
}
