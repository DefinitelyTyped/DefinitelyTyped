// Type definitions for use-synced-local-storage 1.0
// Project: https://github.com/berkeatac/use-synced-local-storage
// Definitions by: Stanislav Termosa <https://github.com/termosa>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.0

export function useSyncedLocalStorage<T = any>(
    key: string,
    initialValue?: T,
): [storage: T, setStorage: (newValue: T) => boolean];
