/**
 * Camelcases a hyphenated string, for example:
 *
 *   > camelize('background-color')
 *   < "backgroundColor"
 *
 */
declare function camelize(string: string): string;

declare namespace camelize {}

export = camelize;
