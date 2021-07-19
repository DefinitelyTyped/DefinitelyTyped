/**
 * Calculates the difference between two arrays or strings producing an array containing a list of changes
 * necessary to transform input into output.
 *
 *  diff( 'aba', 'acca' ); // [ 'equal', 'insert', 'insert', 'delete', 'equal' ]
 *
 * This function is based on the "O(NP) Sequence Comparison Algorithm" by Sun Wu, Udi Manber, Gene Myers, Webb Miller.
 * Unfortunately, while it gives the most precise results, its to complex for longer strings/arrow (above 200 items).
 * Therefore, `diff()` automatically switches to {@link module:utils/fastdiff~fastDiff `fastDiff()`} when detecting
 * such a scenario. The return formats of both functions are identical.
 *
 */
export default function diff(a: string, b: string, cmp?: (a: string, b: string) => boolean): Change[];

export default function diff(
    a: ReadonlyArray<string>,
    b: ReadonlyArray<string>,
    cmp?: (a: string, b: string) => boolean,
): Change[];

export type Change = "equal" | "insert" | "delete";
