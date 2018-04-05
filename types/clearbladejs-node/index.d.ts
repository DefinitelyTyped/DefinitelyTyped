/// <reference types="request" />
/// <reference types="mqtt" />

import { Response, RequestCallback } from "request/index";
import { MqttClient, PacketCallback } from "mqtt";

// Type definitions for clearbladejs Node SDK v1.0.0
// Project: https://github.com/ClearBlade/Node-SDK
// Definitions by: Jim Bouquet <https://github.com/ClearBlade/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
//
// TypeScript Version: 2.4

declare enum MessagingQOS {
    MESSAGING_QOS_AT_MOST_ONCE = 0,
    MESSAGING_QOS_AT_LEAST_ONCE = 1,
    MESSAGING_QOS_EXACTLY_ONCE = 2
}

export interface Resp {
    error(msg: any): never; // todo: figure out if we can have the compiler throw an error if someone adds code after this
    success(msg: any): never;
}

export interface InitOptions { 
    systemKey: string;
    systemSecret: string;
    logging?: boolean;
    callback?: CbCallback;
    email?: string;
    password?: string;
    registerUser?: boolean;
    useUser?: APIUser;
    URI?: string;
    messagingURI?: string;
    messagingPort?: number;
    defaultQoS?: MessagingQOS;
    callTimeout?: number;
}

export interface RequestOptions {
    systemKey: string;
    systemSecret: string;
    method?: string;
    endpoint?: string;
    body?: string;
    qs?: string;
    URI?: string;
    useUser?: boolean;
    authToken?: string;
    user?: APIUser;
}

export interface APIUser { 
    email: string;
    authToken: string;
}

export interface KeyValuePair {
    [key: string]: any;
}

export interface CbCallback {
    (error: boolean, response: Resp): void
} 

export default interface ClearBladeGlobal extends ClearBladeInt {
    isCurrentUserAuthenticated(callback: CbCallback): void;
}

export interface ClearBladeInt {
    addToQuery(queryObj: QueryObj, key: string, value: string): void;
    addFilterToQuery(queryObj: QueryObj, condition: QueryConditions, key: string, value: QueryValue): void;
    addSortToQuery(queryObj: QueryObj, direction: QuerySortDirections, column: string): void;
    Code() :Code;
    Collection(options: string | CollectionOptionsWithName | CollectionOptionsWithID) :Collection;
    execute(error: Object, response: Object, callback: CbCallback): void;
    init(options: InitOptions): void;
    isObjectEmpty(obj: Object): boolean;
    Item(data: Object, options: string | ItemOptions) :Item;
    logger(message: string): void;
    loginAnon(callback: CbCallback): void;
    loginUser(email: string, password: string, callback: CbCallback): void;
    logoutUser(callback: CbCallback): void;
    makeKVPair(key: string, value: string): KeyValuePair;
    parseOperationQuery(query: Query): string;
    parseQuery(query: Query | QueryObj): string;
    Query(options: string | QueryOptionsWithCollection | QueryOptionsWithName | QueryOptionsWithID) :QueryObj;
    registerUser(email: string, password: string, callback: CbCallback): void;
    request(options: RequestOptions, callback: RequestCallback): void;
    setUser(email: string, password: string): void;
    User() :AppUser;
    Messaging(options: MessagingOptions, callback: CbCallback) :Messaging;
    sendPush(users: string[], payload: Object, appId: string, callback: CbCallback): void;
    validateEmailPassword(email: string, password:string): void;
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
    update(query: Query, changes: Object, callback: CbCallback): void;
    remove(query: Query, callback: CbCallback): void;
}

export declare enum QuerySortDirections {
    QUERY_SORT_ASCENDING = 'ASC',
    QUERY_SORT_DESCENDING = 'DESC'
}

export declare enum QueryConditions {
    QUERY_EQUAL = 'EQ',
    QUERY_NOTEQUAL = 'NEQ',
    QUERY_GREATERTHAN = 'GT',
    QUERY_GREATERTHAN_EQUAL = 'GTE',
    QUERY_LESSTHAN = 'LT',
    QUERY_LESSTHAN_EQUAL = 'LTE',
    QUERY_MATCHES = 'RE'
}

export type QueryValue = string|number|boolean;

export interface QueryOptions { 
    offset?: number;
    limit?: number;
}

export interface QueryOptionsWithCollection extends QueryOptions{
    collection: string;
}

export interface QueryOptionsWithName extends CollectionOptionsWithName, QueryOptions{}
export interface QueryOptionsWithID extends CollectionOptionsWithID, QueryOptions{}

export interface Query {
    SELECTCOLUMNS?: string[];
    SORT?: QuerySortDirections;
    FILTERS?: QueryFilter[];
    PAGESIZE?: number;
    PAGENUM?: number;
}

export interface QueryFilter {
    [QueryConditions: string]: QueryFilterValue
}

export interface QueryFilterValue {
    [name: string]: QueryValue
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
    update(changes: Object, callback: CbCallback): void;
    remove(callback: CbCallback): void;
}

export interface ItemOptions extends CollectionOptionsWithID{}

export interface Item {
    data: Object;

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

    execute(name: string, params: Object, callback: CbCallback): void;
}

export interface AppUser {
    user: APIUser;
    URI: string;
    systemKey: string;
    systemSecret: string;

    getUser(callback: CbCallback): void;
    setUser(data: Object, callback: CbCallback): void;
    allUsers(query: Query, callback: CbCallback): void;
}

export interface Messaging {
    user: APIUser;
    URI: string;
    systemKey: string;
    systemSecret: string;
    client: MqttClient;

    getMessageHistory(topic: string, startTime: number, count: number, callback: CbCallback): void;
    publish(topic: string, payload: Object): void;
    subscribe(topic: string, options: MessagingSubscribeOptions, messageCallback: MessageCallback): void;
    unsubscribe(topic: string, callback?: PacketCallback): void;
}

export interface CommonMessagingProperties {
    hosts?: string;
    ports?: string;
}

export interface MessagingOptions extends CommonMessagingProperties {
    qos?: MessagingQOS
}

export interface MessagingSubscribeOptions {
    qos?: MessagingQOS;
    timeout?: number;
}

export interface MessageCallback {
    (message: string): void;
}

declare var ClearBlade: ClearBladeGlobal;

export {ClearBlade};
