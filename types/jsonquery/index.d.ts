/// <reference types="node" />

declare function jsonquery<T>(query: jsonquery.Query<T>): NodeJS.ReadWriteStream;

declare namespace jsonquery {
    function match<T>(haystack: T, predicate: Query<T>): boolean;

    type Query<T> = BinaryQueryCondition<T> | QueryValue<T> | PathQuery;

    interface OrQueryCondition<T> {
        $or: ReadonlyArray<Query<T>>;
    }

    interface AndQueryCondition<T> {
        $and: ReadonlyArray<Query<T>>;
    }

    type BinaryQueryCondition<T> = OrQueryCondition<T> | AndQueryCondition<T>;

    interface BaseCondition<P> {
        $lt: P;
        $lte: P;
        $gt: P;
        $gte: P;
        $mod: [number, number];
        $ne: P;
        $in: readonly P[];
        $nin: readonly P[];
        $all: readonly P[];
        $elemMatch: Partial<P>;
    }

    interface PathQuery {
        [path: string]: any;
    }

    type QueryValue<T> = {
        [P in keyof T]?: T[P] | BaseCondition<T[P]>;
    };
}

export = jsonquery;
