// Type definitions for merge-objects 1.0
// Project: https://github.com/shevaroller/node-merge-objects#readme
// Definitions by: Richie Bendall <https://github.com/Richienb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function mergeObjects<T extends object, U extends object>(object1: T, object2: U): T & U;

export = mergeObjects;
