import { AbstractLevelDOWN } from "abstract-leveldown";

export interface MemDown<K, V> extends AbstractLevelDOWN<K, V> {}

export interface MemDownConstructor {
    // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
    new<K = any, V = any>(): MemDown<K, V>;
    // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
    <K = any, V = any>(): MemDown<K, V>;
}

export const MemDown: MemDownConstructor;
export default MemDown;
