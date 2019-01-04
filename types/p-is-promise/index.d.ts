// Type definitions for p-is-promise 2.0
// Project: https://github.com/sindresorhus/p-is-promise#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = pIsPromise;

declare function pIsPromise(promise: any): promise is Promise<any>;
