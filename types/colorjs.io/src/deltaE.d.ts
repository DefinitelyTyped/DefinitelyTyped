import { ColorTypes } from './color';
import { Methods } from './deltaE/index';

/**
 * @param options deltaE method to use as well as any other options to pass to the deltaE function
 * @throws {TypeError} Unknown or unspecified method
 */
export default function deltaE(
    color1: ColorTypes,
    color2: ColorTypes,
    options: Methods | ({ method: Methods } & Record<string, any>),
): number;
