// Type definitions for Hasura GraphQL Engine API types 0.1
// Project: https://github.com/hasura/graphql-engine
// Definitions by: Toan Nguyen <https://github.com/hgiasac>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export const XHasuraAdminSecret = 'x-hasura-admin-secret';
export const XHasuraClientName = 'hasura-client-name';
export const XHasuraRole = 'x-hasura-role';
export const XHasuraUserID = 'x-hasura-user-id';
export const HASURA_ROLE_ADMIN = 'admin';

export interface ColumnBoolExp<T = string | number | boolean> {
    _eq?: T;
    _neq?: T;
    _gt?: T;
    _gte?: T;
    _lt?: T;
    _lte?: T;
    _is_null?: boolean;
    _in?: T[];
    _nin?: T[];
}

export interface TextColumnBoolExp extends ColumnBoolExp<string> {
    _like?: string;
    _ilike?: string;
    _nlike?: string;
    _nilike?: string;
    _similar?: string;
    _nsimilar?: string;
}
export type JSONColumnBoolExp = ColumnBoolExp<string>;
export interface JSONBColumnBoolExp extends ColumnBoolExp<string> {
    _contains?: string;
    _contained_in?: string;
    _has_key?: string;
    _has_keys_all?: string;
    _has_keys_any?: string;
}

type Equals<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? true : false;
type ScalarType = string | number | boolean | ScalarJSON<unknown> | ScalarJSONB<unknown>;
type ObjectType = Record<string, ScalarType | Record<string, ScalarType> | Array<Record<string, ScalarType>>>;
export type ScalarJSON<T> = T & {
    __type?: 'json';
};
export type ScalarJSONB<T> = T & {
    __type?: 'jsonb';
};
export type ScalarUUID = string & { __type?: 'uuid' };
export type WhereBoolExp<T extends Record<string, any>> = {
    [key in keyof T]?: T[key] extends string
        ? TextColumnBoolExp
        : Equals<T[key], ScalarJSON<T[key]>> extends true
        ? JSONColumnBoolExp
        : Equals<T[key], ScalarJSONB<T[key]>> extends true
        ? JSONBColumnBoolExp
        : T[key] extends ObjectType
        ? WhereBoolExp<T[key]>
        : T[key] extends ObjectType[]
        ? WhereBoolExp<T[key][0]>
        : ColumnBoolExp<T[key]>;
} & {
    _and?: Array<WhereBoolExp<T>>;
    _or?: Array<WhereBoolExp<T>>;
    _not?: Array<WhereBoolExp<T>>;
};
type ScalarOrderBy = 'asc' | 'desc' | 'asc_nulls_first' | 'asc_nulls_last' | 'desc_nulls_first' | 'desc_nulls_last';
type NumberScalarKeys<T> = {
    [key in keyof T]: T[key] extends number ? key : never;
}[keyof T];
type ScalaKeys<T> = {
    [key in keyof T]: Equals<T[key], ScalarJSON<T[key]>> extends true
        ? key
        : Equals<T[key], ScalarJSONB<T[key]>> extends true
        ? key
        : T[key] extends number | string | boolean
        ? key
        : never;
}[keyof T];
type MinMaxAggregateKeys<T> = {
    [key in keyof T]: Equals<T[key], ScalarUUID> extends true
        ? never
        : T[key] extends number | string | boolean
        ? key
        : never;
}[keyof T];
export type OrderBy<T extends Record<string, any>> = {
    [key in keyof T]?: Equals<T[key], ScalarJSON<T[key]>> extends true
        ? ScalarOrderBy
        : Equals<T[key], ScalarJSONB<T[key]>> extends true
        ? ScalarOrderBy
        : T[key] extends ObjectType
        ? OrderBy<T[key]>
        : T[key] extends ObjectType[]
        ? OrderBy<T[key][0]>
        : ScalarOrderBy;
} & {
    [key: string]: any;
};
interface BaseOrderByAggregate<T> {
    count?: ScalarOrderBy;
    max?: MinMaxAggregateKeys<T> extends never
        ? never
        : {
              [key in MinMaxAggregateKeys<T>]?: ScalarOrderBy;
          };
    min?: {
        [key in MinMaxAggregateKeys<T>]?: ScalarOrderBy;
    };
}

interface NumberOrderByAggregate<T, Keys extends keyof T> {
    avg?: {
        [key in Keys]?: ScalarOrderBy;
    };
    sum?: {
        [key in Keys]?: ScalarOrderBy;
    };
    stddev?: {
        [key in Keys]?: ScalarOrderBy;
    };
    stddev_pop?: {
        [key in Keys]?: ScalarOrderBy;
    };
    stddev_samp?: {
        [key in Keys]?: ScalarOrderBy;
    };
    var_pop?: {
        [key in Keys]?: ScalarOrderBy;
    };
    variance?: {
        [key in Keys]?: ScalarOrderBy;
    };
}
export type OrderByAggregate<T extends Record<string, any>> = (NumberScalarKeys<T> extends never
    ? BaseOrderByAggregate<T>
    : BaseOrderByAggregate<T> & NumberOrderByAggregate<T, NumberScalarKeys<T>>) &
    OrderBy<T>;

export type Aggregate<T> = T & {
    __aggregate?: never;
};
interface BaseAggregateResult<T> {
    count?: number;
    max?: {
        [key in MinMaxAggregateKeys<T>]?: T[key];
    };
    min?: {
        [key in MinMaxAggregateKeys<T>]?: T[key];
    };
}
interface NumberAggregateResult<T, Keys extends keyof T> extends BaseAggregateResult<T> {
    avg?: {
        [key in Keys]?: number;
    };
    sum?: {
        [key in Keys]?: number;
    };
    stddev?: {
        [key in Keys]?: number;
    };
    stddev_pop?: {
        [key in Keys]?: number;
    };
    stddev_samp?: {
        [key in Keys]?: number;
    };
    var_pop?: {
        [key in Keys]?: number;
    };
    variance?: {
        [key in Keys]?: number;
    };
}

export type HasuraDataItem<T extends Record<string, any>> = T & {
    [key: string]: any;
};
export type HasuraDataResult<T extends Record<string, any>> = Array<HasuraDataItem<T>>;

export interface HasuraQueryResponse<K extends string, T extends Record<string, any>> {
    data: {
        [key in K]: Array<HasuraDataItem<T>>;
    };
}

type AggregateResult<T> = NumberScalarKeys<T> extends never
    ? BaseAggregateResult<T>
    : NumberAggregateResult<T, NumberScalarKeys<T>>;

export interface HasuraAggregateResult<T extends Record<string, any>> {
    aggregate?: AggregateResult<T>;
    nodes?: Array<HasuraDataItem<T>>;
}
export interface HasuraAggregateQueryResponse<K extends string, T extends Record<string, any>> {
    data: {
        [key in K]: HasuraAggregateResult<T>;
    };
}
export interface HasuraMultipleQueriesResponse<T extends Record<string, any>> {
    data: {
        [key in keyof T]: Equals<T[key], Aggregate<T[key]>> extends true
            ? HasuraAggregateResult<T[key]>
            : Array<T[key]>;
    };
}
type HasuraInsertInputObject<T extends Record<string, any>> = {
    [key in keyof T]?: Equals<T[key], ScalarJSON<T[key]>> extends true
        ? T[key]
        : Equals<T[key], ScalarJSONB<T[key]>> extends true
        ? T[key]
        : T[key] extends ObjectType
        ? HasuraInsertInputSingle<T[key], 'data'>
        : T[key] extends ObjectType[]
        ? HasuraInsertInput<T[key][0], 'data'>
        : T[key];
};
export type HasuraInsertOnConflict<T extends Record<string, any>, OC extends string = 'on_conflict'> = {
    [oc in OC]?: {
        constraint: string;
        update_columns: Array<keyof T>;
        where?: WhereBoolExp<T>;
    };
};
export type HasuraInsertInputSingle<
    T extends Record<string, any>,
    OKey extends string = 'objects',
    OC extends string = 'on_conflict'
> = {
    [ok in OKey]: HasuraInsertInputObject<T>;
} &
    HasuraInsertOnConflict<T, OC>;
export type HasuraInsertInput<
    T extends Record<string, any>,
    OKey extends string = 'objects',
    ConflictKey extends string = 'on_conflict'
> = {
    [ok in OKey]: Array<HasuraInsertInputObject<T>>;
} &
    HasuraInsertOnConflict<T, ConflictKey>;
export type HasuraUpdateInput<
    T extends Record<string, any>,
    WhereKey extends string = 'where',
    SKey extends string = '_set',
    IncKey extends string = '_inc'
> = {
    [ok in WhereKey]: WhereBoolExp<T>;
} &
    {
        [key in SKey]: {
            [k in ScalaKeys<T>]?: T[k];
        };
    } &
    {
        [key in IncKey]?: {
            [k in NumberScalarKeys<T>]: T[k];
        };
    };
export type HasuraDeleteInput<T extends Record<string, any>, WhereKey extends string = 'where'> = {
    [ok in WhereKey]: WhereBoolExp<T>;
};
export interface HasuraMutationResponse<T extends Record<string, any> = never> {
    affected_rows?: number;
    returning: T extends never ? never : Array<HasuraDataItem<T>>;
}

export {};
