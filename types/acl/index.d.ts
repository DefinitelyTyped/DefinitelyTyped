// Type definitions for node_acl 0.4.8
// Project: https://github.com/optimalbits/node_acl
// Definitions by: Qubo <https://github.com/tkQubo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="bluebird" />
/// <reference types="node"/>
/// <reference types="express"/>

import http = require('http');
import Promise = require("bluebird");
import express = require("express");


export type strings = string|string[];
export type Value = string|number;
export type Values = Value|Value[];
export type Action = () => any;
export type Callback = (err: Error) => any;
export type AnyCallback = (err: Error, obj: any) => any;
export type AllowedCallback = (err: Error, allowed: boolean) => any;
export type GetUserId = (req: http.IncomingMessage, res: http.ServerResponse) => Value;

export interface AclStatic {
    new (backend: Backend<any>, logger: Logger, options: Option): Acl;
    new (backend: Backend<any>, logger: Logger): Acl;
    new (backend: Backend<any>): Acl;
    memoryBackend: MemoryBackendStatic;
}

export interface Logger {
    debug: (msg: string) => any;
}

export interface Acl {
    addUserRoles: (userId: Value, roles: strings, cb?: Callback) => Promise<void>;
    removeUserRoles: (userId: Value, roles: strings, cb?: Callback) => Promise<void>;
    userRoles: (userId: Value, cb?: (err: Error, roles: string[]) => any) => Promise<string[]>;
    roleUsers: (role: Value, cb?: (err: Error, users: Values) => any) => Promise<any>;
    hasRole: (userId: Value, role: string, cb?: (err: Error, isInRole: boolean) => any) => Promise<boolean>;
    addRoleParents: (role: string, parents: Values, cb?: Callback) => Promise<void>;
    removeRole: (role: string, cb?: Callback) => Promise<void>;
    removeResource: (resource: string, cb?: Callback) => Promise<void>;
    allow: {
        (roles: Values, resources: strings, permissions: strings, cb?: Callback): Promise<void>;
        (aclSets: AclSet | AclSet[]): Promise<void>;
    }
    removeAllow: (role: string, resources: strings, permissions: strings, cb?: Callback) => Promise<void>;
    removePermissions: (role: string, resources: strings, permissions: strings, cb?: Function) => Promise<void>;
    allowedPermissions: (userId: Value, resources: strings, cb?: AnyCallback) => Promise<void>;
    isAllowed: (userId: Value, resources: strings, permissions: strings, cb?: AllowedCallback) => Promise<boolean>;
    areAnyRolesAllowed: (roles: strings, resource: strings, permissions: strings, cb?: AllowedCallback) => Promise<any>;
    whatResources: {
        (roles: strings, cb?: AnyCallback): Promise<any>;
        (roles: strings, permissions: strings, cb?: AnyCallback): Promise<any>;
    }
    permittedResources: (roles: strings, permissions: strings, cb?: Function) => Promise<void>;
    middleware: (numPathComponents?: number, userId?: Value | GetUserId, actions?: strings) => express.RequestHandler;
}

export interface Option {
    buckets?: BucketsOption;
}

export interface BucketsOption {
    meta?: string;
    parents?: string;
    permissions?: string;
    resources?: string;
    roles?: string;
    users?: string;
}

export interface AclSet {
    roles: strings;
    allows: AclAllow[];
}

export interface AclAllow {
    resources: strings;
    permissions: strings;
}

export interface MemoryBackend extends Backend<Action[]> { }
export interface MemoryBackendStatic {
    new (): MemoryBackend;
}

//
// For internal use
//
export interface Backend<T> {
    begin: () => T;
    end: (transaction: T, cb?: Action) => void;
    clean: (cb?: Action) => void;
    get: (bucket: string, key: Value, cb?: Action) => void;
    union: (bucket: string, keys: Value[], cb?: Action) => void;
    add: (transaction: T, bucket: string, key: Value, values: Values) => void;
    del: (transaction: T, bucket: string, keys: Value[]) => void;
    remove: (transaction: T, bucket: string, key: Value, values: Values) => void;

    endAsync: Function; //TODO: Give more specific function signature
    getAsync: Function;
    cleanAsync: Function;
    unionAsync: Function;
}

export interface Contract {
    (args: IArguments): Contract | NoOp;
    debug: boolean;
    fulfilled: boolean;
    args: any[];
    checkedParams: string[];
    params: (...types: string[]) => Contract | NoOp;
    end: () => void;
}

export interface NoOp {
    params: (...types: string[]) => NoOp;
    end: () => void;
}

// for redis backend
import redis = require('redis');

export interface AclStatic {
    redisBackend: RedisBackendStatic;
}

export interface RedisBackend extends Backend<redis.RedisClient> { }
export interface RedisBackendStatic {
    new (redis: redis.RedisClient, prefix: string): RedisBackend;
    new (redis: redis.RedisClient): RedisBackend;
}

// for mongodb backend
import mongo = require('mongodb');

export interface AclStatic {
    mongodbBackend: MongodbBackendStatic;
}

export interface MongodbBackend extends Backend<Callback> { }
export interface MongodbBackendStatic {
    new (db: mongo.Db, prefix: string, useSingle: boolean): MongodbBackend;
    new (db: mongo.Db, prefix: string): MongodbBackend;
    new (db: mongo.Db): MongodbBackend;
}

declare var _: AclStatic;
export default _;
