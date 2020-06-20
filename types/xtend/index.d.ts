// Type definitions for xtend 4.0.1
// Project: https://github.com/Raynos/xtend
// Definitions by: rhysd <https://rhysd.github.io>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Xtend {
    <T, U>(target: T, source: U): T & U;
    <T, U, V>(target: T, source1: U, source2: V): T & U & V;
    <T, U, V, W>(target: T, source1: U, source2: V, source3: W): T & U & V & W;
    <T, U, V, W, Q>(target: T, source1: U, source2: V, source3: W, source4: Q): T & U & V & W & Q;
    <T, U, V, W, Q, R>(target: T, source1: U, source2: V, source3: W, source4: Q, source5: R): T & U & V & W & Q & R;
    (target: any, ...sources: any[]): any;
}
declare const xtend: Xtend;
export = xtend;
