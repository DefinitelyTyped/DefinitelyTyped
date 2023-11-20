/**
 * Options for formatting and parsing
 */
interface FormatOptions {
    maxDecimals?: number | "auto";
    separator?: string;
    unit?: string;
    scale?: "SI" | "binary" | humanFormat.Scale;
    strict?: boolean;
    decimals?: number;
    prefix?: string;
}

/**
 * Scale map for defining prefixes and their corresponding factors
 */
interface ScaleMap {
    [index: string]: number;
}

/**
 * Scale options
 */
interface ScaleOptions {
    factor: number;
    prefix: string;
}

/**
 * Parsing result
 */
interface ParseResult extends ScaleOptions {
    unit: string;
    value: number;
}

/**
 * Converts a number to/from a human readable string
 */
declare function humanFormat(value: number, opts?: FormatOptions): string;

/**
 * Converts a number to/from a human readable string: 1337 ↔ 1.34kB
 */
declare namespace humanFormat {
    /**
     * Format the given numeric value into human-readable format
     */
    function bytes(value: number, opts?: FormatOptions): string;
    function raw(value: number, opts?: FormatOptions): string;
    /**
     * Parse the given human-readable string into numeric value
     */
    function parse(value: string, opts?: FormatOptions): number;
    namespace parse {
        function raw(value: string, opts?: FormatOptions): ParseResult;
    }
    class Scale {
        constructor(options: ScaleMap);
        static create(options: string[], base: number, initExp: number): Scale;
        findPrefix(value: number): ScaleOptions;
        parse(str: string, strict?: boolean): ParseResult;
    }
}

export as namespace humanFormat;

export = humanFormat;
