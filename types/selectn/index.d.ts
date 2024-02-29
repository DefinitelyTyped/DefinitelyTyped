/**
 * Curried property accessor function that resolves deeply-nested object properties via dot/bracket-notation
 * string path while mitigating `TypeErrors` via friendly and composable API.
 *
 * @param path
 * Dot/bracket-notation string path or array.
 *
 * @param object
 * Object to access.
 *
 * @returns
 * Returns `selectn/1` when partially applied.
 *
 * Returns value at path if path exists.
 *
 * Returns `undefined` if path does not exist.
 */
declare function selectn(
    path: string | readonly string[],
    object: any,
): any;

declare function selectn(
    path: string | readonly string[],
): (object: any) => any;

export = selectn;
