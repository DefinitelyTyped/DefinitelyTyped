// Type definitions for estraverse
// Project: https://github.com/estools/estraverse
// Definitions by: Sanex3339 <https://github.com/sanex3339>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'estraverse' {
    export interface Visitor {
        enter?: (node: any, parentNode: any) => any;
        leave?: (node: any, parentNode: any) => any;

        fallback?: string;

        keys?: {};
    }

    export enum VisitorOption {
        Skip, Break, Remove
    }

    export function traverse (ast: any, visitor: Visitor): any;
    export function replace (ast: any, visitor: Visitor): any;
}