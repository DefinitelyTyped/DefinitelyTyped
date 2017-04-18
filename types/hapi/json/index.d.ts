
/**
 * @see {@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#The_replacer_parameter}
 */
export type StringifyReplacer = ((key: string, value: any) => any) | (string | number)[] | undefined;

/**
 * Any value greater than 10 is truncated.
 */
export type StringifySpace = number | string;

export interface StringifyArguments {
    /** the replacer function or array. Defaults to no action. */
    replacer?: StringifyReplacer;
    /** number of spaces to indent nested object keys. Defaults to no indentation. */
    space?: StringifySpace;
}
