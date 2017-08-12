// Type definitions for define-lazy-prop 1.0
// Project: https://github.com/sindresorhus/define-lazy-prop#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export = defineLazyProp;

declare function defineLazyProp<O extends object, P extends string, T>(obj: O, prop: P, fn: () => T): O & {[K in P]: T};
