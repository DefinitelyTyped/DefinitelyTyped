// Type definitions for deep-diff 1.0
// Project: https://github.com/flitbit/diff/
// Definitions by: ZauberNerd <https://github.com/ZauberNerd>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export interface DiffNew<RHS> {
    kind: 'N';
    path?: any[] | undefined;
    rhs: RHS;
}

export interface DiffDeleted<LHS> {
    kind: 'D';
    path?: any[] | undefined;
    lhs: LHS;
}

export interface DiffEdit<LHS, RHS = LHS> {
    kind: 'E';
    path?: any[] | undefined;
    lhs: LHS;
    rhs: RHS;
}

export interface DiffArray<LHS, RHS = LHS> {
    kind: 'A';
    path?: any[] | undefined;
    index: number;
    item: Diff<LHS, RHS>;
}

export type Diff<LHS, RHS = LHS> = DiffNew<RHS> | DiffDeleted<LHS> | DiffEdit<LHS, RHS> | DiffArray<LHS, RHS>;

export type PreFilterFunction = (path: any[], key: any) => boolean;
export interface PreFilterObject<LHS, RHS = LHS> {
    prefilter?(path: any[], key: any): boolean;
    normalize?(currentPath: any, key: any, lhs: LHS, rhs: RHS): [ LHS, RHS ] | undefined;
}
export type PreFilter<LHS, RHS = LHS> = PreFilterFunction | PreFilterObject<LHS, RHS>;

export interface Accumulator<LHS, RHS = LHS> {
    push(diff: Diff<LHS, RHS>): void;
    length: number;
}

export type Observer<LHS, RHS = LHS> = (diff: Diff<LHS, RHS>) => void;

export type Filter<LHS, RHS = LHS> = (target: LHS, source: RHS, change: Diff<LHS, RHS>) => boolean;

export function diff<LHS, RHS = LHS>(lhs: LHS, rhs: RHS, prefilter?: PreFilter<LHS, RHS>): Array<Diff<LHS, RHS>> | undefined;
export function diff<LHS, RHS = LHS>(lhs: LHS, rhs: RHS, prefilter?: PreFilter<LHS, RHS>, acc?: Accumulator<LHS, RHS>): Accumulator<LHS, RHS>;
export function orderIndependentDiff<LHS, RHS = LHS>(lhs: LHS, rhs: RHS, prefilter?: PreFilter<LHS, RHS>): Array<Diff<LHS, RHS>> | undefined;
export function orderIndependentDiff<LHS, RHS = LHS>(lhs: LHS, rhs: RHS, prefilter?: PreFilter<LHS, RHS>, acc?: Accumulator<LHS, RHS>): Accumulator<LHS, RHS>;
export function observableDiff<LHS, RHS = LHS>(lhs: LHS, rhs: RHS, observer?: Observer<LHS, RHS>, prefilter?: PreFilter<LHS, RHS>, orderIndependent?: boolean): Array<Diff<LHS, RHS>>;
export function orderIndependentDeepDiff<LHS, RHS = LHS>(lhs: LHS, rhs: RHS, changes: Array<Diff<LHS, RHS>>, prefilter: PreFilter<LHS, RHS>, path: any[], key: any, stack: any[]): void;
export function orderIndepHash(object: any): number;
export function applyDiff<LHS, RHS = LHS>(target: LHS, source: RHS, filter?: Filter<LHS, RHS>): void;
export function applyChange<LHS>(target: LHS, source: any, change: Diff<LHS, any>): void;
export function revertChange<LHS>(target: LHS, source: any, change: Diff<LHS, any>): void;
