// Type definitions for redux-localstorage-debounce 0.1
// Project: https://github.com/elgerlambert/redux-localstorage-debounce
// Definitions by: Karol Janyst <https://github.com/LKay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { StorageAdapter } from "redux-localstorage";

export interface DebounceOptions {
    maxWait?: number;
    [key: string]: any;
}
export default function debounce(wait: number, options?: number | DebounceOptions): <A>(adapter: StorageAdapter<A>) => StorageAdapter<A>;
