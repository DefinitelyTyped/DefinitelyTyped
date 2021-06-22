import type { PropertyKey } from '../index';
declare function CopyDataProperties<T, S, E extends PropertyKey>(
    target: T,
    source: S,
    excludedItems: E[],
): T & Omit<S, E>;
export = CopyDataProperties;
