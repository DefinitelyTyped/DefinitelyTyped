declare function almostEqual(
    value: number,
    other: number,
    absoluteTolerance?: number,
    relativeTolerance?: number,
): boolean;
declare namespace almostEqual {
    const FLT_EPSILON: number;
    const DBL_EPSILON: number;
}
export = almostEqual;
