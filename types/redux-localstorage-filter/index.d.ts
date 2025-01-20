import { StorageAdapter } from "redux-localstorage";

export function getSubset(obj: any, paths: string[]): any;
export default function filter(paths?: string | string[]): <A>(adapter: StorageAdapter<A>) => StorageAdapter<A>;
