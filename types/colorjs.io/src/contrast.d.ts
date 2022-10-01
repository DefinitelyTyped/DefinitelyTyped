import { ColorTypes } from './color';
import { Algorithms } from './contrast/';

/**
 * @param options Algorithm to use as well as any other options to pass to the contrast function
 * @throws {TypeError} Unknown or unspecified algorithm
 */
export default function contrast(
    background: ColorTypes,
    foreground: ColorTypes,
    options: Algorithms | ({ algorithm: Algorithms } & Record<string, any>),
): number;
