// Type definitions for deep-diff 1.0.2
// Project: https://github.com/flitbit/diff/
// Definitions by: ZauberNerd <https://github.com/ZauberNerd>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare namespace deepDiff {

    interface DiffNew<RHS,Kind='N'> {
        kind: Kind;
        path?: any[];
        rhs: RHS;
    }

    interface DiffDeleted<LHS,Kind='D'> {
        kind: Kind;
        path?: any[];
        lhs: LHS;
    }

    interface DiffEdit<LHS,RHS=LHS,Kind='E'> {
        kind: Kind;
        path?: any[];
        lhs: LHS;
        rhs: RHS;
    }

    interface DiffArray<LHS,RHS=LHS,Kind='A'> {
        kind: Kind;
        path?: any[];
        index: number;
        item: Diff<LHS,RHS>;
    }

    type Diff<LHS,RHS=LHS> = DiffNew<RHS> | DiffDeleted<LHS> | DiffEdit<LHS,RHS> | DiffArray<LHS,RHS>;

    interface PreFilterFunction {
        (path: any[], key: any): boolean;
    }
    interface PreFilterObject<LHS,RHS=LHS> {
        prefilter?(path: any[], key: any): boolean;
        normalize?(currentPath: any, key: any, lhs: LHS, rhs: RHS): [ LHS, RHS ] | undefined;
    }
    type PreFilter<LHS,RHS=LHS> = PreFilterFunction | PreFilterObject<LHS,RHS>;

    interface Accumulator<LHS,RHS=LHS> {
        push(diff: Diff<LHS,RHS>): void;
        length: number;
    }

    interface Observer<LHS,RHS=LHS> {
        (diff: Diff<LHS,RHS>): void;
    }

    interface Filter<LHS,RHS=LHS> {
        (target: LHS, source: RHS, change: Diff<LHS,RHS>): boolean;
    }

    interface DeepDiff {        
        diff<LHS,RHS=LHS>(lhs: LHS, rhs: RHS, prefilter?: PreFilter<LHS,RHS>): Diff<LHS,RHS>[] | undefined;
        diff<LHS,RHS=LHS>(lhs: LHS, rhs: RHS, prefilter?: PreFilter<LHS,RHS>, acc?: Accumulator<LHS,RHS>): Accumulator<LHS,RHS>;
        orderIndependentDiff: typeof DeepDiff.diff;
        observableDiff<LHS,RHS=LHS>(lhs: LHS, rhs: RHS, observer?: Observer<LHS,RHS>, prefilter?: PreFilter<LHS,RHS>, orderIndependent?: boolean): Diff<LHS,RHS>[];
        orderIndependentDeepDiff<LHS,RHS=LHS>(lhs: LHS, rhs: RHS, changes: Diff<LHS,RHS>[], prefilter: PreFilter<LHS,RHS>, path: any[], key: any, stack: any[]): void;
        orderIndepHash(object: any): number;
        applyDiff<LHS,RHS=LHS>(target: LHS, source: RHS, filter?: Filter<LHS,RHS>): void;
        applyChange<LHS,RHS>(target: LHS, source: any, change: Diff<LHS,RHS>): void;
        revertChange<LHS,RHS=LHS>(target: LHS, source: any, change: Diff<LHS,RHS>): void;
        isConflict(): boolean;
        noConflict(): DeepDiff;
    }
}

declare var DeepDiff: deepDiff.DeepDiff;

declare module "deep-diff" {
    var diff: deepDiff.DeepDiff;
    export = diff;
}
