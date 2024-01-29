import type { Constants, EvaluatexResult, Options } from "./../";

declare function evaluatex(
    /** an ASCII or LaTeX expression to be parsed and evaluated. */
    expression: string,
    /** a map of constant values - values that don't change if you invoke fn more than once. */
    constants?: Constants,
    /** a map of options for the compiler. */
    options?: Options,
): EvaluatexResult;

export default evaluatex;
