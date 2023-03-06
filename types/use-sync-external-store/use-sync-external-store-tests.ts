import { useSyncExternalStore } from 'use-sync-external-store/shim';
import { useSyncExternalStoreWithSelector } from 'use-sync-external-store/shim/with-selector';

interface Store<State> {
    getState(): State;
    getServerState(): State;
    subscribe(onStoreChange: () => void): () => void;
}

declare const numberStore: Store<number>;
function useVersion(): number {
    return useSyncExternalStore(numberStore.subscribe, numberStore.getState, numberStore.getServerState);
}

function useStoreWrong() {
    useSyncExternalStore(
        // no unsubscribe returned
        // @ts-expect-error
        () => {
            return null;
        },
        () => 1,
    );

    // `string` is not assignable to `number`
    // @ts-expect-error
    const version: number = useSyncExternalStore(
        () => () => {},
        () => '1',
    );
}

declare const objectStore: Store<{ version: { major: number; minor: number }; users: string[] }>;
function useUsers(): string[] {
    return useSyncExternalStore(objectStore.subscribe, () => objectStore.getState().users);
}

function useReduxSelector<Selection>(
    selector: (state: { version: { major: number; minor: number }; users: string[] }) => Selection,
): Selection {
    return useSyncExternalStoreWithSelector(
        objectStore.subscribe,
        objectStore.getState,
        objectStore.getServerState,
        selector,
    );
}
function useReduxUsers(): string[] {
    return useSyncExternalStoreWithSelector(
        objectStore.subscribe,
        objectStore.getState,
        objectStore.getServerState,
        state => state.users,
    );
}
function useReduxVersion(): { major: number; minor: number } {
    useSyncExternalStoreWithSelector(
        objectStore.subscribe,
        objectStore.getState,
        objectStore.getServerState,
        state => state.version,
        // `patch` does not exist on type `{ major: number, minor: number }`
        // @ts-expect-error
        (a, b) => a.patch === b.patch,
    );
    return useSyncExternalStoreWithSelector(
        objectStore.subscribe,
        objectStore.getState,
        objectStore.getServerState,
        state => state.version,
        (a, b) => a.minor === b.minor && a.major === b.major,
    );
}
