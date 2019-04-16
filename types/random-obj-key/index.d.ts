// Type definitions for random-obj-key 1.0
// Project: https://github.com/sindresorhus/random-obj-key
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

export = randomObjKey;

declare function randomObjKey<TObj extends { [key: string]: any }>(input: TObj): keyof TObj;
