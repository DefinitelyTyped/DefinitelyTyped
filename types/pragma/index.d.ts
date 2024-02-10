
/**
 * Parse pragma and its content from JavaScript comments
 * 
 * @param {string} input
 * @return {object}
 */
declare function pragma(input: string): object;

/**
 * Parse pragma and its content from JavaScript comments(with option)
 * 
 * @param {string} input
 * @param {{parseContent?: (string) => any}} option
 * @return {object}
 */
declare function pragma(input: string, option: { parseContent?: (source: string) => any }): object;

export = pragma;
