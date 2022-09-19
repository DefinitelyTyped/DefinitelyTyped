// Type definitions for acorn-walk 8.2.0
// Project: https://github.com/acornjs/acorn
// Definitions by: Tyreal Hu <https://github.com/TyrealHu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.4

import * as Acorn from 'acorn';

declare module "acorn-walk" {
    type FullWalkerCallback<TState> = (
        node: Acorn.AcornNodeType,
        state: TState,
        type: Acorn.AcornNodeTypeString
    ) => void;

    type FullAncestorWalkerCallback<TState> = (
        node: Acorn.AcornNodeType,
        state: TState | Array<Acorn.AcornNodeType>,
        ancestors: Array<Acorn.AcornNodeType>,
        type: Acorn.AcornNodeTypeString
    ) => void;
    type WalkerCallback<TState> = (node: Acorn.AcornNodeType, state: TState) => void;

    type SimpleWalkerFn<TState> = (
        node: Acorn.AcornNodeType,
        state: TState
    ) => void;

    type AncestorWalkerFn<TState> = (
        node: Acorn.AcornNodeType,
        state: TState| Array<Acorn.AcornNodeType>,
        ancestors: Array<Acorn.AcornNodeType>
    ) => void;

    type RecursiveWalkerFn<TState> = (
        node: Acorn.AcornNodeType,
        state: TState,
        callback: WalkerCallback<TState>
    ) => void;

    type SimpleVisitors<TState> = {
        [type in Acorn.AcornNodeTypeString]: SimpleWalkerFn<TState>
    };

    type AncestorVisitors<TState> = {
        [type in Acorn.AcornNodeTypeString]: AncestorWalkerFn<TState>
    };

    type RecursiveVisitors<TState> = {
        [type in Acorn.AcornNodeTypeString]: RecursiveWalkerFn<TState>;
    };

    type FindPredicate = (type: Acorn.AcornNodeTypeString, node: Acorn.AcornNodeType) => boolean;

    interface Found<TState> {
        node: Acorn.AcornNodeType,
        state: TState
    }

    export function simple<TState>(
        node: Acorn.AcornNodeType,
        visitors: SimpleVisitors<TState>,
        base?: RecursiveVisitors<TState>,
        state?: TState
    ): void;

    export function ancestor<TState>(
        node: Acorn.AcornNodeType,
        visitors: AncestorVisitors<TState>,
        base?: RecursiveVisitors<TState>,
        state?: TState
    ): void;

    export function recursive<TState>(
        node: Acorn.AcornNodeType,
        state: TState,
        functions: RecursiveVisitors<TState>,
        base?: RecursiveVisitors<TState>
    ): void;

    export function full<TState>(
        node: Acorn.AcornNodeType,
        callback: FullWalkerCallback<TState>,
        base?: RecursiveVisitors<TState>,
        state?: TState
    ): void;

    export function fullAncestor<TState>(
        node: Acorn.AcornNodeType,
        callback: FullAncestorWalkerCallback<TState>,
        base?: RecursiveVisitors<TState>,
        state?: TState
    ): void;

    export function make<TState>(
        functions: RecursiveVisitors<TState>,
        base?: RecursiveVisitors<TState>
    ): RecursiveVisitors<TState>;

    export function findNodeAt<TState>(
        node: Acorn.AcornNodeType,
        start: number | undefined,
        end?: number | undefined,
        type?: FindPredicate | string,
        base?: RecursiveVisitors<TState>,
        state?: TState
    ): Found<TState> | undefined;

    export function findNodeAround<TState>(
        node: Acorn.AcornNodeType,
        start: number | undefined,
        type?: FindPredicate | string,
        base?: RecursiveVisitors<TState>,
        state?: TState
    ): Found<TState> | undefined;

    export const findNodeAfter: typeof findNodeAround;

    export const base: RecursiveVisitors<any>;
}
