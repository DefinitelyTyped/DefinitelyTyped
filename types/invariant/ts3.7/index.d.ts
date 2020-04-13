declare let invariant: invariant.InvariantStatic;

export = invariant;
export as namespace invariant;

declare namespace invariant {
    interface InvariantStatic {
        (testValue: false, format?: string, ...extra: any[]): never;
        (testValue: any, format?: string, ...extra: any[]): asserts testValue;
    }
}
