declare function deepDiff<LHS, RHS = LHS>(
    lhs: LHS,
    rhs: RHS,
    prefilter?: deepDiff.PreFilter<LHS, RHS>,
): Array<deepDiff.Diff<LHS, RHS>> | undefined;
declare function deepDiff<LHS, RHS = LHS>(
    lhs: LHS,
    rhs: RHS,
    prefilter?: deepDiff.PreFilter<LHS, RHS>,
    acc?: deepDiff.Accumulator<LHS, RHS>,
): deepDiff.Accumulator<LHS, RHS>;
declare namespace deepDiff {
    interface DiffNew<RHS> {
        kind: "N";
        path?: any[] | undefined;
        rhs: RHS;
    }

    interface DiffDeleted<LHS> {
        kind: "D";
        path?: any[] | undefined;
        lhs: LHS;
    }

    interface DiffEdit<LHS, RHS = LHS> {
        kind: "E";
        path?: any[] | undefined;
        lhs: LHS;
        rhs: RHS;
    }

    interface DiffArray<LHS, RHS = LHS> {
        kind: "A";
        path?: any[] | undefined;
        index: number;
        item: Diff<LHS, RHS>;
    }

    type Diff<LHS, RHS = LHS> = DiffNew<RHS> | DiffDeleted<LHS> | DiffEdit<LHS, RHS> | DiffArray<LHS, RHS>;

    type PreFilterFunction = (path: any[], key: any) => boolean;

    interface PreFilterObject<LHS, RHS = LHS> {
        prefilter?(path: any[], key: any): boolean;
        normalize?(currentPath: any, key: any, lhs: LHS, rhs: RHS): [LHS, RHS] | undefined;
    }
    type PreFilter<LHS, RHS = LHS> = PreFilterFunction | PreFilterObject<LHS, RHS>;

    interface Accumulator<LHS, RHS = LHS> {
        push(diff: Diff<LHS, RHS>): void;
        length: number;
    }

    type Observer<LHS, RHS = LHS> = (diff: Diff<LHS, RHS>) => void;

    type Filter<LHS, RHS = LHS> = (target: LHS, source: RHS, change: Diff<LHS, RHS>) => boolean;

    function diff<LHS, RHS = LHS>(
        lhs: LHS,
        rhs: RHS,
        prefilter?: PreFilter<LHS, RHS>,
    ): Array<Diff<LHS, RHS>> | undefined;
    function diff<LHS, RHS = LHS>(
        lhs: LHS,
        rhs: RHS,
        prefilter?: PreFilter<LHS, RHS>,
        acc?: Accumulator<LHS, RHS>,
    ): Accumulator<LHS, RHS>;
    function orderIndependentDiff<LHS, RHS = LHS>(
        lhs: LHS,
        rhs: RHS,
        prefilter?: PreFilter<LHS, RHS>,
    ): Array<Diff<LHS, RHS>> | undefined;
    function orderIndependentDiff<LHS, RHS = LHS>(
        lhs: LHS,
        rhs: RHS,
        prefilter?: PreFilter<LHS, RHS>,
        acc?: Accumulator<LHS, RHS>,
    ): Accumulator<LHS, RHS>;
    function observableDiff<LHS, RHS = LHS>(
        lhs: LHS,
        rhs: RHS,
        observer?: Observer<LHS, RHS>,
        prefilter?: PreFilter<LHS, RHS>,
        orderIndependent?: boolean,
    ): Array<Diff<LHS, RHS>>;
    function orderIndependentDeepDiff<LHS, RHS = LHS>(
        lhs: LHS,
        rhs: RHS,
        changes: Array<Diff<LHS, RHS>>,
        prefilter: PreFilter<LHS, RHS>,
        path: any[],
        key: any,
        stack: any[],
    ): void;
    function orderIndepHash(object: any): number;
    function applyDiff<LHS, RHS = LHS>(target: LHS, source: RHS, filter?: Filter<LHS, RHS>): void;
    function applyChange<LHS>(target: LHS, source: any, change: Diff<LHS, any>): void;
    function revertChange<LHS>(target: LHS, source: any, change: Diff<LHS, any>): void;
}

export = deepDiff;
