// Type definitions for jspath 0.4
// Project: https://github.com/dfilatov/jspath
// Definitions by: Piot Roszatycki <https://github.com/dex4er>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * @param path path expression
 * @param data input JSON document
 * @param replacement substitutions
 */
export function apply(path: string, data: any, replacement?: any): any[];
