/**
 * Resolves arithmetical equation
 * @param eq - Equation to resolve
 * @param callback - (optional) Callback function for error and result
 */
declare function stringMath(
    eq: string,
    callback?: (errorObj: Error | null, result: number | null) => void,
): number | null;

export = stringMath;
