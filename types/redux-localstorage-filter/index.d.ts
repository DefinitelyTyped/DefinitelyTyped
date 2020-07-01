// Type definitions for redux-localstorage-filter 0.1
// Project: https://github.com/elgerlambert/redux-localstorage-filter
// Definitions by: Karol Janyst <https://github.com/LKay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { StorageAdapter } from "redux-localstorage";

export function getSubset(obj: any, paths: string[]): any;
export default function filter(paths?: string | string[]): <A>(adapter: StorageAdapter<A>) => StorageAdapter<A>;
