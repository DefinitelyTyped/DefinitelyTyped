import { FuncRgbArray, RgbArrayFunc, RgbObj } from '../../../types';
export type Input = RgbArrayFunc | FuncRgbArray;
export interface Default {
    input: Input;
    return: RgbObj;
}
