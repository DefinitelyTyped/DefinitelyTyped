// Type definitions for extend 3.0
// Project: https://www.npmjs.com/package/extend
// Definitions by: Stefan Steinhart <https://github.com/reppners>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function extend<T, U>(deep: boolean, target: T, source: U): T & U;
declare function extend<T, U, V>(deep: boolean, target: T, source1: U, source2: V): T & U & V;
declare function extend<T, U, V, W>(deep: boolean, target: T, source1: U, source2: V,
  source3: W): T & U & V & W;
declare function extend<T, U, V, W, X>(deep: boolean, target: T, source1: U, source2: V,
  source3: W, source4: X): T & U & V & W & X;
declare function extend<T, U>(target: T, source: U): T & U;
declare function extend<T, U, V>(target: T, source1: U, source2: V): T & U & V;
declare function extend<T, U, V, W>(target: T, source1: U, source2: V, source3: W): T & U & V & W;
declare function extend<T, U, V, W, X>(target: T, source1: U, source2: V,
  source3: W, source4: X): T & U & V & W & X;
declare function extend(deep: boolean, target: any, ...sources: any[]): any;
declare function extend(target: any, ...sources: any[]): any;
declare namespace extend {}
export = extend;
