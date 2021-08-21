// Type definitions for try-to-catch 3.0
// Project: https://github.com/coderaiser/try-to-catch
// Definitions by: Coderaiser <https://github.com/coderaiser>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.0

declare function tryToCatch(fn: (...args: unknown[]) => any, ...args: any[]): Promise<[error: Error, result?: any]>;
export = tryToCatch;
