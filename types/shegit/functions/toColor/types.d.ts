import { Input } from '..';
import { RgbaObj } from '../../types';
export type Color = Input;
export type To = 'object';
export type ColorProp = Color | ((...args: any[]) => Color);
export type ReturnColorType<T extends To> = T extends 'object' ? RgbaObj : never;
export interface Default {
    input: Input;
    return: RgbaObj;
}
