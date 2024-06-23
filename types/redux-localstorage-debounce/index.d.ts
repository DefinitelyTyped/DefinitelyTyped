import { StorageAdapter } from "redux-localstorage";

export interface DebounceOptions {
    maxWait?: number | undefined;
    [key: string]: any;
}
export default function debounce(
    wait: number,
    options?: number | DebounceOptions,
): <A>(adapter: StorageAdapter<A>) => StorageAdapter<A>;
