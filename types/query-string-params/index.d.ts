/**
 * Transforms complex object in a URL search string.
 * For e.g. {orgType: ["a", "b", "c"], orgId: ["x ", "y"]} -> "orgType=a,b,c&orgId=x,y"
 */
export function propertyToUrl(obj: SearchParamOptions): string;

/**
 * Transforms a URL search string to an object.
 * For e.g. "?foo=xyz&bar=abc" -> {{foo: [xyz]}, {bar: [abc]}}
 */
export function urlToProperty(url: string): SearchParamOptions;

/**
 * Transforms a URL search string to an object.
 * For e.g. "?foo=xyz&bar=abc" -> [{foo: [xyz]}, {bar: [abc]}]
 */
export function urlToList(url: string): SearchParamOptions[];

/**
 * Search params options.
 * Can be in the form of key value pair where
 * the key is a string and value is an array of strings.
 */
export interface SearchParamOptions {
    [name: string]: string[];
}
