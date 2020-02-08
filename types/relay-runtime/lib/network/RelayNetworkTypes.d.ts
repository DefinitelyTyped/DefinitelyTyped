import { RequestParameters } from '../util/RelayConcreteNode';
import { Variables, CacheConfig, Disposable } from '../util/RelayRuntimeTypes';
import { ObservableFromValue, RelayObservable } from './RelayObservable';

/**
 * An interface for fetching the data for one or more (possibly interdependent)
 * queries.
 */
export interface Network {
    execute: ExecuteFunction;
}
export type LogRequestInfoFunction = (arg: any) => void;

export interface PayloadData {
    [key: string]: any;
}

export interface PayloadError {
    message: string;
    locations?: Array<{
        line: number;
        column: number;
    }>;
    severity?: 'CRITICAL' | 'ERROR' | 'WARNING'; // Not officially part of the spec, but used at Facebook
}

export interface PayloadExtensions {
    [key: string]: any;
}

/**
 * The shape of a GraphQL response as dictated by the
 * [spec](https://graphql.github.io/graphql-spec/June2018/#sec-Response-Format)
 */
export interface GraphQLResponseWithData {
    data: PayloadData;
    errors?: PayloadError[];
    extensions?: PayloadExtensions;
    label?: string;
    path?: string[] | number[];
}
export interface GraphQLResponseWithoutData {
    data?: PayloadData;
    errors: PayloadError[];
    extensions?: PayloadExtensions;
    label?: string;
    path?: Array<string | number>;
}
export type GraphQLResponse = GraphQLResponseWithData | GraphQLResponseWithoutData;

/**
 * A function that returns an Observable representing the response of executing
 * a GraphQL operation.
 */
export type ExecuteFunction = (
    request: RequestParameters,
    variables: Variables,
    cacheConfig: CacheConfig,
    uploadables?: UploadableMap | null,
) => RelayObservable<GraphQLResponse>;

/**
 * A function that executes a GraphQL operation with request/response semantics.
 *
 * May return an Observable or Promise of a plain GraphQL server response, or
 * a composed ExecutePayload object supporting additional metadata.
 */
export type FetchFunction = (
    request: RequestParameters,
    variables: Variables,
    cacheConfig: CacheConfig,
    uploadables?: UploadableMap | null,
) => ObservableFromValue<GraphQLResponse>;

export interface LegacyObserver<T> {
    onCompleted?: () => void;
    onError?: (error: Error) => void;
    onNext?: (data: T) => void;
}

/**
 * A function that executes a GraphQL subscription operation, returning zero or
 * more raw server responses over time.
 */
export type SubscribeFunction = (
    request: RequestParameters,
    variables: Variables,
    cacheConfig: CacheConfig,
    observer?: LegacyObserver<GraphQLResponse>,
) => RelayObservable<GraphQLResponse> | Disposable;

export type Uploadable = File | Blob;
export interface UploadableMap {
    [key: string]: Uploadable;
}
