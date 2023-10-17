/// <reference types="request" />

import { RequestCallback, Response } from "request/index";
// import {//PacketCallback } from "mqtt";

export enum MessagingQOS {
    MESSAGING_QOS_AT_MOST_ONCE = 0,
    MESSAGING_QOS_AT_LEAST_ONCE = 1,
    MESSAGING_QOS_EXACTLY_ONCE = 2,
}

export interface Resp {
    error(msg: any): never;
    success(msg: any): never;
}

export interface InitOptions {
    systemKey: string;
    systemSecret: string;
    logging?: boolean | undefined;
    callback?: CbCallback | undefined;
    email?: string | undefined;
    password?: string | undefined;
    registerUser?: boolean | undefined;
    useUser?: APIUser | undefined;
    URI?: string | undefined;
    messagingURI?: string | undefined;
    messagingPort?: number | undefined;
    defaultQoS?: MessagingQOS | undefined;
    callTimeout?: number | undefined;
}

export interface RequestOptions {
    systemKey: string;
    systemSecret: string;
    method?: string | undefined;
    endpoint?: string | undefined;
    body?: string | undefined;
    qs?: string | undefined;
    URI?: string | undefined;
    useUser?: boolean | undefined;
    authToken?: string | undefined;
    user?: APIUser | undefined;
}

export interface APIUser {
    email: string;
    authToken: string;
}

export interface KeyValuePair {
    [key: string]: any;
}

export type CbCallback = (error: boolean, response: Resp) => void;

export default interface ClearBladeGlobal extends ClearBladeInt {
    isCurrentUserAuthenticated(callback: CbCallback): void;
}

export interface ClearBladeInt {
    addToQuery(queryObj: QueryObj, key: string, value: string): void;
    addFilterToQuery(queryObj: QueryObj, condition: QueryConditions, key: string, value: QueryValue): void;
    addSortToQuery(queryObj: QueryObj, direction: QuerySortDirections, column: string): void;
    Code(): Code;
    Collection(options: string | CollectionOptionsWithName | CollectionOptionsWithID): Collection;
    execute(error: object, response: object, callback: CbCallback): void;
    init(options: InitOptions): void;
    isObjectEmpty(obj: object): boolean;
    Item(data: object, options: string | ItemOptions): Item;
    logger(message: string): void;
    loginAnon(callback: CbCallback): void;
    loginUser(email: string, password: string, callback: CbCallback): void;
    logoutUser(callback: CbCallback): void;
    makeKVPair(key: string, value: string): KeyValuePair;
    parseOperationQuery(query: Query): string;
    parseQuery(query: Query | QueryObj): string;
    Query(options: string | QueryOptionsWithCollection | QueryOptionsWithName | QueryOptionsWithID): QueryObj;
    registerUser(email: string, password: string, callback: CbCallback): void;
    request(options: RequestOptions, callback: RequestCallback): void;
    setUser(email: string, password: string): void;
    User(): AppUser;
    Messaging(options: MessagingOptions, callback: CbCallback): Messaging;
    sendPush(users: string[], payload: object, appId: string, callback: CbCallback): void;
    validateEmailPassword(email: string, password: string): void;
}

export interface CollectionOptionsWithName {
    collectionName: string;
}

export interface CollectionOptionsWithID {
    collectionID: string;
}

export interface Collection {
    endpoint: string;
    user: APIUser;
    URI: string;
    systemKey: string;
    systemSecret: string;

    fetch(query: QueryObj, callback: CbCallback): void;
    create(newItem: Item, callback: CbCallback): void;
    update(query: Query, changes: object, callback: CbCallback): void;
    remove(query: Query, callback: CbCallback): void;
}

export enum QuerySortDirections {
    QUERY_SORT_ASCENDING = "ASC",
    QUERY_SORT_DESCENDING = "DESC",
}

export enum QueryConditions {
    QUERY_EQUAL = "EQ",
    QUERY_NOTEQUAL = "NEQ",
    QUERY_GREATERTHAN = "GT",
    QUERY_GREATERTHAN_EQUAL = "GTE",
    QUERY_LESSTHAN = "LT",
    QUERY_LESSTHAN_EQUAL = "LTE",
    QUERY_MATCHES = "RE",
}

export type QueryValue = string | number | boolean;

export interface QueryOptions {
    offset?: number | undefined;
    limit?: number | undefined;
}

export interface QueryOptionsWithCollection extends QueryOptions {
    collection: string;
}

export interface QueryOptionsWithName extends CollectionOptionsWithName, QueryOptions {}

export interface QueryOptionsWithID extends CollectionOptionsWithID, QueryOptions {}

export interface Query {
    SELECTCOLUMNS?: string[] | undefined;
    SORT?: QuerySortDirections | undefined;
    FILTERS?: QueryFilter[] | undefined;
    PAGESIZE?: number | undefined;
    PAGENUM?: number | undefined;
}

export interface QueryFilter {
    [QueryConditions: string]: QueryFilterValue;
}

export interface QueryFilterValue {
    [name: string]: QueryValue;
}

export interface QueryObj {
    endpoint: string;
    user: APIUser;
    URI: string;
    systemKey: string;
    systemSecret: string;
    query: Query;
    OR: Query[];
    offset: number;
    limit: number;

    ascending(field: string): Query;
    descending(field: string): Query;
    equalTo(field: string, value: QueryValue): Query;
    greaterThan(field: string, value: QueryValue): Query;
    greaterThanEqualTo(field: string, value: QueryValue): Query;
    lessThan(field: string, value: QueryValue): Query;
    lessThanEqualTo(field: string, value: QueryValue): Query;
    notEqualTo(field: string, value: QueryValue): Query;
    matches(field: string, pattern: string): Query;
    or(query: QueryObj): Query;
    setPage(pageSize: number, pageNum: number): Query;
    fetch(callback: CbCallback): void;
    update(changes: object, callback: CbCallback): void;
    remove(callback: CbCallback): void;
}

export interface ItemOptions extends CollectionOptionsWithID {}

export interface Item {
    data: object;

    save(): void;
    refresh(): void;
    destroy(): void;
}

export interface Code {
    user: APIUser;
    URI: string;
    systemKey: string;
    systemSecret: string;
    callTimeout: number;
    URIPrefix: string;

    execute(name: string, params: object, callback: CbCallback): void;
}

export interface AppUser {
    user: APIUser;
    URI: string;
    systemKey: string;
    systemSecret: string;

    getUser(callback: CbCallback): void;
    setUser(data: object, callback: CbCallback): void;
    allUsers(query: Query, callback: CbCallback): void;
}

export interface Messaging {
    user: APIUser;
    URI: string;
    systemKey: string;
    systemSecret: string;
    client: object;

    getMessageHistory(topic: string, startTime: number, count: number, callback: CbCallback): void;
    publish(topic: string, payload: object): void;
    subscribe(topic: string, options: MessagingSubscribeOptions, messageCallback: MessageCallback): void;
    unsubscribe(topic: string, callback?: (error?: Error, packet?: object) => any): void;
}

export interface CommonMessagingProperties {
    hosts?: string | undefined;
    ports?: string | undefined;
}

export interface MessagingOptions extends CommonMessagingProperties {
    qos?: MessagingQOS | undefined;
}

export interface MessagingSubscribeOptions {
    qos?: MessagingQOS | undefined;
    timeout?: number | undefined;
}

export type MessageCallback = (message: string) => void;

export let ClearBlade: ClearBladeGlobal;
