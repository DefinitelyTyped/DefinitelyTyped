// Type definitions for acl 0.4
// Project: https://github.com/optimalbits/node_acl
// Definitions by: Qubo <https://github.com/tkQubo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.1

/// <reference types="node"/>

import http = require('http');
import Promise = require('bluebird');
import express = require('express');
import redis = require('redis');
import mongo = require('mongodb');

export = AclStatic;

declare const AclStatic: AclStatic;

type strings = string | string[];
type Value = string | number;
type Values = Value | Value[];
type Action = () => any;
type Callback = (err?: Error) => any;
type AnyCallback = (err: Error, obj: any) => any;
type AllowedCallback = (err: Error, allowed: boolean) => any;
type GetUserId = (req: http.IncomingMessage, res: http.ServerResponse) => Value;

interface AclStatic {
    new (
        backend: AclStatic.Backend<any>,
        logger?: AclStatic.Logger,
        options?: AclStatic.Option
    ): AclStatic.Acl;
    readonly memoryBackend: AclStatic.MemoryBackendStatic;
    readonly mongodbBackend: AclStatic.MongodbBackendStatic;
    readonly redisBackend: AclStatic.RedisBackendStatic;
}

declare namespace AclStatic {
    interface Logger {
        debug: (msg: string) => any;
    }

    interface Acl {
        addUserRoles: (userId: Value, roles: strings, cb?: Callback) => Promise<void>;
        removeUserRoles: (userId: Value, roles: strings, cb?: Callback) => Promise<void>;
        userRoles: (userId: Value, cb?: (err: Error, roles: string[]) => any) => Promise<string[]>;
        roleUsers: (role: Value, cb?: (err: Error, users: Values) => any) => Promise<any>;
        hasRole: (
            userId: Value,
            role: string,
            cb?: (err: Error, isInRole: boolean) => any
        ) => Promise<boolean>;
        addRoleParents: (role: string, parents: Values, cb?: Callback) => Promise<void>;
        removeRole: (role: string, cb?: Callback) => Promise<void>;
        removeResource: (resource: string, cb?: Callback) => Promise<void>;
        allow: {
            (roles: Values, resources: strings, permissions: strings, cb?: Callback): Promise<void>;
            (aclSets: AclSet | AclSet[]): Promise<void>;
        };
        removeAllow: (
            role: string,
            resources: strings,
            permissions: strings,
            cb?: Callback
        ) => Promise<void>;
        removePermissions: (
            role: string,
            resources: strings,
            permissions: strings,
            cb?: Callback
        ) => Promise<void>;
        allowedPermissions: (userId: Value, resources: strings, cb?: AnyCallback) => Promise<void>;
        isAllowed: (
            userId: Value,
            resources: strings,
            permissions: strings,
            cb?: AllowedCallback
        ) => Promise<boolean>;
        areAnyRolesAllowed: (
            roles: strings,
            resource: strings,
            permissions: strings,
            cb?: AllowedCallback
        ) => Promise<any>;
        whatResources: {
            (roles: strings, cb?: AnyCallback): Promise<any>;
            (roles: strings, permissions: strings, cb?: AnyCallback): Promise<any>;
        };
        permittedResources: (roles: strings, permissions: strings, cb?: Callback) => Promise<void>;
        middleware: (
            numPathComponents?: number,
            userId?: Value | GetUserId,
            actions?: strings
        ) => express.RequestHandler;
    }

    interface Option {
        buckets?: BucketsOption | undefined;
    }

    interface BucketsOption {
        meta?: string | undefined;
        parents?: string | undefined;
        permissions?: string | undefined;
        resources?: string | undefined;
        roles?: string | undefined;
        users?: string | undefined;
    }

    interface AclSet {
        roles: strings;
        allows: AclAllow[];
    }

    interface AclAllow {
        resources: strings;
        permissions: strings;
    }

    interface MemoryBackend extends Backend<Action[]> {}
    interface MemoryBackendStatic {
        new (): MemoryBackend;
    }

    //
    // For internal use
    //
    interface Backend<T> {
        begin: () => T;
        end: (transaction: T, cb?: Action) => void;
        clean: (cb?: Action) => void;
        get: (bucket: string, key: Value, cb?: Action) => void;
        union: (bucket: string, keys: Value[], cb?: Action) => void;
        add: (transaction: T, bucket: string, key: Value, values: Values) => void;
        del: (transaction: T, bucket: string, keys: Value[]) => void;
        remove: (transaction: T, bucket: string, key: Value, values: Values) => void;

        endAsync: (transaction: T, cb?: (err: Error | null) => void) => Promise<void>;
        getAsync: (
            bucket: string,
            key: Value,
            cb?: (err: Error | null, value: any) => void
        ) => Promise<any>;
        cleanAsync: (cb?: (error?: Error) => void) => Promise<void>;
        unionAsync: (
            bucket: string,
            keys: Value[],
            cb?: (error: Error | undefined, results: any[]) => void
        ) => Promise<any[]>;
    }

    interface Contract {
        (args: IArguments): Contract | NoOp;
        debug: boolean;
        fulfilled: boolean;
        args: any[];
        checkedParams: string[];
        params: (...types: string[]) => Contract | NoOp;
        end: () => void;
    }

    interface NoOp {
        params: (...types: string[]) => NoOp;
        end: () => void;
    }

    // for redis backend
    interface RedisBackend extends Backend<redis.RedisClient> {}
    interface RedisBackendStatic {
        new (redis: redis.RedisClient, prefix?: string): RedisBackend;
    }

    // for mongodb backend
    interface MongodbBackend extends Backend<Callback> {}
    interface MongodbBackendStatic {
        new (db: mongo.Db, prefix?: string, useSingle?: boolean): MongodbBackend;
    }
}
