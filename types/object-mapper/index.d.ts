// Type definitions for object-mapper 6.2
// Project: https://github.com/wankdanker/node-object-mapper#readme
// Definitions by: Ryan Fahsel <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function merge(srcObject: object, mapObject: object): object;
export function merge<T>(srcObject: object, destinationObject: T, mapObject: object): T;
