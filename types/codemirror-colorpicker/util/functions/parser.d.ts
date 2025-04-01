import { Format, Match, ParseableColor, ParseableGradient, ParsedColor } from "../../types";

export const color_regexp: RegExp;
export const color_split: ",";

export function matches(str: string): Match[];

export function convertMatches(str: string): { str: string; matches: Match[] };

export function convertMatchesArray(str: string, splitStr?: string): string[];

export function reverseMatches(str: string, matches: Match[]): string;

export function trim(str: string): string;

/**
 * @method rgb
 *
 * parse string to rgb color
 *
 * 		color.parse("#FF0000") === { r : 255, g : 0, b : 0 }
 *
 * 		color.parse("rgb(255, 0, 0)") == { r : 255, g : 0, b :0 }
 * 		color.parse(0xff0000) == { r : 255, g : 0, b : 0 }
 * 		color.parse(0xff000000) == { r : 255, g : 0, b : 0, a: 0 }
 *
 * @param {String} str color string
 * @returns {Object}  rgb object
 */
export function parse(str: ParseableColor): ParsedColor;
export function parse<T extends Record<string, number>>(argument: T): T;

export function parseGradient(colors: ParseableGradient): [string, number][];
