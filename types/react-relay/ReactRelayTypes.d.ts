import * as React from 'react';

import {
    Disposable,
    Environment,
    Observer,
    Variables,
    _FragmentRefs,
    _RefType
} from 'relay-runtime';

export { FragmentRef } from 'relay-runtime';

export interface RelayProp {
    environment: Environment;
    refetch: undefined; // ensures no RelayRefetchProp is used with a fragment container
    hasMore: undefined; // ensures no RelayPaginationProp is used with a fragment container
}

export interface RelayRefetchProp {
    environment: Environment;
    refetch: (
        refetchVariables: Variables | ((fragmentVariables: Variables) => Variables),
        renderVariables?: Variables | null,
        observerOrCallback?: ObserverOrCallback | null,
        options?: RefetchOptions,
    ) => Disposable;
    hasMore: undefined; // ensures no RelayPaginationProp is used with a refetch container
}
export interface RefetchOptions {
    force?: boolean;
    fetchPolicy?: 'store-or-network' | 'network-only';
}

type ObserverOrCallback = Observer<void> | ((error: Error | null | undefined) => void);

export interface RelayPaginationProp {
    readonly environment: Environment;
    readonly hasMore: () => boolean;
    readonly isLoading: () => boolean;
    readonly loadMore: (
        pageSize: number,
        observerOrCallback?: ObserverOrCallback | null,
        options?: RefetchOptions | null,
    ) => Disposable | null | undefined;
    readonly refetchConnection: (
        totalCount: number,
        observerOrCallback?: ObserverOrCallback | null,
        refetchVariables?: Variables | null,
    ) => Disposable | null | undefined;
    refetch: undefined; // ensures no RelayRefetchProp is used with a pagination container
}

export type FragmentOrRegularProp<T> = T extends _RefType<infer U>
    ? _FragmentRefs<U>
    : T extends ReadonlyArray<_RefType<infer U>>
    ? ReadonlyArray<_FragmentRefs<U>>
    : T;

export type MappedFragmentProps<T> = {
    [K in keyof T]: FragmentOrRegularProp<T[K]>;
};
