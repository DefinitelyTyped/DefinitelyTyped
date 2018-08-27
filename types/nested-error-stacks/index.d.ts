// Type definitions for nested-error-stacks 2.1.0
// Project: https://github.com/mdlavin/nested-error-stacks
// Definitions by: Wouter van Heeswijk <https://github.com/woutervh->
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'nested-error-stacks' {
    export default class NestedError extends Error {
        constructor(message?: any, nested?: Error);
    }
}
