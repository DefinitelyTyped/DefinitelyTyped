export function useSyncedLocalStorage<T = any>(
    key: string,
    initialValue?: T,
): [storage: T, setStorage: (newValue: T) => boolean];
