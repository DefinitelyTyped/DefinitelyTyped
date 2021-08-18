import { BoxSides } from "../stylesmap";

export function getBoxSidesShorthandValue(styleShorthand: BoxSides): string;
export function getBoxSidesValueReducer(styleShorthand: string): (styles: BoxSides) => Array<[string, string]>;
export function getPositionShorthandNormalizer<T extends string>(
    shorthand: T,
): (styles: string) => { path: T; value: BoxSides };
export function getShorthandValues(string: string): string[];
export function isAttachment(string: string): boolean;
export function isColor(string: string): boolean;
export function isLength(string: string): boolean;
export function isLineStyle(string: string): boolean;
export function isPercentage(string: string): boolean;
export function isPosition(string: string): boolean;
export function isRepeat(string: string): boolean;
export function isURL(string: string): boolean;
