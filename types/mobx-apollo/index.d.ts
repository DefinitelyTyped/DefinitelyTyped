// Type definitions for mobx-apollo 0.0
// Project: https://github.com/sonaye/mobx-apollo#readme
// Definitions by: Paul Selden <https://github.com/pselden>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import {
    ApolloClient,
    ObservableQuery,
    WatchQueryOptions,
    ApolloError
} from 'apollo-client';

export interface MobxApolloQueryOptions<T> extends WatchQueryOptions {
    client: ApolloClient<any>;
    onFetch?: ((result: T) => void) | undefined;
    onError?: ((error: ApolloError) => void) | undefined;
}

export interface MobxApolloQuery<T> {
    loading: boolean;
    data?: T | undefined;
    error?: ApolloError | undefined;
    ref: ObservableQuery<T>;
}

export default function graphql<T>(
    options: MobxApolloQueryOptions<T>
): MobxApolloQuery<T>;
