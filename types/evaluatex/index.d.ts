// Type definitions for evaluatex 2.2
// Project: https://github.com/arthanzel/evaluatex
// Definitions by: Fawaz Orabi <https://github.com/forabi-cosuno>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import _ from './dist/evaluatex';

declare namespace evaluatex {
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
}

declare const evaluatex: typeof _;

export = evaluatex;
