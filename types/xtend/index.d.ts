interface Xtend {
    <T extends object, U extends object>(target: T, source: U): T & U;
    <T extends object, U extends object, V extends object>(target: T, source1: U, source2: V): T & U & V;
    <T extends object, U extends object, V extends object, W extends object>(
        target: T,
        source1: U,
        source2: V,
        source3: W,
    ): T & U & V & W;
    <T extends object, U extends object, V extends object, W extends object, Q extends object>(
        target: T,
        source1: U,
        source2: V,
        source3: W,
        source4: Q,
    ): T & U & V & W & Q;
    <T extends object, U extends object, V extends object, W extends object, Q extends object, R extends object>(
        target: T,
        source1: U,
        source2: V,
        source3: W,
        source4: Q,
        source5: R,
    ): T & U & V & W & Q & R;
    (target: object, ...sources: object[]): object;
}
declare const xtend: Xtend;
export = xtend;
