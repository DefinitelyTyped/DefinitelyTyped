/**
 * Docs: https://github.com/suryapratapsinghsuryavanshi/solverjs/blob/main/src/utils/utils.js
 */

/**
 * Take a date string and return a week day name of the given date.
 */
export function dateToDay(date: string): string;

/**
 * Take a date string and return a string withe year, month day vlaues.
 */
export function dobToAge(date: string): string;

/**
 * If the word are contain number return true, else return false.
 */
export function containNumber(word: string): boolean;

/**
 * If the word are contain special charector return true, else return false.
 */
export function contatinSpecial(word: string): boolean;

/**
 * Extract the key word from given string and return it.
 */
export function keywordExtractor(str: string): string[];

/**
 * If the string contain keyword return true, else return false.
 */
export function isKeywordExists(str: string, keyword: string): boolean;

/**
 * CheckCamelCase method returns true if the string in camelCase, else return the false.
 */
export function checkCamelCase(varName: string): boolean;

/**
 * CheckFlatCase method returns true if the string in flatcase, else return the false.
 */
export function checkFlatCase(varname: string): boolean;

/**
 * CheckKebabCase method returns true if the string in kebab-case, else return the false.
 */
export function checkKebabCase(varName: string): boolean;

/**
 * CheckPascalCase method returns true if the string in PascalCase, else return the false.
 */
export function checkPascalCase(VarName: string): boolean;

/**
 * CheckSnakeCase method returns true if the string in snake_case, else return the false.
 */
export function checkSnakeCase(varName: string): boolean;

/**
 * URLShortener method converts any numeric id to a unique string
 */
export function URLShortener(id: number): string;

/**
 * railwayTimeConversion method converts normalized time string to Railway time string.
 */
export function railwayTimeConversion(timeString: string): string;

/**
 * Sort the list of values, partition in place method O(nlogn).
 */
export function sort(arr: number[], reverse?: boolean): void;

/**
 * ext method return the file extention.
 */
export function ext(filename: string): string;
