// Type definitions for node-zookeeper-client 0.2
// Project: https://github.com/alexguan/node-zookeeper-client
// Definitions by: York Yao <https://github.com/plantain-00/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/// <reference types="node" />

import * as EventEmitter from "events";

export class Id {
    scheme: string;
    id: string;
    constructor(scheme: string, id: string);
}

export class ACL {
    perms: number;
    id: Id;
    constructor(perms: number, id: Id);
}

export const Permission: {
    READ: number,
    WRITE: number,
    CREATE: number,
    DELETE: number,
    ADMIN: number,
    ALL: number,
};

export interface Stat {
    czxid: number;
    mzxid: number;
    ctime: number;
    mtime: number;
    version: number;
    cversion: number;
    aversion: number;
    ephemeralOwner: number;
    dataLength: number;
    numChildren: number;
    pzxid: number;
}

export class State {
    static DISCONNECTED: State;
    static SYNC_CONNECTED: State;
    static AUTH_FAILED: State;
    static CONNECTED_READ_ONLY: State;
    static SASL_AUTHENTICATED: State;
    static EXPIRED: State;

    name: string;
    code: number;
    constructor(name: string, code: number);
    toString(): string;
}

export class Event {
    static NODE_CREATED: number;
    static NODE_DELETED: number;
    static NODE_DATA_CHANGED: number;
    static NODE_CHILDREN_CHANGED: number;
    type: string;
    name: string;
    path: string;
    constructor(type: string, name: string, path: string);
    toString(): string;
    getType(): string;
    getName(): string;
    getPath(): string;
}

export interface Transaction {
    create(path: string, dataOrAclsOrmode1?: Buffer | ACL[] | number, dataOrAclsOrmode2?: Buffer | ACL[] | number, dataOrAclsOrmode3?: Buffer | ACL[] | number): this;
    setData(path: string, data: Buffer | null, version?: number): this;
    check(path: string, version?: number): this;
    remove(path: string, version?: number): this;
    commit(callback: (error: Error | Exception, results: any) => void): void;
}

export interface Client extends EventEmitter {
    connect(): void;
    close(): void;
    create(path: string, callback: (error: Error | Exception, path: string) => void): void;
    create(path: string, dataOrAclsOrmode1: Buffer | ACL[] | number, callback: (error: Error | Exception, path: string) => void): void;
    create(path: string, dataOrAclsOrmode1: Buffer | ACL[] | number, dataOrAclsOrmode2: Buffer | ACL[] | number, callback: (error: Error | Exception, path: string) => void): void;
    create(
        path: string,
        dataOrAclsOrmode1: Buffer | ACL[] | number,
        dataOrAclsOrmode2: Buffer | ACL[] | number,
        dataOrAclsOrmode3: Buffer | ACL[] | number,
        callback: (error: Error | Exception, path: string) => void): void;
    remove(path: string, callback: (error: Error | Exception) => void): void;
    remove(path: string, version: number, callback: (error: Error | Exception) => void): void;
    exists(path: string, callback: (error: Error | Exception, stat: Stat) => void): void;
    exists(path: string, watcher: (event: Event) => void, callback: (error: Error | Exception, stat: Stat) => void): void;
    getChildren(path: string, callback: (error: Error | Exception, children: string[], stat: Stat) => void): void;
    getChildren(path: string, watcher: (event: Event) => void, callback: (error: Error | Exception, children: string[], stat: Stat) => void): void;
    getData(path: string, callback: (error: Error | Exception, data: Buffer, stat: Stat) => void): void;
    getData(path: string, watcher: (event: Event) => void, callback: (error: Error | Exception, data: Buffer, stat: Stat) => void): void;
    setData(path: string, data: Buffer | null, callback: (error: Error | Exception, stat: Stat) => void): void;
    setData(path: string, data: Buffer | null, version: number, callback: (error: Error | Exception, stat: Stat) => void): void;
    getACL(path: string, callback: (error: Error | Exception, acls: ACL[], stat: Stat) => void): void;
    setACL(path: string, acls: ACL[], callback: (error: Error | Exception, stat: Stat) => void): void;
    setACL(path: string, acls: ACL[], version: number, callback: (error: Error | Exception, stat: Stat) => void): void;
    transaction(): Transaction;
    mkdirp(path: string, callback: (error: Error | Exception, path: string) => void): void;
    mkdirp(path: string, dataOrAclsOrmode1: Buffer | ACL[] | number, callback: (error: Error | Exception, path: string) => void): void;
    mkdirp(path: string, dataOrAclsOrmode1: Buffer | ACL[] | number, dataOrAclsOrmode2: Buffer | ACL[] | number, callback: (error: Error | Exception, path: string) => void): void;
    mkdirp(
        path: string,
        dataOrAclsOrmode1: Buffer | ACL[] | number,
        dataOrAclsOrmode2: Buffer | ACL[] | number,
        dataOrAclsOrmode3: Buffer | ACL[] | number,
        callback: (error: Error | Exception, path: string) => void): void;
    addAuthInfo(scheme: string, auth: Buffer): void;
    getState(): State;
    getSessionId(): Buffer;
    getSessionPassword(): Buffer;
    getSessionTimeout(): number;

    on(event: "state", cb: (state: State) => void): this;
    on(event: "connected" | "connectedReadOnly" | "disconnected" | "expired" | "authenticationFailed" | string, cb: () => void): this;

    once(event: "state", cb: (state: State) => void): this;
    once(event: "connected" | "connectedReadOnly" | "disconnected" | "expired" | "authenticationFailed" | string, cb: () => void): this;

    addListener(event: "state", cb: (state: State) => void): this;
    addListener(event: "connected" | "connectedReadOnly" | "disconnected" | "expired" | "authenticationFailed" | string, cb: () => void): this;
}

export interface Option {
    sessionTimeout: number;
    spinDelay: number;
    retries: number;
}

export function createClient(connectionString: string, options?: Partial<Option>): Client;

export const CreateMode: {
    PERSISTENT: number,
    PERSISTENT_SEQUENTIAL: number,
    EPHEMERAL: number,
    EPHEMERAL_SEQUENTIAL: number,
};

export class Exception {
    static OK: number;
    static SYSTEM_ERROR: number;
    static RUNTIME_INCONSISTENCY: number;
    static DATA_INCONSISTENCY: number;
    static CONNECTION_LOSS: number;
    static MARSHALLING_ERROR: number;
    static UNIMPLEMENTED: number;
    static OPERATION_TIMEOUT: number;
    static BAD_ARGUMENTS: number;
    static API_ERROR: number;
    static NO_NODE: number;
    static NO_AUTH: number;
    static BAD_VERSION: number;
    static NO_CHILDREN_FOR_EPHEMERALS: number;
    static NODE_EXISTS: number;
    static NOT_EMPTY: number;
    static SESSION_EXPIRED: number;
    static INVALID_CALLBACK: number;
    static INVALID_ACL: number;
    static AUTH_FAILED: number;

    code: number;
    name: string;
    path: number;
    constructor(code: number, name: string, path: number);
    toString(): string;
    getCode(): number;
    getName(): string;
    getPath(): string;
}
