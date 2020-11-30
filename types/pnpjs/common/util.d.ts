import { ITypedHash } from "./collections";
/**
 * Gets a callback function which will maintain context across async calls.
 * Allows for the calling pattern getCtxCallback(thisobj, method, methodarg1, methodarg2, ...)
 *
 * @param context The object that will be the 'this' value in the callback
 * @param method The method to which we will apply the context and parameters
 * @param params Optional, additional arguments to supply to the wrapped method when it is invoked
 */
export declare function getCtxCallback(context: any, method: Function, ...params: any[]): Function;
export declare type DateAddInterval = "year" | "quarter" | "month" | "week" | "day" | "hour" | "minute" | "second";
/**
 * Adds a value to a date
 *
 * @param date The date to which we will add units, done in local time
 * @param interval The name of the interval to add, one of: ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second']
 * @param units The amount to add to date of the given interval
 *
 * http://stackoverflow.com/questions/1197928/how-to-add-30-minutes-to-a-javascript-date-object
 */
export declare function dateAdd(date: Date, interval: DateAddInterval, units: number): Date | undefined;
/**
 * Combines an arbitrary set of paths ensuring and normalizes the slashes
 *
 * @param paths 0 to n path parts to combine
 */
export declare function combine(...paths: string[]): string;
/**
 * Gets a random string of chars length
 *
 * https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
 *
 * @param chars The length of the random string to generate
 */
export declare function getRandomString(chars: number): string;
/**
 * Gets a random GUID value
 *
 * http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
 */
export declare function getGUID(): string;
/**
 * Determines if a given value is a function
 *
 * @param cf The thing to test for functionness
 */
export declare function isFunc(f: any): boolean;
/**
 * Determines if an object is both defined and not null
 * @param obj Object to test
 */
export declare function objectDefinedNotNull(obj: any): boolean;
/**
 * @returns whether the provided parameter is a JavaScript Array or not.
*/
export declare function isArray(array: any): boolean;
/**
 * Provides functionality to extend the given object by doing a shallow copy
 *
 * @param target The object to which properties will be copied
 * @param source The source object from which properties will be copied
 * @param noOverwrite If true existing properties on the target are not overwritten from the source
 * @param filter If provided allows additional filtering on what properties are copied (propName: string) => boolean
 *
 */
export declare function assign<T extends ITypedHash<any> = any, S extends ITypedHash<any> = any>(target: T, source: S, noOverwrite?: boolean, filter?: (propName: string) => boolean): T & S;
/**
 * Determines if a given url is absolute
 *
 * @param url The url to check to see if it is absolute
 */
export declare function isUrlAbsolute(url: string): boolean;
/**
 * Determines if a string is null or empty or undefined
 *
 * @param s The string to test
 */
export declare function stringIsNullOrEmpty(s: string): boolean;
/**
 * Ensures guid values are represented consistently as "ea123463-137d-4ae3-89b8-cf3fc578ca05"
 *
 * @param guid The candidate guid
 */
export declare function sanitizeGuid(guid: string): string;
/**
 * Shorthand for JSON.stringify
 *
 * @param o Any type of object
 */
export declare function jsS(o: any): string;
/**
 * Shorthand for Object.hasOwnProperty
 *
 * @param o Object to check for
 * @param p Name of the property
 */
export declare function hOP(o: any, p: string): boolean;
/**
 * Generates a ~unique hash code
 *
 * From: https://stackoverflow.com/questions/6122571/simple-non-secure-hash-function-for-javascript
 */
export declare function getHashCode(s: string): number;
//# sourceMappingURL=util.d.ts.map