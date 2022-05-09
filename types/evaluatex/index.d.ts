// Type definitions for evaluatex 2.2
// Project: https://github.com/arthanzel/evaluatex
// Definitions by: Fawaz Orabi <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type Token =
    | {
          type: 'NUMBER' | 'POWER' | 'DIVIDE' | 'LPAREN' | 'RPAREN' | 'COMMAND';
          value: string | number;
          name: string | null;
      }
      | {

        type: 'COMMAND';
        value(params: unknown[]): unknown;
        name: string | null;
      }
    | { type: 'SYMBOL'; value: string; name: null };

interface EvaluatexResult {
    /**
     * @param variables a map of variables that can change between invocations of fn.
     * @returns the numerical result of the calculation.
     */
    (variables?: Record<string, number>): number;
    tokens: Token[];
    expression: string;
}

declare function evaluatex(
    /** an ASCII or LaTeX expression to be parsed and evaluated. */
    expression: string,
    /** a map of constant values - values that don't change if you invoke fn more than once. */
    constants?: Record<string, number>,
    /** a map of options for the compiler. */
    options?: { latex?: boolean },
): EvaluatexResult;

export default evaluatex;
