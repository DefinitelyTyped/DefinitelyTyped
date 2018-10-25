// Type definitions for jsonquery 0.1
// Project: https://github.com/eugeneware/jsonquery
// Definitions by: Jim Buck <https://github.com/JimmyBoh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare function jsonquery<T>(query: jsonquery.Query<T>): NodeJS.ReadWriteStream;

declare namespace jsonquery {
    export function match<T>(haystack: T, predicate: Query<T>): boolean;

    export type Query<T> = BinaryQueryCondition<T> | QueryValue<T> | PathQuery;

    export interface OrQueryCondition<T> {
        $or: Array<Query<T>>;
    }

    export interface AndQueryCondition<T> {
        $and: Array<Query<T>>;
    }

    export type BinaryQueryCondition<T> = OrQueryCondition<T> | AndQueryCondition<T>;

    export interface BaseCondition<P> {
        $lt: P;
        $lte: P;
        $gt: P;
        $gte: P;
        $mod: [number, number];
        $ne: P;
        $in: Array<P>
        $nin: Array<P>
        $all: Array<P>;
        $elemMatch: Partial<P>;
    }

    export type PathQuery = {
        [path: string]: any;
    }
    export type QueryValue<T> = {
        [P in keyof T]?: T[P] | BaseCondition<T[P]>;
    }
}

export = jsonquery;