// Type definitions for try-catch 3.0.0
// Project: https://github.com/coderaiser/try-catch
// Definitions by: Coderaiser <https://github.com/coderaiser>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.0

declare module "try-catch" {
    export default function tryCatch (fn: Function, ...args: any[]): [error: Error, result?: any];
}

