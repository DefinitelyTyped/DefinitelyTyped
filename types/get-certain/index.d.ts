// Type definitions for get-certain 1.0
// Project: https://github.com/wtgtybhertgeghgtwtg/get-certain#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = getCertain;

declare function getCertain<TKey, TValue>(
    map: Map<TKey, TValue>,
    key: TKey,
    message?: string
): TValue;
