// Type definitions for sortobject 1.2
// Project: https://github.com/bevry/sortobject
// Definitions by: Sander de Waal <https://github.com/SanderDeWaal1992>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

declare function sortObject<T extends object>(obj: T, comparator?: (a: string, b: string) => number): T;

export = sortObject;
