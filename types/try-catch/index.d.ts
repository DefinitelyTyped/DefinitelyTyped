// Type definitions for try-catch 3.0
// Project: https://github.com/coderaiser/try-catch
// Definitions by: Coderaiser <https://github.com/coderaiser>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.0

declare function tryCatch(fn: (...args: any[]) => any, ...args: any[]): [error: Error, result?: any];
export = tryCatch;
