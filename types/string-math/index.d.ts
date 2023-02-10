// Type definitions for string-math 1.0
// Project: https://github.com/devrafalko/string-math
// Definitions by: Rouzwelt <https://github.com/rouzwelt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Resolves arithmetical equation
 * @param eq - Equation to resolve
 * @param callback - (optional) Callback function for error and result
 */
declare function stringMath(
    eq: string,
    callback?: (errorObj: Error | null, result: number | null) => void
): number | null;

export = stringMath;
