/**
 * Returns the maximum element as measured by a scoring function f. Returns the
 * first such element if there are ties.
 */
declare function maxBy<A, B>(
    as: Iterable<A>,
    f: (a: A) => B,
    compare?: (u: B, v: B) => number | null,
): A | null | undefined;

declare namespace maxBy {}

export = maxBy;
