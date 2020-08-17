import { Cache } from './';

/**
 * Simple in-process cache implementation. Does not implement limits of any
 * sort.
 */
export let cache: Cache;

/**
 * Escape characters reserved in XML.
 *
 * If `markup` is `undefined` or `null`, the empty string is returned.
 */
export function escapeXML(markup?: any): string;

/**
 * Transforms hyphen case variable into camel case.
 *
 * @param string Hyphen case string
 */
export function hyphenToCamel(str: string): string;
