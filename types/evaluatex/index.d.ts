// Type definitions for evaluatex 2.2
// Project: https://github.com/arthanzel/evaluatex
// Definitions by: Fawaz Orabi <https://github.com/forabi-cosuno>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import _ from './dist/evaluatex';

declare namespace evaluatex {
    type IncludeMethods<T> = Pick<T, { [K in keyof T]: T[K] extends (_: any) => any ? K : never }[keyof T]>;

    type Variable = number;

    type AbstractSyntaxTreeNode = (
        | {
              type: 'FUNCTION';
              value: { name?: keyof IncludeMethods<Math> } & ((...args: unknown[]) => number);
              name: string | null;
          }
        | { type: 'SYMBOL' | 'PRODUCT' | 'SUM' | 'INVERSE' | 'NEGATE' | 'POWER'; value: string }
        | { type: 'NUMBER'; value: number }
    ) & {
        children: AbstractSyntaxTreeNode[];
        name: null | string;
    };

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
        (variables?: Record<string, Variable>): number;
        tokens: Token[];
        expression: string;
        ast: AbstractSyntaxTreeNode;
    }
}

declare const evaluatex: typeof _;

export = evaluatex;
