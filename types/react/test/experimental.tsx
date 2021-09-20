/// <reference types="../experimental"/>

import React = require('react');

const { unstable_useSyncExternalStore: useSyncExternalStore } = React;
// keep in sync with `use-sync-external-store-tests.ts`
interface Store<State> {
    getState(): State;
    getServerState(): State;
    subscribe(onStoreChange: () => void): () => void;
}

declare const numberStore: Store<number>;
function useVersion(): number {
    return useSyncExternalStore(numberStore.subscribe, numberStore.getState);
}

function useStoreWrong() {
    useSyncExternalStore(
        // no unsubscribe returned
        // $ExpectError
        () => {
            return null;
        },
        () => 1,
    );

    // `string` is not assignable to `number`
    // $ExpectError
    const version: number = useSyncExternalStore(
        () => () => {},
        () => '1',
    );
}

declare const objectStore: Store<{ version: { major: number; minor: number }; users: string[] }>;
function useUsers(): string[] {
    return useSyncExternalStore(
        objectStore.subscribe,
        () => objectStore.getState().users,
        () => objectStore.getServerState().users,
    );
}
