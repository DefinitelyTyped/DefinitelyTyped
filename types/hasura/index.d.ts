export const XHasuraAdminSecret = "x-hasura-admin-secret";
export const XHasuraClientName = "hasura-client-name";
export const XHasuraRole = "x-hasura-role";
export const XHasuraUserID = "x-hasura-user-id";
export const HASURA_ROLE_ADMIN = "admin";

export interface ColumnBoolExp<T = string | number | boolean> {
    _eq?: T | undefined;
    _neq?: T | undefined;
    _gt?: T | undefined;
    _gte?: T | undefined;
    _lt?: T | undefined;
    _lte?: T | undefined;
    _is_null?: boolean | undefined;
    _in?: T[] | undefined;
    _nin?: T[] | undefined;
}

export interface TextColumnBoolExp extends ColumnBoolExp<string> {
    _like?: string | undefined;
    _ilike?: string | undefined;
    _nlike?: string | undefined;
    _nilike?: string | undefined;
    _similar?: string | undefined;
    _nsimilar?: string | undefined;
}
export type JSONColumnBoolExp = ColumnBoolExp<string>;
export interface JSONBColumnBoolExp extends ColumnBoolExp<string> {
    _contains?: string | undefined;
    _contained_in?: string | undefined;
    _has_key?: string | undefined;
    _has_keys_all?: string | undefined;
    _has_keys_any?: string | undefined;
}

type Equals<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? true : false;
type ScalarType = string | number | boolean | ScalarJSON<unknown> | ScalarJSONB<unknown>;
type ObjectType = Record<string, ScalarType | Record<string, ScalarType> | Array<Record<string, ScalarType>>>;
export type ScalarJSON<T> = T & {
    __type?: "json" | undefined;
};
export type ScalarJSONB<T> = T & {
    __type?: "jsonb" | undefined;
};
export type ScalarUUID = string & { __type?: "uuid" | undefined };
export type WhereBoolExp<T extends Record<string, any>> =
    & {
        [key in keyof T]?: T[key] extends string ? TextColumnBoolExp
            : Equals<T[key], ScalarJSON<T[key]>> extends true ? JSONColumnBoolExp
            : Equals<T[key], ScalarJSONB<T[key]>> extends true ? JSONBColumnBoolExp
            : T[key] extends ObjectType ? WhereBoolExp<T[key]>
            : T[key] extends ObjectType[] ? WhereBoolExp<T[key][0]>
            : ColumnBoolExp<T[key]>;
    }
    & {
        _and?: Array<WhereBoolExp<T>> | undefined;
        _or?: Array<WhereBoolExp<T>> | undefined;
        _not?: Array<WhereBoolExp<T>> | undefined;
    };
type ScalarOrderBy = "asc" | "desc" | "asc_nulls_first" | "asc_nulls_last" | "desc_nulls_first" | "desc_nulls_last";
type NumberScalarKeys<T> = {
    [key in keyof T]: T[key] extends number ? key : never;
}[keyof T];
type ScalaKeys<T> = {
    [key in keyof T]: Equals<T[key], ScalarJSON<T[key]>> extends true ? key
        : Equals<T[key], ScalarJSONB<T[key]>> extends true ? key
        : T[key] extends number | string | boolean ? key
        : never;
}[keyof T];
type MinMaxAggregateKeys<T> = {
    [key in keyof T]: Equals<T[key], ScalarUUID> extends true ? never
        : T[key] extends number | string | boolean ? key
        : never;
}[keyof T];
export type OrderBy<T extends Record<string, any>> =
    & {
        [key in keyof T]?: Equals<T[key], ScalarJSON<T[key]>> extends true ? ScalarOrderBy
            : Equals<T[key], ScalarJSONB<T[key]>> extends true ? ScalarOrderBy
            : T[key] extends ObjectType ? OrderBy<T[key]>
            : T[key] extends ObjectType[] ? OrderBy<T[key][0]>
            : ScalarOrderBy;
    }
    & {
        [key: string]: any;
    };
interface BaseOrderByAggregate<T> {
    count?: ScalarOrderBy | undefined;
    max?: MinMaxAggregateKeys<T> extends never ? never
        :
            | {
                [key in MinMaxAggregateKeys<T>]?: ScalarOrderBy;
            }
            | undefined;
    min?:
        | {
            [key in MinMaxAggregateKeys<T>]?: ScalarOrderBy;
        }
        | undefined;
}

interface NumberOrderByAggregate<T, Keys extends keyof T> {
    avg?:
        | {
            [key in Keys]?: ScalarOrderBy;
        }
        | undefined;
    sum?:
        | {
            [key in Keys]?: ScalarOrderBy;
        }
        | undefined;
    stddev?:
        | {
            [key in Keys]?: ScalarOrderBy;
        }
        | undefined;
    stddev_pop?:
        | {
            [key in Keys]?: ScalarOrderBy;
        }
        | undefined;
    stddev_samp?:
        | {
            [key in Keys]?: ScalarOrderBy;
        }
        | undefined;
    var_pop?:
        | {
            [key in Keys]?: ScalarOrderBy;
        }
        | undefined;
    variance?:
        | {
            [key in Keys]?: ScalarOrderBy;
        }
        | undefined;
}
export type OrderByAggregate<T extends Record<string, any>> =
    & (NumberScalarKeys<T> extends never ? BaseOrderByAggregate<T>
        : BaseOrderByAggregate<T> & NumberOrderByAggregate<T, NumberScalarKeys<T>>)
    & OrderBy<T>;

export type Aggregate<T> = T & {
    __aggregate?: never | undefined;
};
interface BaseAggregateResult<T> {
    count?: number | undefined;
    max?:
        | {
            [key in MinMaxAggregateKeys<T>]?: T[key];
        }
        | undefined;
    min?:
        | {
            [key in MinMaxAggregateKeys<T>]?: T[key];
        }
        | undefined;
}
interface NumberAggregateResult<T, Keys extends keyof T> extends BaseAggregateResult<T> {
    avg?:
        | {
            [key in Keys]?: number;
        }
        | undefined;
    sum?:
        | {
            [key in Keys]?: number;
        }
        | undefined;
    stddev?:
        | {
            [key in Keys]?: number;
        }
        | undefined;
    stddev_pop?:
        | {
            [key in Keys]?: number;
        }
        | undefined;
    stddev_samp?:
        | {
            [key in Keys]?: number;
        }
        | undefined;
    var_pop?:
        | {
            [key in Keys]?: number;
        }
        | undefined;
    variance?:
        | {
            [key in Keys]?: number;
        }
        | undefined;
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

type AggregateResult<T> = NumberScalarKeys<T> extends never ? BaseAggregateResult<T>
    : NumberAggregateResult<T, NumberScalarKeys<T>>;

export interface HasuraAggregateResult<T extends Record<string, any>> {
    aggregate?: AggregateResult<T> | undefined;
    nodes?: Array<HasuraDataItem<T>> | undefined;
}
export interface HasuraAggregateQueryResponse<K extends string, T extends Record<string, any>> {
    data: {
        [key in K]: HasuraAggregateResult<T>;
    };
}
export interface HasuraMultipleQueriesResponse<T extends Record<string, any>> {
    data: {
        [key in keyof T]: Equals<T[key], Aggregate<T[key]>> extends true ? HasuraAggregateResult<T[key]>
            : Array<T[key]>;
    };
}
type HasuraInsertInputObject<T extends Record<string, any>> = {
    [key in keyof T]?: Equals<T[key], ScalarJSON<T[key]>> extends true ? T[key]
        : Equals<T[key], ScalarJSONB<T[key]>> extends true ? T[key]
        : T[key] extends ObjectType ? HasuraInsertInputSingle<T[key], "data">
        : T[key] extends ObjectType[] ? HasuraInsertInput<T[key][0], "data">
        : T[key];
};
export type HasuraInsertOnConflict<T extends Record<string, any>, OC extends string = "on_conflict"> = {
    [oc in OC]?: {
        constraint: string;
        update_columns: Array<keyof T>;
        where?: WhereBoolExp<T> | undefined;
    };
};
export type HasuraInsertInputSingle<
    T extends Record<string, any>,
    OKey extends string = "objects",
    OC extends string = "on_conflict",
> =
    & {
        [ok in OKey]: HasuraInsertInputObject<T>;
    }
    & HasuraInsertOnConflict<T, OC>;
export type HasuraInsertInput<
    T extends Record<string, any>,
    OKey extends string = "objects",
    ConflictKey extends string = "on_conflict",
> =
    & {
        [ok in OKey]: Array<HasuraInsertInputObject<T>>;
    }
    & HasuraInsertOnConflict<T, ConflictKey>;
export type HasuraUpdateInput<
    T extends Record<string, any>,
    WhereKey extends string = "where",
    SKey extends string = "_set",
    IncKey extends string = "_inc",
> =
    & {
        [ok in WhereKey]: WhereBoolExp<T>;
    }
    & {
        [key in SKey]: {
            [k in ScalaKeys<T>]?: T[k];
        };
    }
    & {
        [key in IncKey]?: {
            [k in NumberScalarKeys<T>]: T[k];
        };
    };
export type HasuraDeleteInput<T extends Record<string, any>, WhereKey extends string = "where"> = {
    [ok in WhereKey]: WhereBoolExp<T>;
};
export interface HasuraMutationResponse<T extends Record<string, any> = never> {
    affected_rows?: number | undefined;
    returning: T extends never ? never : Array<HasuraDataItem<T>>;
}

export {};
