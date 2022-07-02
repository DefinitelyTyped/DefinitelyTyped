// Type definitions for universalify 1.0
// Project: https://github.com/RyanZim/universalify#readme
// Definitions by: Richie Bendall <https://github.com/Richienb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function fromCallback(fn: (...args: any[]) => any): (...args: any[]) => Promise<any> | void;
export function fromPromise(fn: (...args: any[]) => any): (...args: any[]) => Promise<any> | void;
