// Type definitions for ensure-error 1.0
// Project: https://github.com/sindresorhus/ensure-error#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

export = ensureError;

declare function ensureError<T>(input: T): T extends Error ? T : ensureError.NonError;

declare namespace ensureError {
    interface NonError extends Error {
        name: 'NonError';
    }
}
