import type { Program, Token } from "acorn";
import type { VisitorKeys } from "eslint-visitor-keys";

/**
 * Parses the given code and returns a abstract syntax tree (AST).
 * @param code The code which needs to be parsed.
 * @param options Options defining how to tokenize.
 * @returns The "Program" AST node.
 */
export function parse(code: string, options?: Options): Program;

/**
 * Returns the tokens of a given code.
 * @param code The code which needs to be parsed.
 * @param options Options defining how to tokenize.
 * @returns An array of tokens.
 */
export function tokenize(code: string, options?: Options): Token[];

/**
 * Returns the current `espree` version
 */
export const version: string;

/**
 * Returns all visitor keys for traversing the AST from eslint-visitor-keys
 */
export const VisitorKeys: VisitorKeys;

/**
 * Returns the latest ECMAScript supported by `espree`
 */
export const latestEcmaVersion: number;

/**
 * Returns an array of all supported ECMAScript versions
 */
export const supportedEcmaVersions: number[];

export interface Options {
    /**
     * Attach range information to each node
     */
    range?: boolean;

    /**
     * Attach line/column location information to each node
     */
    loc?: boolean;

    /**
     * Create a top-level comments array containing all comments
     */
    comment?: boolean;

    /**
     * Create a top-level tokens array containing all tokens
     */
    tokens?: boolean;

    /**
     * Set to 3, 5 (the default), 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 or 16 to specify the version of ECMAScript syntax you want to use.
     * You can also set to 2015 (same as 6), 2016 (same as 7), 2017 (same as 8), 2018 (same as 9), 2019 (same as 10), 2020 (same as 11), 2021 (same as 12), 2022 (same as 13), 2023 (same as 14), 2024 (same as 15) or 2025 (same as 16) to use the year-based naming.
     * You can also set "latest" to use the most recently supported version.
     */
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
        | 13
        | 14
        | 15
        | 16
        | 2015
        | 2016
        | 2017
        | 2018
        | 2019
        | 2020
        | 2021
        | 2022
        | 2023
        | 2024
        | 2025
        | "latest";

    /**
     * Only allowed when ecmaVersion is 3
     */
    allowReserved?: boolean;

    /**
     * Specify which type of script you're parsing ("script", "module", or "commonjs")
     */
    sourceType?: "script" | "module" | "commonjs";

    /**
     * Specify additional language features
     */
    ecmaFeatures?: {
        /**
         * Enable JSX parsing
         */
        jsx?: boolean;

        /**
         * Enable return in global scope (set to true automatically when sourceType is "commonjs")
         */
        globalReturn?: boolean;

        /**
         * Enable implied strict mode (if ecmaVersion >= 5)
         */
        impliedStrict?: boolean;
    };
}
