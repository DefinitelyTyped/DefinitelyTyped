/**
 * Returns the minimum element as measured by a scoring function f. Returns the
 * first such element if there are ties.
 */
declare function minBy<A, B>(
    as: Iterable<A>,
    f: (a: A) => B,
    compare?: (u: B, v: B) => number | null,
): A | null | undefined;

declare namespace minBy {}

export = minBy;
