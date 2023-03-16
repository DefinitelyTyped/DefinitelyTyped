// Type definitions for @xinminlabs/espree 9.5
// Project: https://github.com/xinminlabs/espree
// Definitions by: Richard Huang <https://github.com/flyerhzm>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

export interface Options {
  range?: boolean;
  loc?: boolean;
  comment?: boolean;
  tokens?: boolean;
  ecmaVersion?:
  | 3
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 2015
  | 2016
  | 2017
  | 2018
  | 2019
  | 2020
  | 2021
  | 2022
  | "latest";
  sourceType?: "script" | "module";
  sourceFile?: string;
  ecmaFeatures?: {
    jsx?: boolean;
    globalReturn?: boolean;
    impliedStrict?: boolean;
  };
}
// https://github.com/eslint/espree#parse
export function parse(code: string, options?: Options): any;
// https://github.com/eslint/espree#tokenize
export function tokenize(code: string, options?: Options): any;
